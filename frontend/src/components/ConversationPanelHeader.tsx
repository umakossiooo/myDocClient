import React from "react";

const ConversationPanelHeader: React.FC = () => {
    return (
        <div className="text-sm font-medium text-gray-500 border-b border-gray-200 pt-5">
            <ul className="flex flex-row">
                <li className="mr-2">
                    <a
                        href="#"
                        className="block text-left pl-0 pb-2 mr-8 border-b-2 border-blue-500 text-blue-500"
                    >
                        Conversaciones
                    </a>
                </li>
                <li className="mr-2">
                    <a
                        href="#"
                        className="block text-left pl-0 pb-2 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                    >
                        Llamadas
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ConversationPanelHeader;