import React from 'react';
import axios from "axios";
import makeToast from '../Toaster';

const RegisterPage = (props) => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const registerUser = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post("http://localhost:3000/user/register", {
            name,
            email,
            password
        }).then(response => {
            makeToast("success", response.data.message);
            props.history.push('/login');
        }).catch(err => {
            makeToast("error", err.response.data.message);
        });
    }

    return (
        <div className="card">
            <div className="cardHeader">Registeration</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Sonchaegeon" ref={nameRef}></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com" ref={emailRef}></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Your Password" ref={passwordRef}></input>
                </div>
                <button onClick={registerUser}>Register</button>
            </div>
        </div>
    );
};

export default RegisterPage;