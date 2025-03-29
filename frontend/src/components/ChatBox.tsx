import React from 'react';
import ChatMessages from './ChatMessages';
import { FileText } from 'react-feather';

const ChatBox: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-white border-1 border-gray-200 w-full">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <div>
                    <p className="text-sm font-semibold text-gray-900 text-left">Adrián Rodríguez</p>
                    <p className="text-xs text-gray-500 text-left">+52 222-222-2222</p>
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <FileText className="w-4 h-4" />
                        <button className="btn">Registrar consulta</button>
                    </div>
                    <button className="btn">Ver historial</button>
                </div>
            </div>
            <ChatMessages />
        </div>
    );
}

export default ChatBox;