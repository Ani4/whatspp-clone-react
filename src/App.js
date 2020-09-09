import React, { useState } from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    {!user ? (
                        <Login />
                    ) : (
                        <Switch>
                            <Route path="/rooms">
                                <Sidebar />
                                <Route path="/rooms/:roomId">
                                    <Chat />
                                </Route>
                            </Route>
                            <Route path="/">Login</Route>
                        </Switch>
                    )}
                </Router>
            </div>
        </div>
    );
}

export default App;
