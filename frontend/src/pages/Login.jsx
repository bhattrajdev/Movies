import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Stack,
  Typography,
  Avatar
} from "@mui/material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* for Logo */}
      <Avatar sx={{fontSize:'20px', background:'blue'}} alt="Image not found"><LockOutlinedIcon/></Avatar>
      <Typography variant="h4" mb={4}>Sign In</Typography>


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

        <Button variant="contained">Sign In</Button>
      </Stack>
    </Box>
  );
};

export default Login;
