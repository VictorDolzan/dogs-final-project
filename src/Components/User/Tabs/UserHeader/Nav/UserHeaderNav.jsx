import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {UserContext} from "../../../../../Context/UserContext.jsx";
import MinhasFotos from '../../../../../Assets/feed.svg?react';
import Estatisticas from '../../../../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../../../../Assets/adicionar.svg?react';
import Sair from '../../../../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from "../../../../../Hooks/useMedia.jsx";

const UserHeaderNav = () => {
    const {userLogOut} = useContext(UserContext);
    const navigate = useNavigate();
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);

    const {pathname} = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogOut() {
        userLogOut();
        navigate('/login');
    }

    return (
        <>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
        </>
    );
};

export default UserHeaderNav;