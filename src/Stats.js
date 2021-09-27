import React from "react";
import InfoBox from "./InfoBox";
import { prettyPrintStat } from "./utils";
import numeral from "numeral";

function Stats({ selectedCountryInfo, casesType, setCasesType }) {
  return (
    <div className="app__stats">
      <InfoBox
        title="CoronaVirus Cases"
        isRed
        active={casesType == "cases"}
        onClick={(e) => setCasesType("cases")}
        cases={prettyPrintStat(selectedCountryInfo.todayCases)}
        total={numeral(selectedCountryInfo.cases).format("0.0a")}
      ></InfoBox>

      <InfoBox
        title="Recovered"
        onClick={(e) => setCasesType("recovered")}
        active={casesType == "recovered"}
        cases={prettyPrintStat(selectedCountryInfo.todayRecovered)}
        total={numeral(selectedCountryInfo.recovered).format("0.0a")}
      ></InfoBox>

      <InfoBox
        title="Deaths"
        isRed
        onClick={(e) => setCasesType("deaths")}
        active={casesType == "deaths"}
        cases={prettyPrintStat(selectedCountryInfo.todayDeaths)}
        total={numeral(selectedCountryInfo.deaths).format("0.0a")}
      ></InfoBox>
    </div>
  );
}

export default Stats;
