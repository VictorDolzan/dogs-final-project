import React, {createContext, useCallback, useEffect, useState} from 'react';
import * as api from '../api.jsx';
import {useNavigate} from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const userLogOut = useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/login');
    }, [navigate]);

    async function getUser(token) {
        const response = await api.GET(token, '/api/user');
        setData(response);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);

            let body = {
                username: username,
                password: password
            };

            const response = await api.POST(body, '/jwt-auth/v1/token');
            if (response.data !== undefined && response.data.status === 403) throw new Error(`Erro: ${response.message}`)
            window.localStorage.setItem('token', response.token);
            await getUser(response.token);
            navigate('/conta');
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');

            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const response = await api.POST(null, '/jwt-auth/v1/token/validate', token);
                    if (response.data.status !== 200) throw new Error('Token inválido');
                    await getUser(token);
                    navigate('/conta');
                } catch (err) {
                    await userLogOut();
                } finally {
                    setLoading(false);
                }
            }

        }

        autoLogin();

    }, [userLogOut]);

    return (
        <UserContext.Provider
            value={{userLogin, data, userLogOut, error, loading, login}}>{children}</UserContext.Provider>
    );
};