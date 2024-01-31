import React, {useContext} from 'react';
import UserHeader from "./Tabs/UserHeader/UserHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./Tabs/UserPhotoPost/UserPhotoPost.jsx";
import UserStats from "./Tabs/UserStats/UserStats.jsx";
import NotFound from "../Error/NotFound.jsx";
import Head from "../Helper/Head/Head.jsx";
import {useSelector} from "react-redux";

const User = () => {
    const {data} = useSelector(state => state.user);

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    );
};

export default User;