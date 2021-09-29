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


import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "614225d9e28cff8f6i74313fa",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T16:56:57.865Z",
            "__v": 0
        },
        {
            "_id": "61422d09e2g8cff8f674313fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d09e28cff8f674313fie",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d09e2cff8f674313fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d09e28cff8f674313f",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "361422d09e28cff8f674313fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "6142209e28cff8f674313fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d09e28cff8f67413fe",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d09e28cff8f674313e",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:27:37.796Z",
            "__v": 0
        },
        {
            "_id": "61422d906ec67df81d43a23",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": "my title",
            "description": "This is description",
            "tag": "Personal",
            "date": "2021-09-15T17:29:52.027Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a note
    const addNote = (title, description, tag) => {
        //TODO API CALL
        let note = {
            "_id": "61422d906ec67df81d43a23",
            "user": "613f66ebe53f7721ba5d36f1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-15T17:29:52.027Z",
            "__v": 0
        };
        // setNotes(notes.push(note));   this will not work as push updates the array but our array is defined as const
        setNotes(notes.concat(note)); //concat returns a new array
    }
    //Delete a note
    const deleteNote = (id) => {
        //TODO API CALL
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
    }
    //Edit a note
    const editNote = (id, title, description, tag) => {

    }

    return (
        //anything wrapped in <noteState> </noteState> in app.js or any other component will have access to all the states, even the components childrens (down the hiearchy)
        //We can pass state, functions etc using context hook
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;