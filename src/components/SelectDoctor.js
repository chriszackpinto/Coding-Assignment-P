import React from "react";
import { useHistory, Link } from "react-router-dom";

import Form from "./Form";
import { Avatar, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./SelectDoctor.css";

const SelectDoctor = ({ DOCTOR_API, setDoctor }) => {
  let history = useHistory();

  function handleClick(id) {
    setDoctor(id);
    history.push("/doctorcard");
  }

  return (
    <div className="page">
      <Link to="/selectpatient">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>
      <h2>Find and Book</h2>
      <Form />
      {DOCTOR_API.results.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <div className="doctor-img">
            <Avatar
              alt="{doctor.name.first}"
              src={doctor.picture.thumbnail}
              className="doctor-avatar"
            />
          </div>
          <div className="doctor-text">
            <div className="doctor-name">
              <p>
                {doctor.name.title} {doctor.name.first} {doctor.name.last}
              </p>
              {doctor.starred ? <StarIcon className="starred" /> : ""}
            </div>
            <p>
              {" "}
              {doctor.qualification.degree} ({doctor.qualification.short})
            </p>
            <p>{doctor.qualification.experience} years experience</p>
            <p>
              {doctor.location.street}, {doctor.location.city}
            </p>
            <div className="doctor-feedback">
              {doctor.likes} {doctor.stories} Patient Stories
            </div>
          </div>
          <div className="doctor-cta">
            <p
              className={`doctor-${
                doctor.available ? "available" : "unavailable"
              }`}
            >
              {doctor.available ? "Available Today" : "Unavailable Today"}
            </p>
            <Button variant="outlined" onClick={() => handleClick(doctor)}>
              Book an appointment
            </Button>
            <Button variant="outlined">Call clinic</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectDoctor;
