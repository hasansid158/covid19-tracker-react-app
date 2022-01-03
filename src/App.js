import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

//styles
import "./App.css";

function App() {
  const [completeData, setCompleteData] = useState([]);
  const [countrySelected, setSelectedCountry] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const fetchedData = await fetchData();

      setCompleteData(fetchedData);
    }
    fetchAPI();
  }, []);

  const countryChangeHandler = async (country) => {
    const fetchedCountryData = await fetchData(country);
    setCompleteData(fetchedCountryData);
    setSelectedCountry(country);
  };

  return (
    <div className="container">
      <Cards data={completeData} />
      <CountryPicker CountryChangeHandler={countryChangeHandler} />
      <Charts data={completeData} country={countrySelected} />
    </div>
  );
}

export default App;
