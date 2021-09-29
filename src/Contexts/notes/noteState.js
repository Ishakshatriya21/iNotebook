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
    const host = 'http://localhost:5000';

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Get all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjY2ZWJlNTNmNzcyMWJhNWQzNmYxIn0sImlhdCI6MTYzMTcwMjU4Mn0.Mx0QGwAvIAmRxapN2YGwNbzK2PGS7-7I9vv75LxYsYg'
            },
        });
        const json = await response.json()
        setNotes(json);
    }

    //Add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjY2ZWJlNTNmNzcyMWJhNWQzNmYxIn0sImlhdCI6MTYzMTcwMjU4Mn0.Mx0QGwAvIAmRxapN2YGwNbzK2PGS7-7I9vv75LxYsYg"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

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
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjY2ZWJlNTNmNzcyMWJhNWQzNmYxIn0sImlhdCI6MTYzMTcwMjU4Mn0.Mx0QGwAvIAmRxapN2YGwNbzK2PGS7-7I9vv75LxYsYg"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //LOGIC TO EDIT NOTE
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        //anything wrapped in <noteState> </noteState> in app.js or any other component will have access to all the states, even the components childrens (down the hiearchy)
        //We can pass state, functions etc using context hook
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;