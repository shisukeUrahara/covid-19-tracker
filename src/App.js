import "./App.css";
import AppLeftContainer from "./AppLeftContainer";
import AppRightContainer from "./AppRightContainer";
import { useState, useEffect } from "react";
import { getSortedData } from "./utils";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [selectedCountryInfo, setSelectedCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

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
        const countries = data.map((country) => {
          return {
            name: country.country,
            value: country.countryInfo.iso2,
          };
        });

        const sortedData = getSortedData(data);

        setTableData(sortedData);
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

    setSelectedCountry(selectedCountryCode);
    const url =
      selectedCountryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountryInfo(data);
        setSelectedCountry(selectedCountryCode);

        setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });

        setMapZoom(4);
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
        mapCenter={mapCenter}
        mapZoom={mapZoom}
      />
      <AppRightContainer tableData={tableData} />
    </div>
  );
}

export default App;
