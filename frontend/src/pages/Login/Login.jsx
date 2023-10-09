import React from "react";
import {
 Container,
 Box
 
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Login = () => {
  return (
<>
<Container>
<Grid columns={16}m spacing={2}>
<Grid xs={8}>hello</Grid>
<Grid xs={8}>Worlds</Grid>
</Grid>
</Container>
</>
  );
};

export default Login;
