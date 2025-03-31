import React from 'react';
import ChatMessages from './ChatMessages';
import { FileText } from 'react-feather';
import { CircleCheck } from 'lucide-react';
import { FiMic } from "react-icons/fi";
import { LuSendHorizontal } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";
import { TbMessageDots } from 'react-icons/tb';
import { ChatProps } from '../types';

const ChatBox: React.FC<ChatProps> = ({ conversation, currentUser }) => {
    if (!conversation) {
        return (
            <div className="h-full flex items-center justify-center bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-sm">No conversation selected.</p>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center px-4 py-4 border-b border-gray-200 gap-2">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                        <TbMessageDots className="w-4 h-4 text-blue-900" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 text-left truncate">{conversation.nombre}</p>
                        <p className="text-xs text-gray-500 text-left truncate">{conversation.telefono}</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center space-x-2">
                    <div className="flex flex-wrap items-center space-x-1">
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <button className="btn whitespace-nowrap text-sm px-1 py-1">Registrar consulta</button>
                    </div>
                    <div className="flex flex-wrap items-center space-x-1">
                        <CircleCheck className="w-4 h-4 flex-shrink-0" />
                        <button className="btn whitespace-nowrap text-sm">Finalizar conversación</button>
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto">
                <ChatMessages conversation={conversation} currentUser={currentUser} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 px-4 py-3">
                <form className="relative flex items-center">
                    <button type="button" className="absolute left-5 text-gray-500 hover:text-gray-600">
                        <GoPlusCircle className="w-6 h-6" />
                    </button>
                    <input
                        type="text"
                        placeholder="Escribe un mensaje..."
                        className="flex-1 rounded-lg px-14 py-5 text-sm pr-28"
                    />
                    <button type="button" className="absolute right-16 text-gray-500 hover:text-gray-600">
                        <FiMic className="w-6 h-6" />
                    </button>
                    <button
                        type="submit"
                        className="absolute right-5 text-white bg-orange-400 hover:bg-orange-500 rounded-lg px-2 py-2"
                    >
                        <LuSendHorizontal className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;