import React, { useState } from "react";
import { Button, Grid, Popover, Typography } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   popover: {
//     pointerEvents: 'none',
//   },
//   paper: {
//     padding: theme.spacing(1),
//   },
// }));

const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = !!anchorEl;
  const id = popoverOpen ? "simple-popover" : undefined;

  const handleChange = () => {
    setTermsChecked(!termsChecked);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <input type="checkbox" id="consent-checkbox" onChange={handleChange} />
        <label htmlFor="consent-checkbox">
          <Typography
            aria-describedby={id}
            variant="text"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            I Agree to Terms & Conditions
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "left",
            // }}
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "left",
            // }}
          >
            <Typography sx={{ p: 2 }}>
              This is a demo site. Orders will NOT be delivered
            </Typography>
          </Popover>
        </label>
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
