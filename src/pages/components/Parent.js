import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../features/UserSlice';

const Parent = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const saveUsers = (e) => {
        e.preventDefault();
        dispatch(update({ name, email }));
    };

    return (
        <div className="bg-white shadow rounded md:w-1/2 w-full p-10 mt-4 ml-6">
            <form onSubmit={saveUsers}>
                <p
                    tabIndex={0}
                    aria-label="Login to your account"
                    className="text-2xl font-extrabold leading-6 text-gray-800"
                >
          Parent
                </p>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">
            Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium leading-none text-gray-800">
            Email
                    </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

export default Parent;
