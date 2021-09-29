import React, { useContext } from 'react'
import noteContext from '../Contexts/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <div className="container">
            <div className="mb-4">
            <h1>Add Notes</h1>
            <AddNote/>
            </div>
            <h1>Your notes</h1>
            <div className="row">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}
