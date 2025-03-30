import React, { useState } from 'react';
import { TfiComments } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { TbUsersPlus } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { LuChevronDown } from "react-icons/lu";
import { FaFileImage } from "react-icons/fa";

const MainHeader: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between items-center px-6 py-4 bg-white relative">
            {/* Tabs Navigation */}
            <div className="flex items-center space-x-1">
                <FaFileImage />
                <button
                    className="flex items-center p-4 text-gray-900 font-normal text-sm hover:text-orange-400 space-x-3"
                    id="conversations-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                >
                    <TfiComments className="w-5 h-5 font-bold" />
                    <span>Conversaciones</span>
                </button>
                <button
                    className="flex items-center p-4 text-gray-900 font-normal text-sm hover:text-orange-400"
                    id="patients-tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                >
                    <TbUsersPlus className="w-5 h-5" />
                    <span className="ml-2">Pacientes</span>
                </button>
                <button
                    className="flex items-center p-4 text-gray-900 font-normal text-sm hover:text-orange-400"
                    id="doctors-tab"
                    type="button"
                    role="tab"
                    aria-selected="false"
                >
                    <AiOutlineUser className="w-5 h-5" />
                    <span className="ml-2">Médicos</span>
                </button>
            </div>

            {/* User Information */}
            <button
                id="dropdownAvatarNameButton"
                onClick={toggleDropdown} // Toggle dropdown on click
                className="flex items-center text-sm pe-2 font-medium text-gray-900"
                type="button"
            >
                <span className="sr-only">Open user menu</span>
                <div className="flex flex-col text-left">
                    <div className="flex flex-row">
                        <span className="font-medium">Natashia Bunny</span>
                        <GoDotFill className="w-3 h-3 text-green-500 m-1" />
                    </div>
                    <span className="text-sm text-gray-500 font-normal">natashabunny@email.com</span>
                </div>
                <LuChevronDown className="w-7 h-7 ml-8 mt-2 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    id="dropdownAvatarName"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-10 top-20"
                >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="truncate">natashabunny@email.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Earnings
                            </a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainHeader;