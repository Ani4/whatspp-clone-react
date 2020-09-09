import React, { useState } from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { useStateValue } from "./Redux/StateProvider";
import LoginGoogle from "./Components/Login/Login";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    {!user ? (
                        <Login />
                    ) : (
                        <>
                            <button className="toggleButton">afgaf</button>
                            <Sidebar />
                            <Switch>
                                <Route path="/rooms/:roomId">
                                    <Chat />
                                </Route>
                                <Redirect to="/" />
                            </Switch>
                        </>
                    )}
                </Router>
            </div>
        </div>
    );
}

export default App;
