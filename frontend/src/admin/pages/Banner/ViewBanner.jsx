import { useEffect } from "react";
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
import { FaPlus,  FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBanner,
  fetchBanners,
  deleteBanner,
  createBanner,
} from "../../../redux/slices/banner";
import { Loading } from "../../../components";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../../config/Api";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const ViewBanner = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.banner.data);
  const loading = useSelector((state) => state.banner.isLoading);

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img
          src={`${api.defaults.baseURL}/${params.value}`}
          alt={`Banner ${params.id}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ),
    },
    { field: "title", headerName: "Title", width: 200 },
    { field: "startDate", headerName: "Start Date", width: 200 },
    { field: "endDate", headerName: "End Date", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: "10px" }}>
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

  const handleDeleteClick = (id) => {
    const response = window.confirm("Are you sure?");
    if (response) {
      dispatch(deleteBanner(id));
      dispatch(fetchBanners());
    }
  };

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
          <Typography variant="h6">Banner</Typography>
          <Button
            variant="contained"
            onClick={() => {
                navigate("/admin/add_banner");
            }}
          >
            <FaPlus className="text-xl mr-2" />
            Add New
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
        {Array.isArray(banner) ? (
          banner.length > 0 ? (
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
                    rows={banner.map((banner, index) => ({
                      id: index + 1,
                      _id: banner._id,
                      image: banner.image,
                      title: banner.title,
                      startDate: banner.startDate,
                      endDate: banner.endDate,
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
            <>No Banner available.</>
          )
        ) : (
          <></>
        )}
      </Paper>
    </>
  );
};

export default ViewBanner;
