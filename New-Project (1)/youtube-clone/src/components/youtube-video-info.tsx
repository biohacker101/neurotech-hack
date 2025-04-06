"use client";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
  MoreHorizontal,
  ChevronDown,
  User,
} from "lucide-react";

export function YouTubeVideoInfo() {
  return (
    <div className="mt-3">
      {/* Video title */}
      <h1 className="text-xl font-semibold mb-2">
        L01 Functional Programming | UC Berkeley CS 61A, Spring 2010
      </h1>

      {/* Video stats and actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          <span>112K views</span>
          <span className="mx-1">•</span>
          <span>7 years ago</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex items-center gap-1 rounded-full">
            <ThumbsUp className="h-5 w-5" />
            <span>1.2K</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 rounded-full">
            <ThumbsDown className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 rounded-full">
            <Share className="h-5 w-5" />
            <span>Share</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 rounded-full">
            <Download className="h-5 w-5" />
            <span>Download</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Channel info and description */}
      <div className="bg-gray-100 rounded-xl p-3">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>SD</AvatarFallback>
              <AvatarImage src="https://ext.same-assets.com/1845620557/1648327767.jpeg" alt="Satyakiran Duggina" />
            </Avatar>
            <div>
              <div className="font-medium">Satyakiran Duggina</div>
              <div className="text-xs text-gray-600">2.09K subscribers</div>
            </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">
            Subscribe
          </Button>
        </div>

        <div className="mt-4 text-sm">
          <p className="text-gray-700">No description has been added to this video.</p>
          <Button variant="ghost" className="text-sm p-0 mt-1 h-auto">
            <span>Show more</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Comments section (collapsed, showing count only) */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-medium">Comments</h3>
          <span className="text-sm text-gray-600">101</span>
        </div>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-blue-500 text-white">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-transparent border-b border-gray-200 pb-1 focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
