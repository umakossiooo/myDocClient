import React from "react";
import { TbMessageDots } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";

const ConversationPanel: React.FC = () => {
    const solicitudes = [
        { id: 1, nombre: "Nombre desconocido", telefono: "+52 222-222-2222" },
        { id: 2, nombre: "Paola Reyes", telefono: "+52 222-222-2222" },
        { id: 3, nombre: "Nombre del paciente", telefono: "+52 222-222-2222" },
    ];

    const conversacionesActivas = [
        { id: 1, nombre: "Adrian rodriguez", telefono: "+52 222-222-2222", active: true },
        { id: 2, nombre: "Adrian rodriguez", telefono: "+52 222-222-2222", active: false },
        { id: 3, nombre: "Nombre desconocido", telefono: "+52 222-222-2222", active: false },
    ];

    return (
        <div className="container mx-auto bg-white px-4 py-4 rounded-lg shadow-sm h-full">
            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                            Conversaciones
                        </a>
                    </li>
                    <li className="mr-2">
                        <a
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                            Llamadas
                        </a>
                    </li>
                </ul>
            </div>

            {/* Solicitudes */}
            <div className="mt-6">
                <h3 className="text-base text-gray-800 mb-2 text-left">Solicitudes</h3>
                <div className="space-y-2">
                    {solicitudes.map((s) => (
                        <div key={s.id} className="conversation-container flex items-center justify-between text-sm text-left">
                            <div className="flex flex-row items-center gap-4">
                                <div className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full">
                                    <TbMessageDots className="w-5 h-5 text-gray-500" />
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <p className="font-medium">{s.nombre}</p>
                                    <p className="text-gray-500 text-xs">{s.telefono}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button className="btn btn-outline">Ignorar</button>
                                <button className="btn btn-primary">Aceptar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversaciones activas */}
            <div className="mt-6">
                <h3 className="text-base text-gray-800 mb-2 text-left">Conversaciones activas</h3>
                <div className="space-y-3">
                    {conversacionesActivas.map((conv) => (
                        <div
                            key={conv.id}
                            className={`conversation-container p-2 rounded cursor-pointer text-sm ${conv.active ? "border-l-4 border-blue-500" : "hover:bg-gray-100"
                                }`}
                        >
                            <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full">
                                <LuPhoneCall className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <p className="font-medium text-left">{conv.nombre}</p>
                                <p className="text-gray-500 text-xs text-left">{conv.telefono}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConversationPanel;