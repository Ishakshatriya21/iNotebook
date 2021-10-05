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
        const note = await response.json()
        // setNotes(notes.push(note));   this will not work as push updates the array but our array is defined as const
        setNotes(notes.concat(note)); //concat returns a new array
    }
    //Delete a note
    const deleteNote = async (id) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjY2ZWJlNTNmNzcyMWJhNWQzNmYxIn0sImlhdCI6MTYzMTcwMjU4Mn0.Mx0QGwAvIAmRxapN2YGwNbzK2PGS7-7I9vv75LxYsYg"
            }
        });
        const json = await response.json();
        console.log(json);

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjY2ZWJlNTNmNzcyMWJhNWQzNmYxIn0sImlhdCI6MTYzMTcwMjU4Mn0.Mx0QGwAvIAmRxapN2YGwNbzK2PGS7-7I9vv75LxYsYg"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);

        //LOGIC TO EDIT NOTE

        //We had to create a new note variable because e cannot directly update the state of the note so there we create a copy of the note variable as newNote and after updating newNote we use setNote to updtae the state of notes.
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        //anything wrapped in <noteState> </noteState> in app.js or any other component will have access to all the states, even the components childrens (down the hiearchy)
        //We can pass state, functions etc using context hook
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;