import React from 'react';
import UserHeader from "./Tabs/UserHeader/UserHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./Tabs/UserPhotoPost/UserPhotoPost.jsx";
import UserStats from "./Tabs/UserStats/UserStats.jsx";

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;