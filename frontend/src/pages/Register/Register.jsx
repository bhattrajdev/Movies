import React from "react";
import { useState, useEffect } from "react";
import { Grid, Paper, Typography, TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const Register = () => {
  const [step0, setStep0] = useState(true);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  // to haandle the steps of the code
  const handleSteps = (type) => {
    if (type === "next") {
      console.log("next button is being pressed");
      if (step1 === false && step2 === false && step3 === false) {
        setStep1(true);
        console.log(`step 1 false step 2 false step 3 false`);
      } else if (step1 == true && step2 == false && step3 === false) {
        console.log(`step 1 true step 2 false step 3 false`);
        setStep2(true);
      } else {
        console.log(`step 1 true step 2 true step 3 true`);
        setStep3(true);
      }
    } else if (type === "prev") {
      console.log("prev button is being pressed");
      if (step1 === true && step2 === true && step3 === true) {
        setStep3(false);
        console.log(`step 1 true step 2 true step 3 true`);
      } else if (step1 == true && step2 == true && step3 === false) {
        console.log(`step 1 true step 2 true step 3 false`);
        setStep2(false);
      } else {
        console.log(`step 1 true step 2 false step 3 false`);
        setStep1(false);
      }
    }
  };
  return (
    <>
      <Grid sx={{}}>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            height: "23%",
            width: "350px",
            margin: "30px auto",
            position: "relative",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            REGISTER
          </Typography>

          {/* for steps */}
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Step 1 */}
            <Box
              component="span"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: step1 === true ? "green" : "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                color: "white",
              }}
            >
              1
            </Box>

            {/* Line 1 */}
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "40%",
                left: "30px",
                width: "110px",
                height: "5px",
                background: step1 === true ? "green" : "gray",
              }}
            ></Box>

            {/* Step 2 */}
            <Box
              component="span"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: step2 === true ? "green" : "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                color: "white",
              }}
            >
              2
            </Box>
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "40%",
                left: "calc(2*30px + 110px)",
                width: "110px",
                height: "5px",
                background: step2 === true ? "green" : "gray",
              }}
            ></Box>

            <Box
              component="span"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: step3 === true ? "green" : "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                color: "white",
              }}
            >
              3
            </Box>
          </Box>

          {/* form start */}
          <Box
            component="form"
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* for step 0 code */}
            {step0 && !step1 && !step2 && !step3 && (
              <>
                {/* for email */}
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                />
                {/* for phone number */}
                <TextField
                  fullWidth
                  id="contact"
                  name="contact"
                  label="Phone Number"
                />
                {/* for date of birth */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker disableFuture label="Date Of Birth" />
                </LocalizationProvider>
                {/* for gender */}
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </>
            )}

            {/* for step 1 code */}
            {step0 && step1 && !step2 && !step3 && (
              <Typography variant="h6">
                Please enter the verification code that has been sent to your
                contact number.
              </Typography>
            )}

            <Grid container spacing={2}>
              {/* First Button */}
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={!step1}
                  onClick={() => {
                    handleSteps("prev");
                  }}
                >
                  <NavigateBeforeIcon /> Prev
                </Button>
              </Grid>

              {/* Second Button */}
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    handleSteps("next");
                  }}
                  disabled={step3}
                  color="primary"
                >
                  Next <NavigateNextIcon />
                </Button>
              </Grid>
            </Grid>
            {/* form end */}
            <Typography sx={{ textAlign: "center" }}>
              <Typography
                component="span"
                variant="inherit"
                color="primary"
                sx={{ marginLeft: "2px", cursor: "pointer" }}
              >
                Already a user? <Link to="/login">Login</Link>
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
