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

function App() {

    return (
        <>
            <div>
                <BrowserRouter>
                    <UserStorage>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login/*" element={<Login/>}/>
                            <Route path="/conta/*" element={<ProtectedRoute><User/></ProtectedRoute>}/>
                        </Routes>
                        <Footer/>
                    </UserStorage>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
