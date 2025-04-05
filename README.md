# FocusFlow

FocusFlow is an interactive video platform that helps users maintain focus while watching videos by monitoring their attention levels using EEG data. When attention levels drop, the video pauses and prompts the user to engage in a chosen activity before continuing.

## Features

- Video playback with attention monitoring
- EEG data integration
- Interactive break activities (doodling, dancing, puzzles, guided breathing)
- Smart video rewinding
- Activity dashboard with:
  - Focus streaks
  - AI-generated feedback
  - Video engagement metrics

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```
4. Start the development server:
   ```bash
   npm run dev:full
   ```

## Technology Stack

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Real-time Communication: Socket.io
- EEG Integration: [Your chosen EEG device/API]

## Project Structure

```
focusflow/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── models/                 # Database models
├── routes/                 # API routes
├── services/              # Business logic
└── utils/                 # Utility functions
``` 