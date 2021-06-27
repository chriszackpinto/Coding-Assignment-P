import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./Home.css";

const Home = () => {
  const GetStartedButton = withStyles(() => ({
    root: {
      background: "#F28F3B",
      fontSize: 18,
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "5px 5px 10px #808080",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f07b14",
      },
    },
    label: {
      textTransform: "none",
    },
  }))(Button);

  return (
    <div className="splash-card">
      <h1>Manage your Veterinary practice with comfort!</h1>
      <p>
        A cloud-based management platform for veterinary professionals to manage
        their daily tasks efficiently
      </p>

      <Link to="/selectpatient" className="link">
        <GetStartedButton>Get Started!</GetStartedButton>
      </Link>
    </div>
  );
};

export default Home;
