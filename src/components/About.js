import React from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../Contexts/notes/noteContext'

export default function About() {
    //here noteContext is the provider of all the values passed and a is storing the values as object
    const a = useContext(noteContext);

    useEffect(() => {
        a.update();
    }, [])
    
    return (
        <div>
            this is about {a.state.name} and class {a.state.class}
        </div>
    )
}
