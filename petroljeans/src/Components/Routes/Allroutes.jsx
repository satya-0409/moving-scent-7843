import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home';
import LoginPage from "../../Pages/LoginPage";
import Register from "../../Pages/Register";
import Products from "../../Pages/Products";
import SingleProduct from "../../Pages/SingleProduct";
import WhishList from "../../Pages/WhishList";

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/whishlist' element={<WhishList />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Allroutes;
