import React from "react";

interface ConversationPanelHeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const ConversationPanelHeader: React.FC<ConversationPanelHeaderProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="text-sm font-medium bg-white rounded-t-lg shadow-sm text-gray-500 border-b border-gray-200 pt-5">
            <ul className="flex flex-row">
                <li className="mr-2">
                    <button
                        onClick={() => setActiveTab("conversaciones")}
                        className={`block text-left pl-0 pb-2 mr-6 border-b-2 ${activeTab === "conversaciones" ? "border-blue-500 text-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"
                            }`}
                    >
                        Conversaciones
                    </button>
                </li>
                <li className="mr-2">
                    <button
                        onClick={() => setActiveTab("llamadas")}
                        className={`block text-left pl-0 pb-2 border-b-2 ${activeTab === "llamadas" ? "border-blue-500 text-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"
                            }`}
                    >
                        Llamadas
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ConversationPanelHeader;