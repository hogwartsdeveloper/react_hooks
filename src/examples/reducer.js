import React, { useState, useEffect, useRef, useMemo, useCallback, createContext } from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import ItemsList from "./ItemsList";
import Main from "./Main";

// export const AlertContext = createContext()

function App() {
  // const [alert, setAlert] = useState(false)

  // const toggleAlert = () => setAlert(prev => !prev)

  return (
    // <AlertContext.Provider value={alert}>

    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}}/>
      </div>
    </AlertProvider>

    /* /</AlertContext.Provider> */
  );
}

export default App;
