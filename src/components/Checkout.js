import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./Checkout.css";

const Checkout = ({ doctor, pet }) => {
  return (
    <div className="page">
      <Link to="/appointmentcard">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>
      <div className="checkout-card">
        <div className="checkout-head">
          <div className="checkout-name">
            <h2>
              {doctor.name.title} {doctor.name.first} {doctor.name.last}
            </h2>
            <p className="checkout-doc-id">({doctor.id})</p>
            <p className="checkout-pet">
              <b>
                {pet.name} ({pet.id})
              </b>
            </p>
          </div>
          <div className="checkout-img">
            <Avatar
              alt="{doctor.name.first}"
              src={doctor.picture.thumbnail}
              className="checkout-avatar"
              style={{ height: "70px", width: "70px" }}
            />
          </div>
        </div>
        <div className="checkout-details">
          <p>Follow up</p>
          <p className="checkout-date">DAte will go here</p>
          <hr />
          <div className="checkout-total">
            <p>Amount to pay</p>
            <p>Rs 700/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
