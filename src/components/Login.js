import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login() {

    const [creds, setCreds] = useState({email: "", password: ""})
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: creds.email, password: creds.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //saving token and redirecting to home using useHistory hook
            localStorage.setItem("token", json.authToken)
            history.push('/');
        }
        else{
            alert("Invalid credentials")
        }
    }

    const onChange=(e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" value={creds.email} onChange={onChange} name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={creds.password} onChange={onChange} name="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login
