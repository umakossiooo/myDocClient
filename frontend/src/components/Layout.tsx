import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto px-4">
                <MainHeader />
            </div>
            <div className="container mx-auto px-4 flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;