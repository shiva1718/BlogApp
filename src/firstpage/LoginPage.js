
import React from 'react';
import './Login.css';
import {useState} from "react";

function Form({ option, handleSubmit}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        if (option === 1) {
            handleSubmit({ email, password });
        } else if (option === 2 && password === repeatPassword) {
            handleSubmit({ email, password });
        }
    };

    return (
        <form method="POST" action={"/" + (option === 1 ? "sign-in" : "sign-up")} className="account-form" onSubmit={(evt) => evt.preventDefault()}>
            <div
                className={
                    "account-form-fields " +
                    (option === 1 ? "sign-in" : "sign-up" )
                }
            >
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required={option === 1 || option === 2}
                />
                <input
                    id="repeat-password"
                    name="repeat-password"
                    type="password"
                    placeholder="Repeat password"
                    required={option === 2}
                    disabled={option === 1}
                />
            </div>
            <button className="btn-submit-form" type="submit">
                {option === 1 ? "Sign in" : "Sign up" }
            </button>
        </form>
    );
}

function LoginPage() {
    const [option, setOption] = useState(1);

    const handleSubmit = async ({ email, password }) => {
        try {
            const response = await fetch('`/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            // Handle the response data here
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    return (
        <div className="container">
            <header>
                <div
                    className={
                        "header-headings " +
                        (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
                    }
                >
                    <span>Sign in to your account</span>
                    <span>Create an account</span>
                </div>
            </header>
            <ul className="options">
                <li className={option === 1 ? "active" : ""} onClick={() => setOption(1)}>
                    Sign in
                </li>
                <li className={option === 2 ? "active" : ""} onClick={() => setOption(2)}>
                    Sign up
                </li>
            </ul>
            <Form option={option} handleSubmit={handleSubmit} />

        </div>
    );
}

export default LoginPage;

