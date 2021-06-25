import React from "react";
import { Link } from "react-router-dom";

import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const Checkout = () => {
  return (
    <div className="page">
      <Link to="/appointmentcard">
        <ArrowBackSharpIcon color="disabled" className="btn-arrow" />
      </Link>
    </div>
  );
};

export default Checkout;
