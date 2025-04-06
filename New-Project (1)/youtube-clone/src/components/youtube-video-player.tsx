"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipForward,
  SkipBack,
} from "lucide-react";

export function YouTubeVideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Sign in overlay that shows on the video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h3 className="text-xl font-semibold mb-2">
          Sign in to confirm you're not a bot
        </h3>
        <p className="text-sm mb-4">This helps protect our community.</p>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          size="sm"
        >
          Sign in
        </Button>
      </div>

      {/* Video player (darkened because of overlay) */}
      <div className="aspect-video relative w-full opacity-30">
        {/* Video placeholder */}
        <div className="w-full h-full bg-black flex items-center justify-center">
          <div className="text-gray-600">
            {playing ? (
              <Pause className="h-16 w-16" />
            ) : (
              <Play className="h-16 w-16" />
            )}
          </div>
        </div>

        {/* Player controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex flex-col">
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-600 rounded-full mb-3">
            <div
              className="h-full bg-red-600 rounded-full"
              style={{ width: "0%" }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white"
                onClick={() => setPlaying(!playing)}
              >
                {playing ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white"
              >
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white"
                onClick={() => setMuted(!muted)}
              >
                {muted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
              <span className="text-xs">0:00 / 0:00</span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
