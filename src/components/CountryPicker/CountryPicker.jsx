import { useEffect, useState } from "react";
import { NativeSelect, InputLabel, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

export default function CountryPicker({ CountryChangeHandler }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountryApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchCountryApi();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <InputLabel variant="standard" htmlFor="select-country">
        Select Country
      </InputLabel>
      <NativeSelect
        defaultValue="world"
        id="select-country"
        onChange={(e) => {
          CountryChangeHandler(e.target.value != "world" ? e.target.value : "");
        }}
      >
        <option value="world">World</option>
        {fetchedCountries.map((country, idx) => {
          return (
            <option key={idx} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}
