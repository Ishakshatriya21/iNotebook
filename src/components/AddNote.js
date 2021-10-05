import React, {useContext, useState} from 'react'
import noteContext from '../Contexts/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:""})

    const handleClick = (e)=>{
        e.preventDefault(); //this will prevent reloading of the page on click
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""});
    }

    const onChange = (e)=>{
        //this syntax below means that keep the default value of note state and then overwrite the further values if provided.
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                <button disabled={note.title.length<5 || note.title.description<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}