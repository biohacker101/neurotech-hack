import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import VideoLibrary from './components/VideoLibrary';
import VideoPlayer from './components/VideoPlayer';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="app">
          <header className="app-header">
            <div className="logo">FocusFlow</div>
            <nav className="tabs">
              <button 
                className={`tab ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
              >
                Content
              </button>
              <button 
                className={`tab ${activeTab === 'options' ? 'active' : ''}`}
                onClick={() => setActiveTab('options')}
              >
                Options
              </button>
              <button 
                className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
                onClick={() => setActiveTab('summary')}
              >
                Summary Report
              </button>
            </nav>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </header>

          <main className="app-content">
            {activeTab === 'videos' && (
              <Routes>
                <Route path="/" element={<VideoLibrary />} />
                <Route path="/video/:id" element={<VideoPlayer />} />
              </Routes>
            )}
            {activeTab === 'options' && (
              <div className="options-container">
                <h2>Options</h2>
                <div className="options-grid">
                  <div className="option-card">
                    <h3>Account Settings</h3>
                    <p>Manage your account preferences and profile</p>
                  </div>
                  <div className="option-card">
                    <h3>Notification Settings</h3>
                    <p>Configure your notification preferences</p>
                  </div>
                  <div className="option-card">
                    <h3>Privacy Settings</h3>
                    <p>Control your privacy and data settings</p>
                  </div>
                  <div className="option-card">
                    <h3>Appearance</h3>
                    <p>Customize the look and feel of the application</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'summary' && (
              <Dashboard />
            )}
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
