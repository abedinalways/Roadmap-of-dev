import { TopicDetail } from '../../types';

export const websocketTopic: TopicDetail = {
  id: 'websocket',
  titleEn: 'WebSocket',
  titleBn: 'ওয়েবসকেট',
  icon: '🔌',
  descriptionEn: 'Enable real-time, bi-directional communication between the client and server. Essential for chat apps, live notifications, and multiplayer games.',
  descriptionBn: 'ক্লায়েন্ট এবং সার্ভারের মধ্যে রিয়েল-টাইম, দ্বিমুখী যোগাযোগ সক্ষম করুন। চ্যাট অ্যাপ, লাইভ নোটিফিকেশন এবং মাল্টিপ্লেয়ার গেমের জন্য অপরিহার্য।',
  sections: [
    {
      level: 'Intermediate',
      titleEn: 'Real-time Communication Concepts',
      titleBn: 'রিয়েল-টাইম কমিউনিকেশন কনসেপ্টস',
      contentEn: 'Unlike standard HTTP requests where the client must request data, WebSockets keep a connection open, allowing the server to push data to the client instantly.',
      contentBn: 'সাধারণ HTTP রিকোয়েস্টের বিপরীতে যেখানে ক্লায়েন্টকে ডেটা রিকোয়েস্ট করতে হয়, ওয়েবসকেট একটি কানেকশন খোলা রাখে, যা সার্ভারকে তাৎক্ষণিকভাবে ক্লায়েন্টের কাছে ডেটা পুশ করতে দেয়।',
      pointsEn: [
        'HTTP Polling vs Long Polling vs WebSockets.',
        'The WebSocket Protocol (ws:// and wss://).',
        'The connection lifecycle: Handshake, Open, Message, Close, Error.',
        'Libraries: native WebSocket API vs Socket.io (which provides fallbacks and rooms).'
      ],
      pointsBn: [
        'HTTP পোলিং বনাম লং পোলিং বনাম ওয়েবসকেটস।',
        'ওয়েবসকেট প্রোটোকল (ws:// এবং wss://)।',
        'কানেকশন লাইফসাইকেল: হ্যান্ডশেক, ওপেন, মেসেজ, ক্লোজ, এরর।',
        'লাইব্রেরি: নেটিভ ওয়েবসকেট API বনাম Socket.io (যা ফলব্যাক এবং রুম প্রদান করে)।'
      ],
      code: `// Native WebSocket Client Example
const socket = new WebSocket('wss://api.example.com/chat');

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send(JSON.stringify({ type: 'JOIN', room: 'general' }));
});

// Listen for messages
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log('Message from server ', data);
});

// Handle disconnection
socket.addEventListener('close', (event) => {
    console.log('Server disconnected');
});`,
      language: 'javascript'
    },
    {
      level: 'Advanced',
      titleEn: 'Socket.io in Full-Stack Apps',
      titleBn: 'ফুল-স্ট্যাক অ্যাপে Socket.io',
      contentEn: 'Socket.io abstracts the complexity of WebSockets, providing features like automatic reconnection, broadcasting, and namespaces (rooms) out of the box.',
      contentBn: 'Socket.io ওয়েবসকেটের জটিলতা দূর করে, এবং স্বয়ংক্রিয় রিকানেকশন, ব্রডকাস্টিং এবং নেমস্পেস (রুম)-এর মতো বৈশিষ্ট্যগুলো প্রদান করে।',
      pointsEn: [
        'Setting up a Socket.io Node.js server attached to an HTTP server.',
        'Integrating Socket.io client in React/Next.js using useEffect.',
        'Rooms and Broadcasting: Sending messages to specific users or groups.',
        'Authentication with WebSockets (passing tokens during connection handshake).',
        'Handling disconnections and offline states in the UI.'
      ],
      pointsBn: [
        'HTTP সার্ভারের সাথে সংযুক্ত একটি Socket.io Node.js সার্ভার সেট আপ করা।',
        'useEffect ব্যবহার করে React/Next.js এ Socket.io ক্লায়েন্ট ইন্টিগ্রেট করা।',
        'রুম এবং ব্রডকাস্টিং: নির্দিষ্ট ব্যবহারকারী বা গ্রুপকে মেসেজ পাঠানো।',
        'ওয়েবসকেটের সাথে অথেন্টিকেশন (কানেকশন হ্যান্ডশেকের সময় টোকেন পাঠানো)।',
        'UI-তে ডিসকানেকশন এবং অফলাইন স্টেট হ্যান্ডলিং।'
      ],
      code: `// Node.js Server (Socket.io)
const io = require('socket.io')(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // User joins a specific chat room
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
  });

  // Broadcast message to a room
  socket.on('send_message', (data) => {
    // Sends to everyone in the room EXCEPT the sender
    socket.to(data.room).emit('receive_message', data);
  });
});`,
      language: 'javascript'
    }
  ]
};
