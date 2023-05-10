import React, { useEffect, useState } from "react";
import "./CovidData.css";
import { useContext } from "react";
import MyContext from "../MyContext";
// import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CovidData = () => {
  const { membersData } = useContext(MyContext);
  const [unvaccinatedCount, setUnvaccinatedCount] = useState(0);

  const unvaccinatedMembers = () => {
    membersData.forEach((member) => {
      if (member.vaccinations.length === 0) {
        setUnvaccinatedCount(unvaccinatedCount + 1);
      }
      console.log("jkj");
    });
  };

  useEffect(() => {
    unvaccinatedMembers();
  }, [membersData]);

  return (
    <div className="CovidDataDiv">
      <div className="CoronaTitleDiv">
        <h3>Corona Virus Data:</h3>
      </div>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h7" component="div">
            The total number of unvaccinated members:
          </Typography>
          <br />
          <Typography variant="h7">{unvaccinatedCount}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CovidData;
