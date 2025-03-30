import React from "react";
import { TbMessageDots } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

const ConversationPanel: React.FC = () => {
    const solicitudes = [
        { id: 1, nombre: "Nombre desconocido", telefono: "+52 222-222-2222" },
        { id: 2, nombre: "Paola Reyes", telefono: "+52 222-222-2222" },
        { id: 3, nombre: "Nombre del paciente", telefono: "+52 222-222-2222" },
    ];

    const conversacionesActivas = [
        { id: 1, nombre: "Adrián Rodríguez", telefono: "+52 222-222-2222", active: true },
        { id: 2, nombre: "Adrián Rodríguez", telefono: "+52 222-222-2222", active: false },
        { id: 3, nombre: "Nombre desconocido", telefono: "+52 222-222-2222", active: false },
    ];

    return (
        <div className="h-full flex flex-col px-4 py-4 bg-white rounded-lg shadow-sm">
            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-blue-500 text-blue-500">
                            Conversaciones
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                            Llamadas
                        </a>
                    </li>
                </ul>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto mt-6">
                {/* Solicitudes */}
                <div>
                    <h3 className="text-base text-gray-800 mb-2 text-left">Solicitudes</h3>
                    <div className="space-y-2">
                        {solicitudes.map((s) => (
                            <div key={s.id} className="conversation-container flex items-center justify-between text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                        <LuPhoneCall className="w-4 h-4 text-blue-900" />
                                    </div>
                                    <div className="flex flex-col text-left">
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
                    <div className="space-y-2">
                        {conversacionesActivas.map((conv) => (
                            <div
                                key={conv.id}
                                className={`conversation-container flex items-center gap-3 p-2 rounded cursor-pointer text-sm ${conv.active ? "border-l-4 border-blue-500" : "hover:bg-gray-100"
                                    }`}
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                    <TbMessageDots className="w-4 h-4 text-blue-900" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <p className="font-medium">{conv.nombre}</p>
                                    <p className="text-gray-500 text-xs">{conv.telefono}</p>
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