import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import {UserStorage} from "./Context/UserContext.jsx";
import ProtectedRoute from "./Components/Helper/ProtectedRoute/ProtectedRoute.jsx";
import User from "./Components/User/User.jsx";
import Photo from "./Components/Photo/Photo.jsx";
import UserProfile from "./Components/User/UserProfile/UserProfile.jsx";
import NotFound from "./Components/Error/NotFound.jsx";

function App() {

    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <UserStorage>
                        <Header/>
                        <main className="AppBody">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/login/*" element={<Login/>}/>
                                <Route path="/conta/*" element={<ProtectedRoute><User/></ProtectedRoute>}/>
                                <Route path="photo/:id" element={<Photo/>}/>
                                <Route path="perfil/:user" element={<UserProfile/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </UserStorage>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
