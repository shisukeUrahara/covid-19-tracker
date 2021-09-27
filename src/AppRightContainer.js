import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Table from "./Table";
import LineGraph from "./LineGraph";

function AppRightContainer({ tableData }) {
  return (
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases by Country</h3>
        <h3>Worldwide new cases</h3>
        {/* TABLE */}
        <Table countries={tableData} />
        {/* GRAPH */}
        <h2>Worldwide new cases</h2>
        <LineGraph />
      </CardContent>
    </Card>
  );
}

export default AppRightContainer;
