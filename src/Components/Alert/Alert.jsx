import React from "react";
import "./Alert.css";

export const Alert = (props) => {
  if (alert) {
    setTimeout(() => {
      props.close();
    }, 5000);
  }
  return (
    <div className="alert" onClick={props.close}>
      <span className="closebtn" onClick={props.close}>
        &times;
      </span>
      {props.message}
    </div>
  );
};
