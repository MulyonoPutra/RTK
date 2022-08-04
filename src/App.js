/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './pages/components/Container';
import AddProduct from './pages/products/AddProduct';
import EditProduct from './pages/products/EditProduct';
import ShowProduct from './pages/products/ShowProduct';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowProduct/>} />
                <Route path='/create' element={<AddProduct/>} />
                <Route path='/edit/:id' element={<EditProduct/>} />
                <Route path='/container' element={<Container/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
