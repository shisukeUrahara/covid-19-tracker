import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Table from "./Table";
import LineGraph from "./LineGraph";

function AppRightContainer({ tableData, casesType }) {
  return (
    <Card className="app__right">
      <CardContent>
        <div className="app__information">
          <h3>Live Cases by Country</h3>
          {/* TABLE */}
          <Table countries={tableData} />
          {/* GRAPH */}
          <h3>Worldwide new {casesType}</h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </div>
      </CardContent>
    </Card>
  );
}

export default AppRightContainer;
