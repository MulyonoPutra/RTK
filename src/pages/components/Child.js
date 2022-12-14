import React from 'react';
import { useSelector } from 'react-redux';

const Child = () => {
    const { name, email } = useSelector((state) => state.users);
    return (
        <>
            <div className="w-full max-w-2xl p-4">
                <div className="border rounded-lg pb-6 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
              Child Component
                        </p>
                    </div>

                    <div className="px-6 pt-6 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="bg-gray-100 rounded-sm p-2.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M13.5613 8.42567C12.5393 8.42567 10.9573 7.26367 9.29134 7.30567C7.09334 7.33367 5.07734 8.57967 3.94334 10.5537C1.66134 14.5157 3.35534 20.3677 5.58134 23.5877C6.67334 25.1557 7.96134 26.9197 9.66934 26.8637C11.3073 26.7937 11.9233 25.7997 13.9113 25.7997C15.8853 25.7997 16.4453 26.8637 18.1813 26.8217C19.9453 26.7937 21.0653 25.2257 22.1433 23.6437C23.3893 21.8237 23.9073 20.0597 23.9353 19.9617C23.8933 19.9477 20.5053 18.6457 20.4633 14.7257C20.4353 11.4497 23.1373 9.88167 23.2633 9.81167C21.7233 7.55767 19.3573 7.30567 18.5313 7.24967C16.3753 7.08167 14.5693 8.42567 13.5613 8.42567ZM17.2013 5.12167C18.1113 4.02967 18.7133 2.50367 18.5453 0.991669C17.2433 1.04767 15.6753 1.85967 14.7373 2.95167C13.8973 3.91767 13.1693 5.47167 13.3653 6.95567C14.8073 7.06767 16.2913 6.21367 17.2013 5.12167Z"
                                                        fill="#6B7280"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">{name}</p>
                                                </div>
                                                <p className="font-semibold text-gray-800">{email}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Child;
