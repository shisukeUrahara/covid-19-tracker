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
}) {
  console.log("**@ app left container ,  mapcenter is , ", mapCenter);
  return (
    <div className="app__left">
      {/* header */}
      <Header
        countries={countries}
        selectedCountry={selectedCountry}
        selectedCountryInfo={selectedCountryInfo}
        setSelectedCountryData={setSelectedCountryData}
      />

      <Stats selectedCountryInfo={selectedCountryInfo}></Stats>

      {/* MAP */}
      <Map center={mapCenter} zoom={mapZoom} />
    </div>
  );
}

export default AppLeftContainer;
