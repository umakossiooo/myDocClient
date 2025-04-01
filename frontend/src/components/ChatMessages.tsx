import React from 'react';
import { Solicitud, CurrentUser } from '../types';

interface ChatProps {
  conversation: Solicitud | null;
  currentUser: CurrentUser | null;
}

const ChatMessages: React.FC<ChatProps> = ({ conversation, currentUser }) => {
  if (!conversation || conversation.type !== "message") {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500 text-sm">No hay mensajes aún.</p>
      </div>
    );
  }

  const messages = conversation.messages || [
    { sender: conversation.telefono, text: conversation.content || '', timestamp: conversation.timestamp },
  ];

  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
      {messages.map((msg: { sender: string; text: string; timestamp: string }, index: number) => {
        const isOwnMessage = currentUser?.phone === msg.sender;

        return (
          <div key={index} className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'}`}>
            {/* Sender Name */}
            {!isOwnMessage && (
              <span className="text-xs text-gray-500 mb-1">
                {conversation.nombre}
              </span>
            )}

            {/* Message Bubble */}
            <div
              className={`flex flex-col max-w-[700px] p-4 leading-1.5 rounded-lg ${isOwnMessage ? 'chat-bubble-doctor bg-blue-100' : 'chat-bubble-paciente bg-gray-100'
                }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-gray-400 mt-2">
                {formatTimestamp(msg.timestamp)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
