import React from 'react'
import {
  Paper,
  Typography,
  Button,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { FaPlus } from 'react-icons/fa6';

const ViewMovies = () => {
  // Sample data
  const data = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    // Add more data as needed
  ];
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Movies</Typography>
          <Button variant="contained">
            <FaPlus className="text-xl mr-2" />
            Add New
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: "20px", margin: "10px 0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default ViewMovies