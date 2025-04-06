"use client";

import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// Define a type for video data
type VideoRecommendation = {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    verified?: boolean;
  };
  views: string;
  timestamp: string;
  duration: string;
  isNew?: boolean;
};

// Video recommendation item component
function VideoRecommendationItem({
  video,
}: {
  video: VideoRecommendation;
}) {
  return (
    <div className="flex gap-2 mb-2 group cursor-pointer">
      {/* Thumbnail with duration */}
      <div className="relative flex-shrink-0 w-40 h-24">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover rounded-lg w-full h-full"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video info */}
      <div className="flex-1 flex flex-col">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
            </TooltipTrigger>
            <TooltipContent side="right" align="start">
              <p className="max-w-xs">{video.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="text-xs text-gray-500 mt-1">
          {video.channel.name}
          {video.channel.verified && (
            <span className="ml-1 inline-block">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 fill-gray-500"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.2 14.8l-4.2-4.2 1.4-1.4 2.8 2.8 6.8-6.8 1.4 1.4-8.2 8.2z" />
              </svg>
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {video.views} • {video.timestamp}
        </div>
        {video.isNew && (
          <span className="text-xs bg-gray-100 text-gray-700 w-fit px-1 rounded mt-1">
            New
          </span>
        )}
      </div>

      {/* More options button (only visible on hover) */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// Mock data for video recommendations
const recommendedVideos: VideoRecommendation[] = [
  {
    id: "8aFp84teahw",
    title: "L02 Functional Programming | UC Berkeley CS 61A, Spring 2010",
    thumbnail: "https://ext.same-assets.com/1845620557/944699303.avif",
    channel: {
      name: "Satyakiran Duggina",
      verified: false
    },
    views: "21K views",
    timestamp: "7 years ago",
    duration: "49:07"
  },
  {
    id: "-J_xL4IGhJA",
    title: "Lecture 1A: Overview and Introduction to Lisp",
    thumbnail: "https://ext.same-assets.com/1845620557/1384814633.avif",
    channel: {
      name: "MIT OpenCourseWare",
      verified: true
    },
    views: "292K views",
    timestamp: "5 years ago",
    duration: "1:12:56"
  },
  {
    id: "BHEhxPuMmQI",
    title: "Physicist Brian Cox explains quantum physics in 22 minutes",
    thumbnail: "https://ext.same-assets.com/1845620557/1078509128.avif",
    channel: {
      name: "Big Think",
      verified: true
    },
    views: "344K views",
    timestamp: "2 days ago",
    duration: "22:19",
    isNew: true
  },
  {
    id: "1yyRvyNQ5rQ",
    title: "Stanford Computer Scientist Answers Coding Questions From Twitter",
    thumbnail: "https://ext.same-assets.com/1845620557/2495726485.avif",
    channel: {
      name: "WIRED",
      verified: true
    },
    views: "4.3M views",
    timestamp: "2 years ago",
    duration: "17:13"
  },
  {
    id: "70nHmlapu7w",
    title: "Where Do We Go From Here?",
    thumbnail: "https://ext.same-assets.com/1845620557/924715488.avif",
    channel: {
      name: "Bernie Sanders",
      verified: true
    },
    views: "2.3M views",
    timestamp: "2 days ago",
    duration: "12:54",
    isNew: true
  }
];

// Main recommended videos component
export function YouTubeRecommendations() {
  return (
    <div className="flex flex-col">
      {recommendedVideos.map((video) => (
        <VideoRecommendationItem key={video.id} video={video} />
      ))}
    </div>
  );
}
