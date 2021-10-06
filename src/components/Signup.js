import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import alertContext from '../Contexts/alert/alertContext'

function Signup() {
    const context = useContext(alertContext);
    const { showAlert } = context;
    const [creds, setCreds] = useState({name: "", email: "", password: "", cpassword: ""})
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: creds.name, email: creds.email, password: creds.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //saving token and redirecting to home using useHistory hook
            localStorage.setItem("token", json.authToken)
            history.push('/');
            showAlert("success", "User created successfully");
        }
        else{
            alert("Error occured");
            showAlert("danger", "Invalid details");
        }
    }

    const onChange=(e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-3">SignUp to use iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-group mb-3">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={onChange} required minLength='5' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Re-enter Password" onChange={onChange} required minLength='5' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
