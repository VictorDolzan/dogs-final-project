import React, {useContext} from 'react';
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import * as api from "../../../../Api.jsx";
import {UserContext} from "../../../../Context/UserContext.jsx";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const {userLogin, error, loading} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        let body = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        const response = await api.POST(body, '/api/user');
        //response.data.status !== 403
        if (response.data === undefined) await userLogin(username.value, password.value);

    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                {
                    loading ? (
                        <Button>Carregando</Button>
                    ) : (
                        <Button>Cadastrar</Button>
                    )
                }
                {error && (
                    <p>{error}</p>
                )}
            </form>
        </section>
    );
};

export default LoginCreate;