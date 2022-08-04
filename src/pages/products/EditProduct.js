import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProducts,
    productSelectors,
    updateProducts,
} from '../../features/ProductsSlice.js';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const product = useSelector((state) =>
        productSelectors.selectById(state, id)
    );

    useEffect(() => {
        if (product) {
            setTitle(product.title);
            setPrice(product.price);
        }
    }, [product]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const updateProduct = async (e) => {
        e.preventDefault();
        await dispatch(updateProducts({ id, title, price }));
        navigate('/');
    };

    return (
        <div className="bg-white shadow rounded md:w-1/2 w-full p-10 mt-4 ml-6">
            <form onSubmit={updateProduct}>
                <p
                    tabIndex={0}
                    aria-label="Login to your account"
                    className="text-2xl font-extrabold leading-6 text-gray-800"
                >
          Add Product
                </p>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">
            Title
                    </lable>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    />
                </div>
                <div>
                    <lable className="text-sm font-medium leading-none text-gray-800">
            Price
                    </lable>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    />
                </div>
                <div className="mt-8">
                    <button
                        type="submit"
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                    >
            Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
