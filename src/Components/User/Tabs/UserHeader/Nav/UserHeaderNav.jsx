import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../../../../../Context/UserContext.jsx";
import MinhasFotos from '../../../../../Assets/feed.svg?react';
import Estatisticas from '../../../../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../../../../Assets/adicionar.svg?react';
import Sair from '../../../../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
const UserHeaderNav = () => {
    const [mobile, setMobile] = useState(null);
    const {userLogOut} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogOut() {
        userLogOut();
        navigate('/login');
    }

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos/>
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <Estatisticas/>
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                <AdicionarFoto/>
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={handleLogOut}>
                <Sair/>
                {mobile && 'Sair'}
            </button>
        </nav>
    );
};

export default UserHeaderNav;