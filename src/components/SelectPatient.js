import React from "react";
import Nav from "./Nav";
import PatientList from "./PatientList";

const SelectPatient = ({ PET }) => {
  return (
    <div className="page">
      <Nav />
      <PatientList PET={PET} />
    </div>
  );
};

export default SelectPatient;
