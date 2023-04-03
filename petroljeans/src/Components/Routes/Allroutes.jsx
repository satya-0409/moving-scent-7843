import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home';
import LoginPage from "../../Pages/LoginPage";
import Register from "../../Pages/Register";
import MenProducts from "../../Pages/MenProducts";
import WomenProducts from "../../Pages/WomenProducts";
import SingleProduct from "../../Pages/SingleProduct";
import WhishList from "../../Pages/WhishList";
import AddToCartPage from '../../Pages/AddToCartPage';
import PaymentPage from '../../Pages/PaymentPage';

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menproducts' element={<MenProducts />} />
            <Route path='/womenproducts' element={<WomenProducts />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/whishlist' element={<WhishList />} />
            <Route path='/addtocartpage' element={<AddToCartPage />} />
            <Route path='/paymentpage' element={<PaymentPage/>}/>
        </Routes>
    )
}

export default Allroutes;
