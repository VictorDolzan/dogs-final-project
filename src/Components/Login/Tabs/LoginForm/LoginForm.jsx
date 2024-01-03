import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import {UserContext} from "../../../../Context/UserContext.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import styles from './LoginForm.module.css';
import stylesBtn from '../../../Forms/Button/Button.module.css';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, error, loading} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error}/>
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;