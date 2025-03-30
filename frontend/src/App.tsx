import React from 'react';
import './App.css';
import ChatPage from './pages/ChatPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedPage from './pages/MedPage';
import PatientsPage from './pages/PatientsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/meds" element={<MedPage />} />
        <Route path="/patients" element={<PatientsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
