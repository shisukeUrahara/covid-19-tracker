import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Table from "./Table";

function AppRightContainer({ tableData }) {
  return (
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases by Country</h3>
        <h3>Worldwide new cases</h3>
        {/* TABLE */}
        <Table countries={tableData} />
        {/* GRAPH */}
      </CardContent>
    </Card>
  );
}

export default AppRightContainer;
