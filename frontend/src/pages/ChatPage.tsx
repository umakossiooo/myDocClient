import React from 'react';
import ConversationPanel from '../components/ConversationPanel';
import ChatBox from '../components/ChatBox';

const ChatPage: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-start py-9 bg-gray-50 overflow-hidden">
            <div className="flex flex-col md:flex-row w-full max-w-[95vw] lg:max-w-[80vw] px-3 md:px-6 gap-4 h-[90vh]">
                {/* Conversation Panel */}
                <div className="w-full md:w-1/3 h-full overflow-hidden">
                    <ConversationPanel />
                </div>

                {/* Chat Box */}
                <div className="w-full md:w-2/3 h-full overflow-hidden">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;