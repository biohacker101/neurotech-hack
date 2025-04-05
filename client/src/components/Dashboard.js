import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ sessionData }) => {
  const [stats, setStats] = useState({
    focusStreak: 0,
    totalWatchTime: 0,
    attentionScore: 0,
    breakCount: 0
  });

  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (sessionData) {
      calculateStats(sessionData);
      generateFeedback(sessionData);
    }
  }, [sessionData]);

  const calculateStats = (data) => {
    // Calculate focus streak (consecutive minutes of good attention)
    const streak = calculateFocusStreak(data.attentionData);
    
    // Calculate total watch time in minutes
    const watchTime = data.totalTime / 60;
    
    // Calculate average attention score
    const attentionScore = calculateAttentionScore(data.attentionData);
    
    // Count number of breaks taken
    const breaks = data.breakCount || 0;

    setStats({
      focusStreak: streak,
      totalWatchTime: Math.round(watchTime),
      attentionScore: Math.round(attentionScore * 100),
      breakCount: breaks
    });
  };

  const calculateFocusStreak = (attentionData) => {
    // Placeholder implementation
    return Math.floor(Math.random() * 30);
  };

  const calculateAttentionScore = (attentionData) => {
    // Placeholder implementation
    return Math.random();
  };

  const generateFeedback = (data) => {
    // Generate AI feedback based on session data
    const feedbacks = [
      "Great job maintaining focus! Your attention span is improving.",
      "Consider taking more frequent breaks to maintain optimal focus.",
      "Your focus patterns show improvement in the second half of the session.",
      "Try to minimize distractions during high-attention segments."
    ];
    setFeedback(feedbacks[Math.floor(Math.random() * feedbacks.length)]);
  };

  return (
    <div className="dashboard">
      <h2>Session Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Focus Streak</h3>
          <p className="stat-value">{stats.focusStreak} minutes</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Watch Time</h3>
          <p className="stat-value">{stats.totalWatchTime} minutes</p>
        </div>
        
        <div className="stat-card">
          <h3>Attention Score</h3>
          <p className="stat-value">{stats.attentionScore}%</p>
        </div>
        
        <div className="stat-card">
          <h3>Breaks Taken</h3>
          <p className="stat-value">{stats.breakCount}</p>
        </div>
      </div>

      <div className="feedback-section">
        <h3>AI Feedback</h3>
        <p className="feedback-text">{feedback}</p>
      </div>

      <div className="engagement-chart">
        <h3>Engagement Over Time</h3>
        <div className="chart-placeholder">
          {/* Placeholder for engagement chart */}
          <p>Engagement visualization coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 