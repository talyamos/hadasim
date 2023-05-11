import React, { useEffect, useState } from "react";
import "./CovidData.css";
import { useContext } from "react";
import MyContext from "../MyContext";
import { styled } from "@mui/material/styles";

const CovidData = () => {
  const { membersData } = useContext(MyContext);
  const [unvaccinatedCount, setUnvaccinatedCount] = useState(0);
  const [date, setDate] = useState("");

  console.log(membersData);
  const currentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear()).slice(-2);
    const formattedDate = `${day}/${month}/${year}`;

    setDate(formattedDate);
  };
  useEffect(() => {
    currentDate();
  }, [currentDate]);

  const unvaccinatedMembers = () => {
    let count = 0;
    membersData.forEach((member) => {
      if (member.vaccinations.length === 0) {
        count++;
      }
      setUnvaccinatedCount(count);
    });
  };

  useEffect(() => {
    unvaccinatedMembers();
  }, [membersData]);

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <div className="CovidDataDiv">
      <div className="CoronaTitleDiv">
        <h3>CORONA VIRUS DATA:</h3>
      </div>
      <Div>{`The total number of unvaccinated members: ${unvaccinatedCount}`}</Div>
    </div>
  );
};

export default CovidData;
