
import React from 'react';
import { cn } from '@/lib/utils';
import { VideoItem } from '@/api/youtubeData';

interface PlaylistItemProps {
  video: VideoItem;
  isActive: boolean;
  onClick: () => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ video, isActive, onClick }) => {
  return (
    <div 
      className={cn("playlist-item", isActive && "active")}
      onClick={onClick}
    >
      <div className="relative flex-shrink-0 w-40 h-24">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="video-thumbnail h-full w-full"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-sm font-medium line-clamp-2">{video.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{video.channel}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
