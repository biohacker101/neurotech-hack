import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import BreakActivity from './BreakActivity';
import './VideoPlayer.css';

function VideoPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attentionLevel, setAttentionLevel] = useState(100);
  const [showBreakActivity, setShowBreakActivity] = useState(false);
  const [socket, setSocket] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  // Sample video data - in a real app, this would come from an API
  const videos = [
    {
      id: 1,
      title: "But what is a Neural Network?",
      description: "Learn the basics of neural networks and their applications.",
      videoUrl: "https://www.youtube.com/embed/aircAruvnKk"
    },
    {
      id: 2,
      title: "What is Artificial Intelligence?",
      description: "Learn the basics of AI.",
      videoUrl: "https://www.youtube.com/embed/c0m6yaGlZh4"
    },
    {
      id: 3,
      title: "Gradient Descent",
      description: "Learn gradient descent - how neural networks learn.",
      videoUrl: "https://www.youtube.com/embed/IHZwWFHWa-w"
    },
    {
      id: 4,
      title: "Learn Data Science",
      description: "Essential concepts and tools for data science.",
      videoUrl: "https://www.youtube.com/embed/ua-CiDNNj30"
    },
    {
      id: 5,
      title: "Natural Language Processing",
      description: "Introduction to NLP concepts and applications.",
      videoUrl: "https://www.youtube.com/embed/FLZvOKSCkxY"
    },
    {
      id: 6,
      title: "Reinforcement Learning Fundamentals",
      description: "Understanding the principles of reinforcement learning.",
      videoUrl: "https://www.youtube.com/embed/JgvyzIkgxF0"
    }
  ];

  useEffect(() => {
    // Find the video data based on the ID
    const video = videos.find(v => v.id === parseInt(id));
    if (video) {
      setVideoData(video);
    } else {
      // If video not found, redirect to video library
      navigate('/');
    }

    // Connect to socket.io server
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [id, navigate]);

  useEffect(() => {
    if (socket) {
      socket.on('attentionUpdate', (data) => {
        setAttentionLevel(data.attentionLevel);
        handleAttentionAlert(data.attentionLevel);
      });
    }
  }, [socket]);

  const handleAttentionAlert = (level) => {
    if (level < 50 && !showBreakActivity) {
      setShowBreakActivity(true);
      setIsPlaying(false);
    }
  };

  const handleBreakComplete = () => {
    setShowBreakActivity(false);
    setIsPlaying(true);
  };

  const handleBackToLibrary = () => {
    navigate('/');
  };

  if (!videoData) {
    return <div className="loading">Loading video...</div>;
  }

  return (
    <div className="video-player-container">
      <div className="video-header">
        <button className="back-button" onClick={handleBackToLibrary}>
          ← Back to Library
        </button>
        <h1>{videoData.title}</h1>
      </div>

      <div className="video-content">
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              ref={playerRef}
              src={`${videoData.videoUrl}?autoplay=${isPlaying ? 1 : 0}`}
              title={videoData.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-frame"
            ></iframe>
          </div>
          
          <div className="video-info">
            <h2>{videoData.title}</h2>
            <p>{videoData.description}</p>
          </div>
        </div>

        <div className="attention-section">
          <div className="attention-meter">
            <h3>Attention Level</h3>
            <div className="meter-container">
              <div 
                className="meter-fill" 
                style={{ 
                  width: `${attentionLevel}%`,
                  backgroundColor: attentionLevel > 70 ? '#4CAF50' : 
                                  attentionLevel > 40 ? '#FFC107' : '#F44336'
                }}
              ></div>
              <span className="meter-value">{attentionLevel}%</span>
            </div>
          </div>

          {showBreakActivity && (
            <BreakActivity onComplete={handleBreakComplete} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer; 