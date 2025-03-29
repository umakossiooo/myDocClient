import React from 'react';
import ChatMessages from './ChatMessages';
import { FileText } from 'react-feather';
import { CircleCheck } from 'lucide-react';
import { FiMic } from "react-icons/fi";
import { LuSendHorizontal } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";

const ChatBox: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-white border-1 border-gray-200 w-full">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <div>
                    <p className="text-sm font-semibold text-gray-900 text-left">Adrián Rodríguez</p>
                    <p className="text-xs text-gray-500 text-left">+52 222-222-2222</p>
                </div>
                <div className="flex items-center">
                    <FileText className="w-4 h-4" />
                    <button className="btn mr-6">Registrar consulta</button>
                    <CircleCheck className="w-4 h-4" />
                    <button className="btn">Finalizar conversación</button>
                </div>
            </div>
            <ChatMessages />
            <div className="border-t px-4 py-3 bg-white">
                <form className="relative flex items-center">
                    <button type="button" className="absolute left-5 text-gray-500 rounded-lg px-0 py-2">
                        <GoPlusCircle className="w-6 h-6" />
                    </button>
                    <input type="text" placeholder="Escribe un mensaje..." className="flex-1 rounded-lg px-14 py-5 text-sm pr-28" />
                    <button type="button" className="absolute right-16 text-gray-500 rounded-lg px-0 py-2">
                        <FiMic className="w-6 h-6" />
                    </button>
                    <button type="submit" className="absolute right-5 text-white bg-orange-400 hover:bg-orange-500 rounded-lg px-2 py-2">
                        <LuSendHorizontal className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatBox;