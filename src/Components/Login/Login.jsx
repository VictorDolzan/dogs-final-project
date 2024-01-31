import React, {useContext} from 'react';
import styles from './Login.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginForm from "./Tabs/LoginForm/LoginForm.jsx";
import LoginCreate from "./Tabs/LoginCreate/LoginCreate.jsx";
import LoginPasswordLost from "./Tabs/LoginPasswordLost/LoginPasswordLost.jsx";
import LoginPasswordReset from "./Tabs/LoginPasswordReset/LoginPasswordReset.jsx";
import NotFound from "../Error/NotFound.jsx";
import {useSelector} from "react-redux";
import Loading from "../Helper/Loading/Loading.jsx";

const Login = () => {
    const {data, loading} = useSelector(state => state.user);

    if (loading) return <Loading />
    if (data) return <Navigate to="/conta" />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />}/>
                    <Route path="criar" element={<LoginCreate />}/>
                    <Route path="perdeu" element={<LoginPasswordLost />}/>
                    <Route path="resetar" element={<LoginPasswordReset />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;