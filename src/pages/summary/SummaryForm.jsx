import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleChange = () => {
    setTermsChecked(!termsChecked);
  };
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <input type="checkbox" id="consent-checkbox" onChange={handleChange} />
        <label htmlFor="consent-checkbox">I agree to terms & conditions</label>
      </Grid>
      <Grid item>
        <Button variant="contained" disabled={!termsChecked}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default SummaryForm;
