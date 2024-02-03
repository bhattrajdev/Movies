import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components";
import { deleteUser, fetchUsers } from "../../../redux/slices/user";
import { Paper, Typography, Button, Box } from "@mui/material";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.movie.isLoading);

  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, users]);

  const handleViewClick = (id) => {
    alert("View button is in progress !! please cooperate 😅😅");
    // navigate(`/MovieDetail/${id}`);
  };

  const handleEditClick = (id) => {
    console.log(`Edit clicked for movie with id ${id}`);
  };

  const handleDeleteClick = (id) => {
    const response = window.confirm("Are you sure?");
    if (response) {
      dispatch(deleteUser(id));
      dispatch(fetchUsers());
    }
  };

  console.log(users);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "userName", headerName: "Username", width: 250 },
    {
      field: "isAdmin",
      headerName: "IsAdmin",
      width: 160,
      renderCell: (params) => (
        <>
          {params.row.isAdmin === true ? (
            <div className="text-green-500">Yes</div>
          ) : (
            <div className="text-red-500">No</div>
          )}
        </>
      ),
    },
    {
      field: "changeStatus",
      headerName: "Change Status",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<FaCheck />}
            onClick={() => handleViewClick(params.row._id)}
          >
            Change Status
          </Button>
        </>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<FaEye />}
            onClick={() => handleViewClick(params.row._id)}
          >
            View
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<FaTrash />}
            onClick={() => handleDeleteClick(params.row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <ToastContainer />
      <Loading state={loading} />
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Users</Typography>
        </Box>
      </Paper>

      {Array.isArray(users) ? (
        users.length > 0 ? (
          <>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                margin: "10px 0 auto",
              }}
            >
              <div style={{ height: 630, width: "100%" }}>
                <DataGrid
                  rows={users
                    .filter((user) => user._id != id)
                    .map((user, index) => ({
                      id: index + 1,
                      _id: user._id,
                      email: user.email,
                      userName: user.username,
                      isAdmin: user.isAdmin,
                      status: user.status,
                    }))}
                  columns={columns}
                  pageSize={10}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[10, 25, 50, 100]}
                  getRowId={(row) => row._id}
                />
              </div>
            </Paper>
          </>
        ) : (
          <>No Users Available.</>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewUser;
