import React from "react";
import { Box,Stack } from "@mui/material";

const Login = () => {
  return (
<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>
  );
};

export default Login;
