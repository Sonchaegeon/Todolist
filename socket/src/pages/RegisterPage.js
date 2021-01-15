import React from 'react';

const RegisterPage = () => {
    return (
        <div className="card">
            <div className="cardHeader">Registeration</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Sonchaegeon"></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com"></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Your Password"></input>
                </div>
                <button>Register</button>
            </div>
        </div>
    );
};

export default RegisterPage;