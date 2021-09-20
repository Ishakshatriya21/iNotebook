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

    const notesInitial = [
        {
            "_id": "614225d9e28cff8f674313fa",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T16:56:57.865Z",
            "__v": 0
        },
        {
            "_id": "61422d09e28cff8f674313fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d906ec267df81d43a23",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:29:52.027Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        //anything wrapped in <noteState> </noteState> in app.js or any other component will have access to all the states, even the components childrens (down the hiearchy)
        //We can pass state, functions etc using context hook
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;