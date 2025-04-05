import React, { useState } from 'react';
import './BreakActivity.css';

function BreakActivity({ onComplete }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [timer, setTimer] = useState(60); // 1 minute break
  const [isActive, setIsActive] = useState(false);

  const activities = [
    {
      id: 1,
      title: "Deep Breathing",
      description: "Take a moment to breathe deeply and relax.",
      icon: "🧘"
    },
    {
      id: 2,
      title: "Stretching",
      description: "Stretch your body to relieve tension.",
      icon: "🧘‍♂️"
    },
    {
      id: 3,
      title: "Eye Rest",
      description: "Look away from the screen and focus on distant objects.",
      icon: "👁️"
    },
    {
      id: 4,
      title: "Quick Walk",
      description: "Take a short walk to refresh your mind.",
      icon: "🚶"
    }
  ];

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setIsActive(true);
    
    // Start countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleComplete = () => {
    onComplete();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="break-activity">
      <h2>Time for a Break!</h2>
      <p>Your attention level has dropped. Take a short break to refresh your mind.</p>
      
      {!selectedActivity ? (
        <div className="activity-options">
          <h3>Choose an Activity:</h3>
          <div className="activity-grid">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="activity-card"
                onClick={() => handleActivitySelect(activity)}
              >
                <div className="activity-icon">{activity.icon}</div>
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="activity-in-progress">
          <div className="activity-icon large">{selectedActivity.icon}</div>
          <h3>{selectedActivity.title}</h3>
          <p>{selectedActivity.description}</p>
          
          <div className="timer">
            <div className="timer-circle">
              <span className="timer-value">{formatTime(timer)}</span>
            </div>
          </div>
          
          {timer === 0 && (
            <button className="complete-button" onClick={handleComplete}>
              Complete Break
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BreakActivity; 