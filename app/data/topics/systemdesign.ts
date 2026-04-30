import { TopicDetail } from '../../types';

export const systemdesignTopic: TopicDetail = {
  id: 'systemdesign',
  titleEn: 'System Design',
  titleBn: 'সিস্টেম ডিজাইন',
  icon: '🏗️',
  descriptionEn: 'Design scalable, highly available, and reliable distributed systems. Essential for senior engineering roles and architecting complex applications.',
  descriptionBn: 'স্কেলেবল, হাইলি অ্যাভেইলেবল এবং নির্ভরযোগ্য ডিস্ট্রিবিউটেড সিস্টেম ডিজাইন করুন। সিনিয়র ইঞ্জিনিয়ারিং রোল এবং জটিল অ্যাপ্লিকেশন আর্কিটেক্ট করার জন্য অপরিহার্য।',
  sections: [
    {
      level: 'Advanced',
      titleEn: 'Scalability & Load Balancing',
      titleBn: 'স্কেলেবিলিটি এবং লোড ব্যালেন্সিং',
      contentEn: 'Scaling systems to handle millions of requests requires distributing traffic efficiently and separating concerns.',
      contentBn: 'লক্ষ লক্ষ রিকোয়েস্ট হ্যান্ডেল করার জন্য সিস্টেম স্কেল করতে ট্রাফিককে দক্ষতার সাথে বিতরণ করা এবং কাজগুলোকে আলাদা করা প্রয়োজন।',
      pointsEn: [
        'Vertical Scaling (scaling up) vs Horizontal Scaling (scaling out).',
        'Load Balancers: Round-robin, least connections, IP hash.',
        'Reverse Proxies (Nginx, HAProxy) vs API Gateways.',
        'Stateless vs Stateful backend architectures.',
        'CAP Theorem: Consistency, Availability, Partition Tolerance.'
      ],
      pointsBn: [
        'ভার্টিক্যাল স্কেলিং (উপরে স্কেল করা) বনাম হরাইজন্টাল স্কেলিং (বাইরে স্কেল করা)।',
        'লোড ব্যালেন্সার: রাউন্ড-রবিন, লিস্ট কানেকশনস, IP হ্যাশ।',
        'রিভার্স প্রক্সি (Nginx, HAProxy) বনাম API গেটওয়ে।',
        'স্টেটলেস বনাম স্টেটফুল ব্যাকএন্ড আর্কিটেকচার।',
        'CAP থিওরেম: কন্সিস্টেন্সি (Consistency), অ্যাভেইলেবিলিটি (Availability), পার্টিশন টলারেন্স (Partition Tolerance)।'
      ],
      code: `// Conceptual Load Balancer Logic
class LoadBalancer {
  constructor(servers) {
    this.servers = servers; // Array of server IPs
    this.currentIndex = 0;
  }

  // Simple Round Robin Algorithm
  getNextServer() {
    if (this.servers.length === 0) throw new Error("No servers available");
    
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    
    return server;
  }
}

const lb = new LoadBalancer(['192.168.1.1', '192.168.1.2', '192.168.1.3']);
console.log(lb.getNextServer()); // routes to 192.168.1.1`,
      language: 'javascript'
    },
    {
      level: 'Advanced',
      titleEn: 'Databases & Caching',
      titleBn: 'ডেটাবেস এবং ক্যাশিং',
      contentEn: 'Choosing the right database and implementing a caching layer is critical for performance and data integrity.',
      contentBn: 'সঠিক ডেটাবেস বেছে নেওয়া এবং একটি ক্যাশিং লেয়ার প্রয়োগ করা পারফরম্যান্স এবং ডেটার অখণ্ডতার জন্য অত্যন্ত গুরুত্বপূর্ণ।',
      pointsEn: [
        'SQL vs NoSQL: Relational vs Document/Key-Value stores.',
        'Database Scaling: Read Replicas, Sharding, and Partitioning.',
        'Caching Strategies: Redis/Memcached, Cache Aside vs Write-Through.',
        'Content Delivery Networks (CDNs) for static assets.',
        'Message Queues (RabbitMQ, Kafka) for asynchronous processing.'
      ],
      pointsBn: [
        'SQL বনাম NoSQL: রিলেশনাল বনাম ডকুমেন্ট/কি-ভ্যালু স্টোর।',
        'ডেটাবেস স্কেলিং: রিড রেপ্লিকা, শার্ডিং এবং পার্টিশনিং।',
        'ক্যাশিং স্ট্র্যাটেজি: Redis/Memcached, ক্যাশ অ্যাসাইড বনাম রাইট-থ্রু।',
        'স্ট্যাটিক অ্যাসেটের জন্য কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDNs)।',
        'অ্যাসিনক্রোনাস প্রসেসিংয়ের জন্য মেসেজ কিউ (RabbitMQ, Kafka)।'
      ],
      code: `// Example: Cache-Aside Pattern with Redis
async function getUserProfile(userId) {
  // 1. Check cache first
  const cachedData = await redis.get(\`user:\${userId}\`);
  if (cachedData) {
    return JSON.parse(cachedData); // Cache hit
  }

  // 2. Cache miss: Fetch from Database
  const dbData = await database.query('SELECT * FROM users WHERE id = ?', [userId]);

  if (dbData) {
    // 3. Store in cache for future requests (with TTL)
    await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(dbData));
  }

  return dbData;
}`,
      language: 'javascript'
    }
  ]
};
