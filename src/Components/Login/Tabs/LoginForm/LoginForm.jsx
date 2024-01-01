import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import * as api from "../../../../api.jsx";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) getUser(token);
    }, []);

    async function getUser(token) {
        const response = await api.GET(token, '/api/user');
        console.log(response);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            let body = {
                username: username.value,
                password: password.value
            };

            const response = await api.POST(body, '/jwt-auth/v1/token');
            window.localStorage.setItem('token', response.token);
            await getUser(response.token);
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;