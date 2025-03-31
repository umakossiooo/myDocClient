import React, { useEffect, useState } from "react";
import { TbMessageDots } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import axios from "axios";
import { Solicitud } from "../types";

interface ConversationPanelProps {
    selectedConversation: Solicitud | null;
    setSelectedConversation: (conversation: Solicitud | null) => void;
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({
    selectedConversation,
    setSelectedConversation,
}) => {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
    const [conversacionesActivas, setConversacionesActivas] = useState<Solicitud[]>([]);

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
                    timestamp: item.timestamp,
                }));

                const mappedConversacionesActivas = activeItems.map((item: any) => ({
                    id: item.id,
                    nombre: item.name,
                    telefono: item.phone,
                    type: item.content ? "message" : "call",
                    status: item.status,
                    content: item.content,
                    timestamp: item.timestamp,
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

    const formatTime = (timestamp: string): string => {
        const now = new Date();
        const messageTime = new Date(timestamp);
        const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / 60000);

        if (diffInMinutes < 1) return "Just now";
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

        return messageTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    };

    return (
        <div className="h-full flex flex-col px-4 py-4 bg-white shadow-lg rounded-b-lg">

            <div className="flex-1 overflow-y-auto mt-6 rounded-b-lg">
                {/* Solicitudes Section */}
                <div>
                    <h3 className="text-base text-gray-800 mb-2 text-left">Solicitudes</h3>
                    {solicitudes.length === 0 ? (
                        <p className="text-sm text-gray-500">No hay solicitudes pendientes.</p>
                    ) : (
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
                    )}
                </div>

                {/* Conversaciones Activas Section */}
                <div className="mt-6">
                    <h3 className="text-base text-gray-800 mb-2 text-left">Conversaciones activas</h3>
                    {conversacionesActivas.length === 0 ? (
                        <p className="text-sm text-gray-500">No hay conversaciones activas.</p>
                    ) : (
                        <div className="space-y-2">
                            {conversacionesActivas.map((conv) => (
                                <div
                                    key={conv.id}
                                    className={`conversation-container flex items-center gap-3 p-2 rounded cursor-pointer text-sm hover:bg-gray-100 ${selectedConversation?.id === conv.id
                                        ? "bg-gray-200 border-l-4 border-blue-500"
                                        : "hover:border-l-4 hover:border-blue-300"
                                        }`}
                                    onClick={() => handleConversationClick(conv)}
                                >
                                    <div className="flex justify-between items-start w-full">
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mt-1">
                                                {conv.type === "message" ? (
                                                    <TbMessageDots className="w-4 h-4 text-blue-900" />
                                                ) : (
                                                    <LuPhoneCall className="w-4 h-4 text-blue-900" />
                                                )}
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <p className="font-medium">{conv.nombre}</p>
                                                <p className="text-gray-500 text-xs">{conv.telefono}</p>
                                                <p className="text-gray-400 text-xs truncate max-w-50 mt-4">
                                                    {conv.content || ""}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="text-xs text-gray-500 mt-1">
                                            {formatTime(conv.timestamp)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConversationPanel;