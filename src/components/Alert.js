import React, {useContext} from 'react'
import alertContext from '../Contexts/alert/alertContext'

export default function Alert(props) {
    const context = useContext(alertContext);
    const { alert } = context;
    const capitalize = (word)=>{
        // this funtion will capitalize the first letter of the alert type without altering the original value of alert type
        if(word==="danger"){
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //as alert is null by default, we cannot read its type and msg value which throws an error so we use && operator which will work like if alert is null then further jsx will not get executed
       alert && <div className={`alert alert-${alert.type} position-absolute`} role="alert">
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
    )
}