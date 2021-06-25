import React from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "./Form";
import { Avatar } from "@material-ui/core";
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
        <ArrowBackSharpIcon color="disabled" className="btn-arrow" />
      </Link>
      <h2>Find and Book</h2>
      <Form />
      {DOCTOR_API.results.map((doctor) => (
        <div
          key={doctor.id}
          className="doctor-card"
          onClick={() => handleClick(doctor)}
        >
          <div className="doctor-img">
            <Avatar
              alt="{doctor.name.first}"
              src={doctor.picture.thumbnail}
              className="doctor-avatar"
            />
          </div>
          <div className="doctor-text">
            <p>
              {doctor.name.title} {doctor.name.first} {doctor.name.last}
            </p>
            {doctor.starred ? <StarIcon /> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectDoctor;
