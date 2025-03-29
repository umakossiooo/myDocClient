import React from "react";

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
        <div>
            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Conversaciones</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Llamadas</a>
                    </li>
                </ul>
            </div>

            {/* Solicitudes */}
            <div>
                <h3 className="text-xs text-gray-400 uppercase mb-2">Solicitudes</h3>
                <div className="space-y-2">
                    {solicitudes.map((s) => (
                        <div key={s.id} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                            <div>
                                <p className="font-medium">{s.nombre}</p>
                                <p className="text-gray-500 text-xs">{s.telefono}</p>
                            </div>
                            <div className="flex gap-1">
                                <button className="btn btn-outline me-2 mb-2">Ignorar</button>
                                <button className="btn btn-primary me-2 mb-2">Aceptar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversaciones activas */}
            <div className="mt-6">
                <h3 className="text-xs text-gray-400 uppercase mb-2">Conversaciones activas</h3>
                <div className="space-y-2">
                    {conversacionesActivas.map((conv) => (
                        <div
                            key={conv.id}
                            className={`p-2 rounded cursor-pointer text-sm ${conv.active ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-100"
                                }`}
                        >
                            <p className="font-medium">{conv.nombre}</p>
                            <p className="text-gray-500 text-xs">{conv.telefono}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ConversationPanel;