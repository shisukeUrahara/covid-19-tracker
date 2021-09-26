import React from "react";
import { Card, CardContent } from "@material-ui/core";

function AppRightContainer() {
  return (
    <Card className="app__right">
      <CardContent>
        <h1>HELLO APP RIGHT CONTAINER</h1>
        <h3>Live Cases by Country</h3>
        <h3>Worldwide new cases</h3>
        {/* TABLE */}
        {/* GRAPH */}
      </CardContent>
    </Card>
  );
}

export default AppRightContainer;
