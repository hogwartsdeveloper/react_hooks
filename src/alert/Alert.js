import React, { useContext } from "react";
import { AlertContext, useAlert } from "./AlertContext";

export default function Alert() {
    // const alert = useContext(AlertContext)
    const alert = useAlert();

    if (!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.hide}>
            {alert.text}
        </div>
    )
}