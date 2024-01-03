import React, {useContext} from 'react';
import styles from './Login.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginForm from "./Tabs/LoginForm/LoginForm.jsx";
import LoginCreate from "./Tabs/LoginCreate/LoginCreate.jsx";
import LoginPasswordLost from "./Tabs/LoginPasswordLost/LoginPasswordLost.jsx";
import LoginPasswordReset from "./Tabs/LoginPasswordReset/LoginPasswordReset.jsx";
import {UserContext} from "../../Context/UserContext.jsx";

const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />}/>
                    <Route path="criar" element={<LoginCreate />}/>
                    <Route path="perdeu" element={<LoginPasswordLost />}/>
                    <Route path="resetar" element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;