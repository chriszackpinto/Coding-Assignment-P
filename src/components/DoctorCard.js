import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Button, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const BookNowButton = withStyles(() => ({
    root: {
      background: "#979D9C",
      borderRadius: 8,
      border: 0,
      color: "white",
      height: 35,
      padding: "0 30px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#6c6e6e",
      },
    },
  }))(Button);

  return (
    <div className="page">
      <Link to="/selectdoctor">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>

      <div className="doctor-card-wrapper">
        <h2 className="doctor-card-name">
          {doctor.name.title} {doctor.name.first} {doctor.name.last}
          <span className="doctor-card-id">({doctor.id})</span>
        </h2>

        <Avatar
          alt="{doctor.name.first}"
          src={doctor.picture.thumbnail}
          className="doctor-card-avatar"
          style={{ height: 120, width: 120, margin: 20 }}
        />

        <p>
          {doctor.qualification.short} | {doctor.qualification.experience} years
          experience
        </p>

        <p>
          {doctor.location.street}, {doctor.location.city}
        </p>

        <p>
          <CallIcon style={{ fontSize: 15 }} />
          {doctor.phone}
          <span className="whatsapp-number">
            <WhatsAppIcon style={{ fontSize: 15 }} />
            {doctor.whatsapp}
          </span>
        </p>

        <p>Mail: {doctor.email}</p>

        <hr />
        <div className="doctor-card-note">
          <ForumIcon className="doctor-card-chaticon" />
          <p className="doctor-card-text">
            {doctor.name.title} {doctor.name.first} is available for a minimum
            of 7 days for free follow up via text post Consultation. However,
            doctor can decide to increase the follow up text days as per case
            basis.
          </p>
        </div>
        <hr />
        <div className="prev-appointments">
          <p>Appointment History</p>
          <p>{doctor.history.length} Prior Consultation</p>
        </div>
        <Box className="doctor-card-box">
          {doctor.history.map((date) => (
            <div key={date.date}>
              <div className="doctor-history">
                <p>
                  {date.date}, {date.time}
                </p>
              </div>
              <hr className="page-line" />
            </div>
          ))}
        </Box>
        <hr />
        <Link to="/appointmentcard" style={{ textDecoration: "none" }}>
          <BookNowButton disableElevation>Book Now</BookNowButton>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
