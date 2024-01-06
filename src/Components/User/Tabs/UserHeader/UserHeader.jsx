import React, {useEffect, useState} from 'react';
import UserHeaderNav from "./Nav/UserHeaderNav.jsx";
import styles from './UserHeader.module.css';
import {useLocation} from "react-router-dom";

const UserHeader = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        setTitle(location.pathname);
        if (location.pathname === '/conta/estatisticas') setTitle('Estatisticas');
        else if (location.pathname === '/conta/postar') setTitle('Adicionar foto');
        else if (location.pathname === '/conta') setTitle('Minhas fotos');
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;