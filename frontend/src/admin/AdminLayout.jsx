import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/style.css";
import Layout from "./layout/Layout";
import ThemeProvider from "./utils/ThemeContext";

function AdminLayout() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default AdminLayout;
