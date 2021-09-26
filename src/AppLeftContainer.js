import Header from "./Header";
import Stats from "./Stats";
import Map from "./Map";
import "./App.css";

function AppLeftContainer({
  countries,
  selectedCountry,
  selectedCountryInfo,
  setSelectedCountryData,
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

      <Stats selectedCountryInfo={selectedCountryInfo}></Stats>

      {/* MAP */}
      <Map />
    </div>
  );
}

export default AppLeftContainer;
