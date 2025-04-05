
import React, { useState, useRef, useEffect } from 'react';
import VideoControls from './VideoControls';
import { VideoItem } from '@/api/youtubeData';

interface VideoPlayerProps {
  video: VideoItem;
  onNext: () => void;
  onPrevious: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // In a real app, we would use actual video files
  // For this demo, we'll simulate a video player
  const videoRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const togglePlay = () => {
    if (isPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            clearInterval(timerRef.current as ReturnType<typeof setInterval>);
            timerRef.current = null;
            setIsPlaying(false);
            return duration;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };
  
  useEffect(() => {
    // Reset player when video changes
    setCurrentTime(0);
    setIsPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // Set a random duration between 10-30 minutes for demo purposes
    setDuration(Math.floor(Math.random() * 1200) + 600);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [video.id]);
  
  return (
    <div className="video-player bg-card rounded-md overflow-hidden">
      <div className="relative pt-[56.25%] bg-black">
        <div 
          ref={videoRef}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-contain"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary bg-opacity-80 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h1 className="text-xl font-medium">{video.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{video.channel}</p>
      </div>
      
      <VideoControls 
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentTime={currentTime}
        duration={duration}
        onTimeUpdate={handleTimeUpdate}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};

export default VideoPlayer;
