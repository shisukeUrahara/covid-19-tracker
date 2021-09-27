import React from "react";
import InfoBox from "./InfoBox";

function Stats({ selectedCountryInfo }) {
  return (
    <div className="app_stats">
      <InfoBox
        title="CoronaVirus Cases"
        cases={selectedCountryInfo.todayCases}
        total={selectedCountryInfo.cases}
      ></InfoBox>
      <InfoBox
        title="Deaths"
        cases={selectedCountryInfo.todayDeaths}
        total={selectedCountryInfo.deaths}
      ></InfoBox>
      <InfoBox
        title="Recovered"
        cases={selectedCountryInfo.todayRecovered}
        total={selectedCountryInfo.recovered}
      ></InfoBox>
    </div>
  );
}

export default Stats;
