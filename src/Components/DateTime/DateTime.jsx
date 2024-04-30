import React from "react";

export const DateTime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  const localDate = `${day}/${month}/${year}`;

  return <div>{localDate}</div>;
};
