import React from 'react';
import './App.css';
import ChatPage from './pages/ChatPage';
import MainHeader from './components/MainHeader';

const App: React.FC = () => {
  return (
    <div>
    <MainHeader />
    <ChatPage />
    </div>
  );
};

export default App;
