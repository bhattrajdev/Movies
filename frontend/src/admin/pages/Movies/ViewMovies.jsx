import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components";
import { fetchMovies, deleteMovie } from "../../../redux/slices/movie";
import { Paper, Typography, Button, Box } from "@mui/material";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.data);
  const loading = useSelector((state) => state.movie.isLoading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Movies have changed:", movies);
  }, [movies]);

  const handleViewClick = (id) => {
    navigate(`/MovieDetail/${id}`);
  };

  const handleEditClick = (id) => {
    console.log(`Edit clicked for movie with id ${id}`);
  };

  const handleDeleteClick = (id) => {
    const response = window.confirm("Are you sure?");
    if (response) {
      dispatch(deleteMovie(id));
      dispatch(fetchMovies())
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "productionStudio", headerName: "Production Studio", width: 250 },
    { field: "releaseDate", headerName: "Release Date", width: 160 },
    { field: "status", headerName: "Status", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 300,
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
            color="warning"
            size="small"
            startIcon={<FaEdit />}
            onClick={() => handleEditClick(params.row._id)}
          >
            Edit
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
          <Typography variant="h6">Movies</Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/admin/add_movies");
            }}
          >
            <FaPlus className="text-xl mr-2" />
            Add New
          </Button>
        </Box>
      </Paper>

      {Array.isArray(movies) ? (
        movies.length > 0 ? (
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
                  rows={movies.map((movie, index) => ({
                    id: index + 1,
                    _id: movie._id,
                    title: movie.title,
                    releaseDate: movie.releaseDate,
                    productionStudio: movie.productionStudio,
                    status: movie.status,
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
          <>No movies available.</>
        )
      ) : (
        <></>
      )}
    </>
  );

};

export default ViewMovies;
