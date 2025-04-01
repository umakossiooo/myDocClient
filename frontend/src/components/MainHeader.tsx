import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TfiComments } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { TbUsersPlus } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { LuChevronDown } from "react-icons/lu";
import { CurrentUser } from "../types";
import { getCurrentUser } from "../api/CurrentUserAPI";

const MainHeader: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const location = useLocation();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchCurrentUser();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-white flex flex-wrap items-center px-4 py-4">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center space-x-1">
                <Link
                    to="/chats"
                    className={`flex items-center p-4 font-normal text-sm hover:text-orange-400 ${location.pathname === "/chats" ? " text-orange-400" : "text-gray-800"}`}>
                    <TfiComments className="w-5 h-5 font-bold" />
                    <span className="ml-2">Conversaciones</span>
                </Link>
                <Link
                    to="/patients"
                    className={`flex items-center p-4 font-normal text-sm hover:text-orange-400 ${location.pathname === "/patients" ? " text-orange-400" : "text-gray-800"}`}>
                    <TbUsersPlus className="w-5 h-5" />
                    <span className="ml-2">Pacientes</span>
                </Link>
                <Link
                    to="/meds"
                    className={`flex items-center p-4 font-normal text-sm hover:text-orange-400 ${location.pathname === "/meds" ? " text-orange-400" : "text-gray-800"}`}>
                    <AiOutlineUser className="w-5 h-5" />
                    <span className="ml-2">Médicos</span>
                </Link>
            </div>

            {/* User Information */}
            <button
                id="dropdownAvatarNameButton"
                onClick={toggleDropdown}
                className="flex items-center text-sm font-medium text-gray-900 ml-auto mt-4 md:mt-0"
                type="button"
            >
                <div className="flex flex-col text-left">
                    <div className="flex flex-row items-center">
                        <span className="font-medium truncate">{currentUser ? currentUser.name : ""}</span>
                        <GoDotFill className="w-3 h-3 text-green-500 ml-1" />
                    </div>
                    <span className="text-sm text-gray-500 font-normal truncate">{currentUser ? currentUser.email : ""}</span>
                </div>
                <LuChevronDown className="w-7 h-7 ml-4 text-gray-500" />
            </button>

        </div>
    );
};

export default MainHeader;