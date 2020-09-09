import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core";

function LoginGoogle() {
    const signIn = () => {
        auth.signInWithPopup(provider).then(console.log, console.log);
    };

    return (
        <div className="login">
            <div className="login__body">
                <img src="/whatsapp-144.png" alt="whatsApp images" />
                <h1 className="title">Sign-in to WhatsApp Account</h1>
                <Button className="google" onClick={signIn}>
                    <span></span>Sign-in by
                    <img
                        src="https://img.icons8.com/color/48/000000/google-logo.png"
                        alt="sign"
                        style={{ height: "2rem", marginLeft: "0.5rem" }}
                    />
                </Button>
            </div>
        </div>
    );
}

function Login() {
    return (
        <div className="login">
            <div className="main">
                <p className="sign" align="center">
                    Sign in
                </p>
                <form className="form1">
                    <input
                        className="un "
                        type="text"
                        align="center"
                        placeholder="Username"
                    />
                    <input
                        className="pass"
                        type="password"
                        align="center"
                        placeholder="Password"
                    />
                    <button className="submit" align="center">
                        Sign in
                    </button>
                    <p className="forgot" align="center">
                        <a href="#">Forgot Password?</a>
                    </p>
                    <a href="#"></a>
                </form>
            </div>
        </div>
    );
}

export default LoginGoogle;
