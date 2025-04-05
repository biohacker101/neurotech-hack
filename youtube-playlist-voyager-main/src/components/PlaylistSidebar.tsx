
import React from 'react';
import PlaylistItem from './PlaylistItem';
import { VideoItem } from '@/api/youtubeData';

interface PlaylistSidebarProps {
  videos: VideoItem[];
  activeVideoId: string;
  onVideoSelect: (videoId: string) => void;
}

const PlaylistSidebar: React.FC<PlaylistSidebarProps> = ({ 
  videos, 
  activeVideoId, 
  onVideoSelect 
}) => {
  return (
    <div className="playlist-sidebar bg-card rounded-md overflow-hidden h-full">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-medium">Playlist</h2>
        <p className="text-xs text-muted-foreground mt-1">{videos.length} videos</p>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-68px)] p-2 space-y-2">
        {videos.map((video) => (
          <PlaylistItem
            key={video.id}
            video={video}
            isActive={video.id === activeVideoId}
            onClick={() => onVideoSelect(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSidebar;
