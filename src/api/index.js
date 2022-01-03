import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (countrySelected) => {
  let dynamicUrl = url;

  if (countrySelected) {
    dynamicUrl = `${url}/countries/${countrySelected}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url + "/daily");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(url + "/countries");

    return data.countries.map((country) => {
      return country.name;
    });
  } catch (error) {
    console.log(error);
  }
};
