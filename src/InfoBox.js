import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography color="textSecondary" className="infoBox__title">
            <h3>{title}</h3>
          </Typography>
          <h3 className="infoBox__cases"> Cases {cases}</h3>
          <Typography color="textSecondary" className="infoBox__total">
            <h3> Total {total}</h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
