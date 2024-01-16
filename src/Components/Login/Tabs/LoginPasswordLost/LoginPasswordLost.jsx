import React from 'react';
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import useFetch from "../../../../Hooks/useFetch.jsx";
import {PASSWORD_LOST} from "../../../../Api.jsx";
import Loading from "../../../Helper/Loading/Loading.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import Head from "../../../Helper/Head/Head.jsx";

const LoginPasswordLost = () => {
    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        if (login.validate()) {
            const {url, options} = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar')
            });
            await request(url, options);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Perdeu a senha" />
            <h1 className="title">Perdeu a senha?</h1>
            {data
                ? (
                    <p style={{color: '#44cc11'}}>{data}</p>
                )
                : (
                    <form onSubmit={handleSubmit}>
                        <Input label="Email / Usuário" type="text" name="email" {...login} />
                        {loading
                            ? (
                                <>
                                    <Button disabled>Eviando...</Button>
                                    <Loading/>
                                </>
                            )
                            : (
                                <Button>Enviar Email</Button>
                            )
                        }
                    </form>
                )
            }
            <Error error={error}/>
        </section>
    );
};

export default LoginPasswordLost;