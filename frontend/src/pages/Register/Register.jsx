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
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = () =>{
    console.log('Submit is being clicked')
  }
  return (
     <Grid>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            height: "65vh",
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
            REGISTER
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
            {/* for register full code  */}

            <TextField fullWidth label="Email" />
            <TextField fullWidth type="password" label="Password" />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              REGISTER
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Or Continue With
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <img src={"./images/google.png"} width={30} />
              <img src={"./images/facebook.png"} width={30} />
            </Box>
            <Typography sx={{ textAlign: "center" }}>
              <Typography
                component="span"
                variant="inherit"
                color="primary"
                sx={{ marginLeft: "2px", cursor: "pointer" }}
              >
                Already A User? <Link to='/login'>Login</Link>
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>

  )
}

export default Register