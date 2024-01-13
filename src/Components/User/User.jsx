import React, {useContext} from 'react';
import UserHeader from "./Tabs/UserHeader/UserHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./Tabs/UserPhotoPost/UserPhotoPost.jsx";
import UserStats from "./Tabs/UserStats/UserStats.jsx";
import {UserContext} from "../../Context/UserContext.jsx";

const User = () => {
    const {data} = useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;