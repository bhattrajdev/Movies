import React from 'react'
import {
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      {" "}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Banner</Typography>
          <Button
            variant="contained"
            onClick={() => {
            //   navigate("/admin/add_movies");
            }}
          >
            <FaPlus className="text-xl mr-2" />
            Add New
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Banner