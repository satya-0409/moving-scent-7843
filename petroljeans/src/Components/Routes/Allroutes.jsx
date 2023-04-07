import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home';
import LoginPage from "../../Pages/LoginPage";
import Register from "../../Pages/Register";
import MenProducts from "../../Pages/MenProducts";
import WomenProducts from "../../Pages/WomenProducts";
import WhishList from "../../Pages/WhishList";
import AddToCartPage from '../../Pages/AddToCartPage';
import PaymentPage from '../../Pages/PaymentPage';
import SingleWomenPage from '../../Pages/SingleWomenPage';
import SingleMenProduct from '../../Pages/SingleMenProduct';

const Allroutes = () => {
    return (
        
             <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menproducts' element={<MenProducts />} />
            <Route path='/womenproducts' element={<WomenProducts />} />
            <Route path='/menproducts/:pro_id' element={<SingleMenProduct />} />
            <Route path='/womenproducts/:id' element={<SingleWomenPage />} />
            <Route path='/whishlist' element={<WhishList />} />
            <Route path='/addtocartpage' element={<AddToCartPage />} />
            <Route path='/paymentpage' element={<PaymentPage/>}/>
        </Routes>
    )
}

export default Allroutes;
