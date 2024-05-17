import React, { useState } from "react";

const AlertContext = React.createContext({
  alert: false,
  alertCloseHandler: () => {},
  activitateAlertHandler: () => {},
});

export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState(false);

  const alertCloseHandler = () => {
    setAlert(false);
  };

  const activitateAlertHandler = () => {
    setAlert(true);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: alert,
        alertCloseHandler: alertCloseHandler,
        activitateAlertHandler: activitateAlertHandler,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
