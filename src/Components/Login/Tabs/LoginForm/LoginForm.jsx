import React from 'react';
import {Link} from "react-router-dom";
import Input from "../../../Forms/Input/Input.jsx";
import Button from "../../../Forms/Button/Button.jsx";
import useForm from "../../../../Hooks/useForm.jsx";
import Error from "../../../Helper/Error/Error.jsx";
import styles from './LoginForm.module.css';
import stylesBtn from '../../../Forms/Button/Button.module.css';
import Head from "../../../Helper/Head/Head.jsx";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../../../store/config/user.jsx";

const LoginForm = () => {
    const dispatch = useDispatch();
    const username = useForm();
    const password = useForm();

    const {token, user} = useSelector(state => state);
    const loading = token.loading || user.loading;
    const error = token.error || user.error;

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            dispatch(userLogin({
                username: username.value,
                password: password.value
            }));
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login"/>
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error && 'Dados Incorretos'}/>
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