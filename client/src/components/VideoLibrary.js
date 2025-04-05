import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoLibrary.css';

const VideoLibrary = () => {
  const navigate = useNavigate();

  const videoData = [
    {
      id: 1,
      title: "But what is a Neural Network?",
      description: "Learn the basics of neural networks and their applications.",
      thumbnail: "https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg",
      duration: "18:40",
      category: "Neural Networks",
      videoUrl: "https://www.youtube.com/embed/aircAruvnKk"
    },
    {
      id: 2,
      title: "What is Artificial Intelligence?",
      description: "Learn the basics of AI.",
      thumbnail: "https://i.ytimg.com/vi/c0m6yaGlZh4/maxresdefault.jpg",
      duration: "1:40",
      category: "AI",
      videoUrl: "https://www.youtube.com/embed/c0m6yaGlZh4"
    },
    {
      id: 3,
      title: "Gradient Descent",
      description: "Learn gradient descent - how neural networks learn.",
      thumbnail: "https://i.ytimg.com/vi/IHZwWFHWa-w/maxresdefault.jpg",
      duration: "20:33",
      category: "Deep Learning",
      videoUrl: "https://www.youtube.com/embed/IHZwWFHWa-w"
    },
    {
      id: 4,
      title: "Learn Data Science",
      description: "Essential concepts and tools for data science.",
      thumbnail: "https://i.ytimg.com/vi/ua-CiDNNj30/maxresdefault.jpg",
      duration: "5:52:09",
      category: "Data Science",
      videoUrl: "https://www.youtube.com/embed/ua-CiDNNj30"
    },
    {
      id: 5,
      title: "Natural Language Processing",
      description: "Introduction to NLP concepts and applications.",
      thumbnail: "https://i.ytimg.com/vi/FLZvOKSCkxY/maxresdefault.jpg",
      duration: "19:53",
      category: "NLP",
      videoUrl: "https://www.youtube.com/embed/FLZvOKSCkxY"
    },
    {
      id: 6,
      title: "Reinforcement Learning Fundamentals",
      description: "Understanding the principles of reinforcement learning.",
      thumbnail: "https://i.ytimg.com/vi/JgvyzIkgxF0/maxresdefault.jpg",
      duration: "16:27",
      category: "RL",
      videoUrl: "https://www.youtube.com/embed/JgvyzIkgxF0"
    }
  ];

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="video-library">
      <div className="library-header">
        <h1>Content</h1>
      </div>
      <div className="video-grid">
        {videoData.map(video => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => handleVideoClick(video.id)}
          >
            <div className="thumbnail-container">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="thumbnail"
              />
              <span className="duration">{video.duration}</span>
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-category">{video.category}</p>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary; 