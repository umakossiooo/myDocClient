import React from 'react';
import ConversationPanel from '../components/ConversationPanel';
import ChatBox from '../components/ChatBox';

const ChatPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <ConversationPanel />
            <ChatBox />
        </div>
    );
};

export default ChatPage;