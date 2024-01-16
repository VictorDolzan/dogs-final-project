import React, {useEffect, useState} from 'react';
import Input from "../../../Forms/Input/Input.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import {PASSWORD_RESET} from "../../../../Api.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import {useNavigate} from "react-router-dom";
import Head from "../../../Helper/Head/Head.jsx";

const LoginPasswordReset = () => {
    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');
    const password = useForm();
    const {error, loading, request} = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()){
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value
            });
            const {response} = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Resete a sua senha" />
            <h1 className="title">Resete a senha</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading
                    ? (
                        <Button>Resetando...</Button>
                    )
                    : (
                        <Button>Resetar</Button>
                    )
                }
                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginPasswordReset;