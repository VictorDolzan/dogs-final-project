import React from 'react';
import styles from './Login.module.css';
import {Route, Routes} from "react-router-dom";
import LoginForm from "./Tabs/LoginForm/LoginForm.jsx";
import LoginCreate from "./Tabs/LoginCreate/LoginCreate.jsx";
import LoginPasswordLost from "./Tabs/LoginPasswordLost/LoginPasswordLost.jsx";
import LoginPasswordReset from "./Tabs/LoginPasswordReset/LoginPasswordReset.jsx";

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="criar" element={<LoginCreate />}/>
                <Route path="perdeu" element={<LoginPasswordLost />}/>
                <Route path="resetar" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    );
};

export default Login;