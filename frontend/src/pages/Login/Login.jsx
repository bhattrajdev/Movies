import React from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/slices/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const token =  localStorage.getItem('token')


const navigate = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    dispatch(userLogin({ email: data.email, password: data.password }));
  };

  const shouldRedirect = useSelector((state) => state.user.shouldRedirect);
  useEffect(()=>{
    if(shouldRedirect){
      navigate('/')
    }
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <>
      <ToastContainer />
      <Grid sx={{}}>
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            height: "23%",
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
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* for register full code  */}
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <span className="text-red-500 pl-2">{message}</span>
              )}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              {...register("email", {
                required: "Email is Required !!!",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid Email !!!",
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <span className="text-red-500 pl-2">{message}</span>
              )}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is Required !!!",
              })}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
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
