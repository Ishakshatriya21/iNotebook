import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-item-center justify-content-between">
                        <h5 className="card-title ">{note.title}</h5>
                        <div>
                            <i className="fas fa-trash-alt mx-2"></i>
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
