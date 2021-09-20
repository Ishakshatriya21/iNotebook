import React, { useContext } from 'react'
import noteContext from '../Contexts/notes/noteContext'

export default function Home() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
        <div>
            <h1>Add notes</h1>
            <h1>Your notes</h1>
            <div className="container">
                {notes.map((note) => {
                    return note.title
                })}
            </div>
        </div>
    )
}
