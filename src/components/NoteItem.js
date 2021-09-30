import React, { useContext } from 'react'
import noteContext from '../Contexts/notes/noteContext'

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-item-center justify-content-between">
                        <h5 className="card-title ">{note.title}</h5>
                        <div>
                            <i className="fas fa-trash-alt mx-2" onClick={() => {
                                deleteNote(note._id)
                            }}></i>
                            <i className="far fa-edit" onClick={()=>{updateNote(note)}}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}