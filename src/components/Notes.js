import React, { useContext } from 'react'
import noteContext from '../Contexts/notes/noteContext'
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container">
            <h1>Your notes</h1>
            <div className="row">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}
