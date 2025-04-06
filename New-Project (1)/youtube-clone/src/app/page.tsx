import { YouTubeHeader } from "@/components/youtube-header";
import { YouTubeVideoPlayer } from "@/components/youtube-video-player";
import { YouTubeVideoInfo } from "@/components/youtube-video-info";
import { YouTubeRecommendations } from "@/components/youtube-video-recommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <YouTubeHeader />
      <div className="mt-14 px-6 py-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <YouTubeVideoPlayer />
            <YouTubeVideoInfo />
          </div>
          <div className="w-full lg:w-[400px]">
            <YouTubeRecommendations />
          </div>
        </div>
      </div>
    </main>
  );
}
