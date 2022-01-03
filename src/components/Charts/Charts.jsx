import { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";

//styles
import styles from "./Charts.module.css";

//chart js
import { Line, Bar } from "react-chartjs-2";

export default function Charts({
  data: { confirmed, recovered, deaths },
  country,
}) {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  }, []);

  const lineChart = dailyData && (
    <Line
      data={{
        labels: dailyData && dailyData.map((data) => data.reportDate),
        datasets: [
          {
            data: dailyData && dailyData.map((data) => data.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData && dailyData.map((data) => data.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}
