import { useState } from "react";
import alertContext from "./alertContext";

export default function Alert(props) {
    const [alert, setAlert] = useState(null);
    const showAlert = (type, message) => {
        setAlert({
          type: type,
          msg: message
        });
        setTimeout(() => {
          setAlert(null);
        }, 2000);
      }
    return (
        <alertContext.Provider value={{alert, setAlert, showAlert}}>
            {props.children}
        </alertContext.Provider>
    )
}