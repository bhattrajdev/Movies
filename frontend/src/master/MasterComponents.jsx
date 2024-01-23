import React from "react";
import RouterComponents from "../routers/RouterComponents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../components";
function MasterComponents() {
    return (
      <>
        <ToastContainer />
        <Loading/>
        <RouterComponents />
      </>
    );
}


export default MasterComponents;
