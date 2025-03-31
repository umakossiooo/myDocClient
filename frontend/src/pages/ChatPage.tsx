import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConversationPanel from '../components/ConversationPanel';
import ChatBox from '../components/ChatBox';
import { Solicitud, CurrentUser } from '../types';

const ChatPage: React.FC = () => {
    const [selectedConversation, setSelectedConversation] = useState<Solicitud | null>(null);
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get("http://localhost:8000/current_user");
                setCurrentUser(response.data);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-start py-9 bg-gray-50 overflow-hidden">
            <div className="flex flex-col md:flex-row w-full max-w-[95vw] lg:max-w-[80vw] px-3 md:px-6 gap-4 h-[90vh]">
                {/* Conversation Panel */}
                <div className="w-full md:w-1/3 h-full overflow-hidden">
                    <ConversationPanel
                        selectedConversation={selectedConversation}
                        setSelectedConversation={setSelectedConversation}
                    />
                </div>

                {/* Chat Box */}
                <div className="w-full md:w-2/3 h-full overflow-hidden">
                    <ChatBox conversation={selectedConversation} currentUser={currentUser} />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;