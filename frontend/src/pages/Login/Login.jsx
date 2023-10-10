import React from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Box,
  Button,
} from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";


const Login = () => {
  const [register, useRegister] = useState(false);
// for handling register in form

const registerHandler = () =>{

}


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle submit");
  };
  return (
    <>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            height: "70vh",
            width: "350px",
            margin: "30px auto",
          }}
        >
          <Avatar
            sx={{ background: "red", margin: "auto", marginBottom: "10px" }}
          >
            <HttpsIcon />
          </Avatar>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            SIGN IN
          </Typography>
          {/* form start */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField fullWidth label="Email" />
            <TextField fullWidth type="password" label="Password" />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Or Continue With
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <img src={"./images/google.png"} width={30} />
              <img src={"./images/facebook.png"} width={30} />
            </Box>
            <Typography sx={{ textAlign: "center", }}>
              New Here?
              <Typography component="span" variant="inherit"  color="primary" sx={{marginLeft:1}} onClick={registerHandler}>
                 REGISTER
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
