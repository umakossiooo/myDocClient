import React, { useEffect, useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import ConversationPanelHeader from "./ConversationPanelHeader";
import ChatBox from "./ChatBox";
import axios from "axios";

interface Solicitud {
    id: string;
    nombre: string;
    telefono: string;
    type: "message" | "call";
    status: "pending" | "accepted" | "ignored";
    content?: string;
}

const ConversationPanel: React.FC = () => {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
    const [conversacionesActivas, setConversacionesActivas] = useState<Solicitud[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<Solicitud | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/solicitudes");

                const { solicitudes: pendingItems, conversaciones_activas: activeItems } = response.data;

                const mappedSolicitudes = pendingItems.map((item: any) => ({
                    id: item.id,
                    nombre: item.name,
                    telefono: item.phone,
                    type: item.content ? "message" : "call",
                    status: item.status,
                    content: item.content,
                }));

                const mappedConversacionesActivas = activeItems.map((item: any) => ({
                    id: item.id,
                    nombre: item.name,
                    telefono: item.phone,
                    type: item.content ? "message" : "call",
                    status: item.status,
                    content: item.content,
                }));

                setSolicitudes(mappedSolicitudes);
                setConversacionesActivas(mappedConversacionesActivas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleStatusChange = async (item: Solicitud, newStatus: "accepted" | "ignored") => {
        try {
            const endpoint =
                item.type === "message"
                    ? `http://localhost:8000/messages/${item.id}`
                    : `http://localhost:8000/calls/${item.id}`;
            await axios.put(endpoint, { status: newStatus });

            if (newStatus === "accepted") {
                setConversacionesActivas((prev) => [...prev, { ...item, status: "accepted" }]);
            }

            setSolicitudes((prev) => prev.filter((sol) => sol.id !== item.id));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleConversationClick = (conv: Solicitud) => {
        setSelectedConversation(conv);
    };

    return (
        <div className="h-full flex flex-col px-4 py-4 bg-white rounded-lg shadow-sm">
            <ConversationPanelHeader />

            <div className="flex-1 overflow-y-auto mt-6">
                <div>
                    <h3 className="text-base text-gray-800 mb-2 text-left">Solicitudes</h3>
                    <div className="space-y-2">
                        {solicitudes.map((s) => (
                            <div
                                key={s.id}
                                className="conversation-container flex items-center justify-between text-sm flex-wrap gap-2"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                        {s.type === "message" ? (
                                            <TbMessageDots className="w-4 h-4 text-blue-900" />
                                        ) : (
                                            <LuPhoneCall className="w-4 h-4 text-blue-900" />
                                        )}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <p className="font-medium">{s.nombre}</p>
                                        <p className="text-gray-500 text-xs">{s.telefono}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-wrap items-center">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => handleStatusChange(s, "ignored")}
                                    >
                                        Ignorar
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleStatusChange(s, "accepted")}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-base text-gray-800 mb-2 text-left">Conversaciones activas</h3>
                    <div className="space-y-2">
                        {conversacionesActivas.map((conv) => (
                            <div
                                key={conv.id}
                                className={`conversation-container flex items-center gap-3 p-2 rounded cursor-pointer text-sm hover:bg-gray-100 ${
                                    selectedConversation?.id === conv.id
                                        ? "bg-gray-200 border-l-4"
                                        : "hover:border-l-4"
                                }`}
                                onClick={() => handleConversationClick(conv)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                        {conv.type === "message" ? (
                                            <TbMessageDots className="w-4 h-4 text-blue-900" />
                                        ) : (
                                            <LuPhoneCall className="w-4 h-4 text-blue-900" />
                                        )}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <p className="font-medium">{conv.nombre}</p>
                                        <p className="text-gray-500 text-xs">{conv.telefono}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConversationPanel;