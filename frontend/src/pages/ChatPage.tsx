import React from 'react';
import ConversationPanel from '../components/ConversationPanel';
import ChatBox from '../components/ChatBox';

const ChatPage: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-start py-6 bg-gray-100">
            <div className="flex w-full max-w-7xl gap-4 h-[80vh]">
                {/* Conversation Panel */}
                <div className="w-1/3 h-full">
                    <ConversationPanel />
                </div>

                {/* Chat Box */}
                <div className="w-2/3 h-full">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;