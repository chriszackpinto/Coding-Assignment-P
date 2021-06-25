import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const AppointmentCard = ({ doctor, pet }) => {
  const useStyles = makeStyles({
    root: {
      background: "#F28F3B",
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
      textTransform: "capitalize",
    },
  });
  const classes = useStyles();

  return (
    <div className="page">
      <Link to="/doctorcard">
        <ArrowBackSharpIcon color="disabled" className="btn-arrow" />
      </Link>

      <h2>Appointment Details</h2>

      <div key={pet.id} className="pet-card">
        <div className="pet-img">
          <Avatar alt="{pet.name}" src={pet.picture} className="pet-avatar" />
        </div>
        <div className="pet-text">
          <p>
            {pet.name} ({pet.animal})
          </p>
          <p className="pet-id">{pet.id}</p>
        </div>
      </div>

      <label htmlFor="">Date:</label>
      <label htmlFor="">Time:</label>
      <label htmlFor="">Reason:</label>

      <hr />

      <p>
        By proceeding, I agree that I have read and understood the Terms &
        Conditions of usage of 247 and consent to the same. I am voluntarily
        availing of the services provided on this platform. I am fully aware
        that I will not be undergoing a physical examination by a physician
        prior to a physician recommending medical tests and/ or treatment and/or
        the prescribing of OTC drugs. I am also aware that the consultation on
        247 Application does not preclude my rights to visit a physician and opt
        for a physical examination at any point in time and I am free at any
        time during the consultation to request for the same.
      </p>

      <p>Receive status message on WhatsApp</p>

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <Button classes={{ root: classes.root, label: classes.label }}>
          Proceed
        </Button>
      </Link>
    </div>
  );
};

export default AppointmentCard;
