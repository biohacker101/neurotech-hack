const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Simulate EEG data every 2 seconds
  const eegInterval = setInterval(() => {
    const attentionLevel = Math.random();
    socket.emit('attentionAlert', {
      attentionLevel,
      timestamp: new Date()
    });
  }, 2000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(eegInterval);
  });
});

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 