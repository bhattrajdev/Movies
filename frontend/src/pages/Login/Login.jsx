import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Login = () => {
  return (
    <Grid
      spacing={4}
      columns={16}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid xs={8} >
        {/* for Logo */}
        <Avatar
          sx={{ background: "black", margin: "0 auto" }}
          alt="Image not found"
          
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" mb={4} sx={{ textAlign: "center" }}>
          Sign In
        </Typography>

        {/* for login form */}
        <Stack
          sx={{
            width: "400px",
          }}
          spacing={2}
        >
          {/* For username */}
          <FormControl>
            <TextField
              fullWidth
              label="Email Address*"
              variant="outlined"
            ></TextField>
          </FormControl>

          {/* For Password */}
          <FormControl>
            <TextField label="Password*" variant="outlined"></TextField>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              background: "black",
              "&:hover": {
                background: "black",
              },
            }}
          >
            <Typography variant="h6">Sign In</Typography>
          </Button>
        </Stack>
      </Grid>

      {/* Code for image */}
      {/* <Grid sx={8}>
            <img src={'/images/Login.png'} className="w-[600px]" />
      </Grid> */}
    </Grid>
  );
};

export default Login;
