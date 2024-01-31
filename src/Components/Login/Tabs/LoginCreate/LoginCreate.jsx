import React from 'react';
import Input from '../../../Forms/Input/Input.jsx'
import Button from '../../../Forms/Button/Button.jsx';
import Error from '../../../Helper/Error/Error.jsx';
import useForm from '../../../../Hooks/useForm.jsx';
import { USER_POST } from '../../../../Api.jsx';
import useFetch from '../../../../Hooks/useFetch';
import Head from "../../../Helper/Head/Head.jsx";
import {useDispatch} from "react-redux";
import {userLogin} from "../../../../store/actions/user.jsx";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const dispatch = useDispatch();
    const { loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok) dispatch(userLogin({
            username: username.value,
            password: password.value
            }));
    }

    return (
        <section className="animeLeft">
            <Head title="Crie sua conta" />
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
