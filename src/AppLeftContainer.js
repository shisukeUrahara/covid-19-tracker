import Header from "./Header";
import Stats from "./Stats";
import Map from "./Map";
import { useState, useEffect } from "react";
import "./App.css";

function AppLeftContainer({
  countries,
  selectedCountry,
  selectedCountryInfo,
  setSelectedCountryData,
  mapCenter,
  mapZoom,
  mapCountries,
  casesType,
  setCasesType,
}) {
  return (
    <div className="app__left">
      {/* header */}
      <Header
        countries={countries}
        selectedCountry={selectedCountry}
        selectedCountryInfo={selectedCountryInfo}
        setSelectedCountryData={setSelectedCountryData}
      />

      <Stats
        selectedCountryInfo={selectedCountryInfo}
        casesType={casesType}
        setCasesType={setCasesType}
      ></Stats>

      {/* MAP */}
      <Map
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
        casesType={casesType}
      />
    </div>
  );
}

export default AppLeftContainer;
