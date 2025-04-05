
import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  onTimeUpdate: (time: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  onTimeUpdate,
  onPrevious,
  onNext
}) => {
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formattedTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / progressBar.clientWidth;
    onTimeUpdate(percentage * duration);
  };

  return (
    <div className="video-controls bg-card py-3 px-4 rounded-b-md">
      <div 
        className="video-progress group mb-3"
        onClick={handleProgressClick}
      >
        <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100}%` }}>
          <div className="progress-handle"></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={onPrevious} className="video-control-button">
            <SkipBack size={18} />
          </button>
          
          <button onClick={togglePlay} className="video-control-button">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button onClick={onNext} className="video-control-button">
            <SkipForward size={18} />
          </button>

          <button onClick={toggleMute} className="video-control-button ml-2">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          
          <div className="w-20 h-1 bg-gray-600 rounded-full overflow-hidden ml-1">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${isMuted ? 0 : volume}%` }}
            ></div>
          </div>
        </div>
        
        <div className="text-sm text-gray-300">
          {formattedTime(currentTime)} / {formattedTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
