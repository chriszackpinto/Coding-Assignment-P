import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const DoctorCard = ({ doctor, pet }) => {
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
      <Link to="/selectdoctor">
        <ArrowBackSharpIcon color="disabled" className="btn-arrow" />
      </Link>

      <div key={doctor.id}>
        <h2>
          {doctor.name.title} {doctor.name.first} {doctor.name.last}
        </h2>
        <span>{doctor.id}</span>

        <Avatar
          alt="{doctor.name.first}"
          src={doctor.picture.thumbnail}
          className="doctor-card-avatar"
        />

        <p>
          {doctor.qualification.short} | {doctor.qualification.experience} years
          experience
        </p>

        <p>
          {doctor.location.street}, {doctor.location.city}
        </p>

        <p>
          {doctor.phone} <span>{doctor.whatsapp}</span>{" "}
        </p>

        <p>Mail: {doctor.email}</p>

        <hr />

        <p>
          {doctor.name.title} {doctor.name.first} is available for a minimum of
          7 days for free follow up via text post Consultation. However, doctor
          can decide to increase the follow up text days as per case basis.
        </p>

        <hr />
        <div className="prev-appointments">
          <p>Appointment History</p>
          <p>1 Prior Consultation</p>
        </div>
        <hr />
        <Link to="/appointmentcard" style={{ textDecoration: "none" }}>
          <Button classes={{ root: classes.root, label: classes.label }}>
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
