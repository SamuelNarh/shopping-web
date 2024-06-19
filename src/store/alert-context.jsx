import React, { useState } from "react";

const AlertContext = React.createContext({
  openAlertHandler: () => {},
  closeAlertHandler: () => {},
});

export const AlertProvider = (props) => {
  const [alert, setalert] = useState(false);

  const openAlertHandler = () => {
    setalert(true);
  };

  const closeAlertHandler = () => {
    setalert(false);
  };
  return (
    <AlertContext.Provider
      value={{
        openAlertHandler: openAlertHandler,
        closeAlertHandler: closeAlertHandler,
        alert: alert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
