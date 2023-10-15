import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section id="page_404">
      <div className="svg"></div>
      <div className="text">Looks Like you are lost?</div>
      <div className="btn-home">
        {" "}
        <Link to="./">Go Home</Link>
      </div>
    </section>
  );
};

export default PageNotFound;
