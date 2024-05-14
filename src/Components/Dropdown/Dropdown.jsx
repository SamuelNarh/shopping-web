import React from "react";
import "./Dropdown.css";
import Button from "../../UI/Button/Button";

export const Dropdown = (props) => (
  <>
    <div className="backdrop" onClick={props.closedropDown} />
    <div className="dropdown">
      <Button className="linkbtn">Profile</Button>
      <Button className="linkbtn" onClick={props.onLogout}>
        Logout
      </Button>
    </div>
  </>
);
