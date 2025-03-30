import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import ChatPage from "../pages/ChatPage";
import PatientsPage from "../pages/PatientsPage";
import MedPage from "../pages/MedPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/chats" replace />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "chats",
                element: <ChatPage />,
            },
            {
                path: "patients",
                element: <PatientsPage />,
            },
            {
                path: "meds",
                element: <MedPage />,
            },
        ],
    },
    {
        path: "*",
        element: (
            <ErrorPage />
        ),
    },
]);

export default router;