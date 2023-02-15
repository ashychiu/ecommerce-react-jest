import React, { useState } from "react";
import { Button, Checkbox } from "@mui/material";

const SummaryForm = () => {
  const [giveConsent, setGiveConsent] = useState(false);

  const handleChange = () => {
    setGiveConsent(!giveConsent);
  };
  return (
    <div>
      <input type="checkbox" id="consent-checkbox" onChange={handleChange} />
      <label htmlFor="consent-checkbox">I agree to terms & conditions</label>
      <Button disabled={!giveConsent}>Submit</Button>
    </div>
  );
};

export default SummaryForm;
