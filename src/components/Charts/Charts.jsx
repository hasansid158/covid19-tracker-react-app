import { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";

//styles
import styles from "./Charts.module.css";

//chart js
import { Line, Bar } from "react-chartjs-2";

export default function Charts() {
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

  return <div className={styles.container}>{lineChart}</div>;
}
