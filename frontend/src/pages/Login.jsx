import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

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
