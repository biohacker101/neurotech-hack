
export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  channel: string;
}

export const playlistData: VideoItem[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    thumbnailUrl: "https://i.ytimg.com/vi/4leZ1Ca4f0g/mqdefault.jpg",
    duration: "10:15",
    channel: "Tech Academy"
  },
  {
    id: "2",
    title: "HTML & CSS Fundamentals",
    thumbnailUrl: "https://i.ytimg.com/vi/UB1O30fR-EE/mqdefault.jpg",
    duration: "15:22",
    channel: "Dev Simplified"
  },
  {
    id: "3",
    title: "JavaScript Basics - Variables and Data Types",
    thumbnailUrl: "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
    duration: "12:41",
    channel: "Programming with Mosh"
  },
  {
    id: "4",
    title: "Responsive Design with CSS Flexbox",
    thumbnailUrl: "https://i.ytimg.com/vi/JJSoEo8JSnc/mqdefault.jpg",
    duration: "18:35",
    channel: "Traversy Media"
  },
  {
    id: "5",
    title: "Building Your First React Application",
    thumbnailUrl: "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
    duration: "21:14",
    channel: "Coding Addict"
  },
  {
    id: "6",
    title: "Advanced CSS Techniques",
    thumbnailUrl: "https://i.ytimg.com/vi/1Rs2ND1ryYc/mqdefault.jpg",
    duration: "14:53",
    channel: "CSS Ninja"
  },
  {
    id: "7",
    title: "Understanding React Hooks",
    thumbnailUrl: "https://i.ytimg.com/vi/TNhaISOUy6Q/mqdefault.jpg",
    duration: "16:07",
    channel: "React Masters"
  },
  {
    id: "8",
    title: "API Integration with Fetch",
    thumbnailUrl: "https://i.ytimg.com/vi/cuEtnrL9-H0/mqdefault.jpg",
    duration: "13:29",
    channel: "JS Wizards"
  }
];
