//This will be our boiler plate for context

// import { useContext } from "react";
// import noteContext from "./noteContext";

// const NoteState = ()=>{

//     return (
//         <noteContext.Provider>
//             {props.children}
//         </noteContext.Provider>
//     )
// }

// export default NoteState;


import { useContext, useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    return (
        //anything wrapped in <noteState> </noteState> in app.js or any other component will have access to all the states, even the components childrens (down the hiearchy)
        //We can pass state, functions etc using context hook
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;