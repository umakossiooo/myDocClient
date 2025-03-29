import React from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'paciente' | 'doctor';
};

const messages: Message[] = [
  { id: 1, sender: 'paciente', text: 'Hola, Médico. Me duele mucho la cabeza desde hace unas horas.' },
  { id: 2, sender: 'doctor', text: 'Hola. ¿Puedes describir el dolor? ¿Es punzante, opresivo o late como un pulso?' },
  { id: 3, sender: 'paciente', text: 'Es como una presión en la frente y las sienes.' },
  { id: 4, sender: 'doctor', text: 'Entiendo. ¿Has dormido bien? ¿Has comido e hidratado adecuadamente hoy?' },
];

const ChatMessages: React.FC = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
      {messages.map((msg) => {
        const isOwnMessage = msg.sender === 'doctor';
        const showSenderName = !isOwnMessage;
        const time = isOwnMessage ? '10:11' : '10:08';

        return (
          <div key={msg.id} className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'}`}>
            {showSenderName && (
              <span className="text-xs text-gray-500 mb-1 ml-2">Adrián Rodríguez</span>
            )}

            <div
              className={`flex flex-col max-w-[700px] p-4 leading-1.5 ${
                isOwnMessage ? 'chat-bubble-doctor' : 'chat-bubble-paciente'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <div className={`text-xs mt-2 ${isOwnMessage ? 'chat-time-doctor' : 'chat-time-paciente'}`}>
                {time}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
