import React, { useState } from "react";
import { useEffect } from "react";
import { TextField, Box, Button, Paper, Typography } from "@mui/material";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { createBanner } from "../../../redux/slices/banner";

import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { showSuccessToast } from "../../../pages/Errors/ToastError/ToastError";
const AddUser = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedBanner, setSelectedBanner] = useState([]);
  const [validationError, setValidationError] = useState(null);

  const dispatch = useDispatch();
  const shouldRedirect = useSelector((state) => state.banner.shouldRedirect);

  useEffect(() => {
    if (shouldRedirect) {
      showSuccessToast("Banner Added Successfully");
      navigate("/admin/banner/view_banner");
    }
  }, [shouldRedirect]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedFileTypes = ["image/jpeg", "image/png"];

      if (!allowedFileTypes.includes(file.type)) {
        setValidationError("Invalid File format !!!");
      } else {
        try {
          const imageUrl = URL.createObjectURL(file);
          const fileData = { file };

          if (file.type.startsWith("image/")) {
            setSelectedBanner([{ imageUrl, fileData }]);
          } else {
            console.error("Invalid file type for poster");
          }
        } catch (error) {
          console.error("Error creating object URL:", error);
        }
      }
    } else {
      setValidationError("Banner is required !!!");
      setSelectedBanner([]);
    }
  };

  const onSubmit = (data, e) => {
    if (selectedBanner.length < 0) {
      setValidationError("nofile");
    } else {
      const image = selectedBanner[0].fileData.file;
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("link", data.link);
      formData.append("image", image);
      formData.append("startDate", data.startDate);
      formData.append("endDate", data.endDate);

      try {
        dispatch(createBanner(formData));
      } catch (error) {
        console.error("Error dispatching createbanner:", error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Add User</Typography>
          <Button variant="contained" onClick={() => navigate("/admin/banner")}>
            <FaEye className="text-xl mr-2" />
            View Banner
          </Button>
        </Box>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box
          component="form"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* for title */}
          <Box>
            <label>
              Title:{" "}
              <ErrorMessage
                errors={errors}
                name="title"
                render={({ message }) => (
                  <span className="text-red-500 ">{message}</span>
                )}
              />
            </label>
            <TextField
              fullWidth
              id="title"
              name="title"
              {...register("title", {
                required: "Title is Required !!!",
              })}
            />
          </Box>

          {/* for link */}
          <Box mt={2}>
            <label>
              Link:{" "}
              <ErrorMessage
                errors={errors}
                name="link"
                render={({ message }) => (
                  <span className="text-red-500 ">{message}</span>
                )}
              />
            </label>
            <TextField
              fullWidth
              id="link"
              name="link"
              {...register("link", {
                required: "Link is Required !!!",
              })}
            />
          </Box>

          {/* FOR UPLOADS */}
          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <label>
                Image:
                <span>
                  <span className={`text-red-500 pl-2`}>
                    {validationError === "nofile"
                      ? "Banner is required !!!"
                      : validationError
                      ? validationError
                      : null}
                  </span>
                </span>
              </label>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minWidth: "300px",
                  height: "400px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => document.getElementById("image").click()}
              >
                <input
                  accept="image/*"
                  multiple
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                  style={{ display: "none" }}
                />

                {selectedBanner.length > 0 && (
                  <div>
                    <img
                      src={selectedBanner[0].imageUrl}
                      alt="Selected Poster"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
                {selectedBanner.length === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    Click to upload poster
                  </span>
                )}
              </Box>
            </Box>
          </Box>

          {/* for start and end date */}
          <Box mt={2} sx={{ display: "flex", gap: "15px" }}>
            <Box sx={{ width: "100%" }}>
              <label>
                Start Date:{" "}
                <ErrorMessage
                  errors={errors}
                  name="startDate"
                  render={({ message }) => (
                    <span className="text-red-500 ">{message}</span>
                  )}
                />
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                {...register("startDate", {
                  required: "Start Date is Required !!!",
                })}
                min={currentDate}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                  ":focus": {
                    border: "1px solid #1976D2",
                    boxShadow: "0 0 5px #1976D2",
                  },
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <label>
                End Date:{" "}
                <ErrorMessage
                  errors={errors}
                  name="endDate"
                  render={({ message }) => (
                    <span className="text-red-500 ">{message}</span>
                  )}
                />
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                {...register("endDate", {
                  required: "End Date is Required !!!",
                })}
                min={currentDate}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  outline: "none",
                  ":focus": {
                    border: "1px solid #1976D2",
                    boxShadow: "0 0 5px #1976D2",
                  },
                }}
              />
            </Box>
          </Box>

          {/* for submit button */}
          <Box mt={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" sx={{ marginLeft: 1 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{ marginLeft: 1 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default AddUser;
