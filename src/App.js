import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

//styles
import "./App.css";

function App() {
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const fetchedData = await fetchData();

      setCompleteData(fetchedData);
    }
    fetchAPI();
  }, []);

  return (
    <div className="container">
      <Cards data={completeData} />
      <Charts />
    </div>
  );
}

export default App;
