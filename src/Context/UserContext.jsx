import React, {createContext, useState} from 'react';
import * as api from '../api.jsx';

export const UserContext = createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getUser(token) {
        const response = await api.GET(token, '/api/user');
        setData(response);
        setLogin(true);
        console.log(response);
    }

    async function userLogin(username, password) {
        let body = {
            username: username,
            password: password
        };

        const response = await api.POST(body, '/jwt-auth/v1/token');
        window.localStorage.setItem('token', response.token);
        await getUser(response.token);
    }

    return (
        <UserContext.Provider value={{ userLogin, data }}>{children}</UserContext.Provider>
    );
};