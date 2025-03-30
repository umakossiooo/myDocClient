import React from 'react';
import MainHeader from '../components/MainHeader';
import ConversationPanel from '../components/ConversationPanel';
import ChatBox from '../components/ChatBox';

const ChatPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Main Header */}
            <MainHeader />

            {/* Contenido principal: Panel de conversaciones y área de chat */}
            <div className="flex flex-1">
                <ConversationPanel />
                <ChatBox />
            </div>
        </div>
    );
};

export default ChatPage;