import React from "react";
import { Avatar, Box } from "@material-ui/core";
import "./PatientList.css";

const PatientList = ({ PET }) => {
  return (
    <Box className="pet-list">
      <h2>Who is the patient?</h2>
      {PET.results.map((pet) => (
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
      ))}
    </Box>
  );
};

export default PatientList;
