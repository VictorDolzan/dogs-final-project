import React, {useContext} from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import Dogs from '../../Assets/dogs.svg?react';
import {useSelector} from "react-redux";

const Header = () => {
    const {data} = useSelector(state => state.user);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs/>
                </Link>
                {
                    data ? (
                        <div>
                            <Link className={styles.login} to="/conta">
                                {data.nome}
                            </Link>
                        </div>
                    ) : (
                        <Link className={styles.login} to="/login">
                            Login | Criar
                        </Link>
                    )
                }
            </nav>
        </header>
    );
};

export default Header;