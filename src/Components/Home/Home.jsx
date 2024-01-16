import React from 'react';
import styles from './Home.module.css';
import Feed from "../Feed/Feed.jsx";
import Head from "../Helper/Head/Head.jsx";

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head title="Fotos" description="Home do site Dogs, com o feed de fotos"/>
            <Feed />
        </section>
    );
};

export default Home;