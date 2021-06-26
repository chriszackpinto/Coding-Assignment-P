import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { PET_API, DOCTOR_API } from "./API/API";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SelectPatient from "./components/SelectPatient";
import SelectDoctor from "./components/SelectDoctor";
import DoctorCard from "./components/DoctorCard";
import AppointmentCard from "./components/AppointmentCard";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [pet, setPet] = useState();
  const [doctor, setDoctor] = useState();
  const [checked, setChecked] = useState(true);

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/selectpatient">
          <SelectPatient PET_API={PET_API} setPet={setPet} />
        </Route>
        <Route path="/selectdoctor">
          <SelectDoctor DOCTOR_API={DOCTOR_API} setDoctor={setDoctor} />
        </Route>
        <Route path="/doctorcard">
          <DoctorCard
            DOCTOR_API={DOCTOR_API}
            doctor={doctor}
            PET_API={PET_API}
            pet={pet}
          />
        </Route>
        <Route path="/appointmentcard">
          <AppointmentCard
            doctor={doctor}
            pet={pet}
            checked={checked}
            setChecked={setChecked}
          />
        </Route>
        <Route path="/checkout">
          <Checkout doctor={doctor} pet={pet} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
