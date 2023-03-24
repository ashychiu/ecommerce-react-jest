import React from "react";
import { Card } from "@mui/material";
const ScoopOptions = ({ name, imagePath }) => {
  return (
    <Card>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Card>
  );
};

export default ScoopOptions;
