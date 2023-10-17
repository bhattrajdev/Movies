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
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Welcome");
    },
  });
  return (
    <>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            height: "85vh",
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
            LOGIN
          </Typography>
          {/* form start */}
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* for register full code  */}

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              login
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
                New Here? <Link to="/register">REGISTER</Link>
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
