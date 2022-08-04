import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../../features/ProductsSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        // dispatch(update({title, price}))
        await dispatch(saveProducts({ title, price }));
        navigate('/');
    };

    return (
        <div className="bg-white shadow rounded md:w-1/2 w-full p-10 mt-4 ml-6">
            <form onSubmit={saveProduct}>
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

export default AddProduct;
