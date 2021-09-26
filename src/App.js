import "./App.css";
import AppLeftContainer from "./AppLeftContainer";
import AppRightContainer from "./AppRightContainer";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [selectedCountryInfo, setSelectedCountryInfo] = useState({});

  useEffect(() => {
    const init = async () => {
      await fetchCountries();
      await fetchWorldWideData();
    };

    init();
  }, []);

  const fetchWorldWideData = async () => {
    await fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("**@ selectedCountry data is , ", data);
        setSelectedCountryInfo(data);
      })
      .catch((err) => {
        console.log(
          "**@ something went wrong while fetching countrycode info for worldwide , error is , ",
          err
        );
      });
  };

  const fetchCountries = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log("**@ the data is , ", data);
        const countries = data.map((country) => {
          return {
            name: country.country,
            value: country.countryInfo.iso2,
          };
        });

        console.log("**@ processed countries are , ", countries);
        setCountries(countries);
      })
      .catch((err) => {
        console.log(
          "**@ something went wrong while fetching countries , error is , ",
          err
        );
      });
  };

  const setSelectedCountryData = async (e) => {
    e.preventDefault();

    const selectedCountryCode = e.target.value;
    console.log("**@ selectedCountry code is , ", selectedCountryCode);

    setSelectedCountry(selectedCountryCode);
    const url =
      selectedCountryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("**@ selectedCountry code is , ", selectedCountryCode);
        console.log("**@ selectedCountry data is , ", data);
        setSelectedCountryInfo(data);
      })
      .catch((err) => {
        console.log(
          "**@ something went wrong while fetching countrycode info for counrty code , ",
          selectedCountryCode,
          " , error is , ",
          err
        );
      });
  };
  return (
    <div className="App">
      <AppLeftContainer
        countries={countries}
        selectedCountry={selectedCountry}
        selectedCountryInfo={selectedCountryInfo}
        setSelectedCountryData={setSelectedCountryData}
      />
      <AppRightContainer />
    </div>
  );
}

export default App;
