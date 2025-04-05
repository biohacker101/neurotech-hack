
import React, { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import PlaylistSidebar from '@/components/PlaylistSidebar';
import { playlistData } from '@/api/youtubeData';

const Index = () => {
  const [activeVideoId, setActiveVideoId] = useState(playlistData[0].id);
  
  const activeVideo = playlistData.find(video => video.id === activeVideoId) || playlistData[0];
  
  const handleVideoSelect = (videoId: string) => {
    setActiveVideoId(videoId);
  };
  
  const handleNextVideo = () => {
    const currentIndex = playlistData.findIndex(video => video.id === activeVideoId);
    const nextIndex = (currentIndex + 1) % playlistData.length;
    setActiveVideoId(playlistData[nextIndex].id);
  };
  
  const handlePreviousVideo = () => {
    const currentIndex = playlistData.findIndex(video => video.id === activeVideoId);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : playlistData.length - 1;
    setActiveVideoId(playlistData[previousIndex].id);
  };
  
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">YouTube Playlist Voyager</h1>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer 
            video={activeVideo}
            onNext={handleNextVideo}
            onPrevious={handlePreviousVideo}
          />
        </div>
        
        <div className="h-[calc(100vh-180px)] lg:h-auto">
          <PlaylistSidebar 
            videos={playlistData}
            activeVideoId={activeVideoId}
            onVideoSelect={handleVideoSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
