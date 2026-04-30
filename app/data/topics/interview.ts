import { TopicDetail } from '../../types';

export const interviewTopic: TopicDetail = {
  id: 'interview',
  titleEn: 'Interview Prep',
  titleBn: 'ইন্টারভিউ প্রস্তুতি',
  icon: '🎯',
  descriptionEn: 'Prepare for technical interviews. Master Data Structures, Algorithms, System Design questions, and behavioral interviews to land your dream job.',
  descriptionBn: 'টেকনিক্যাল ইন্টারভিউয়ের জন্য প্রস্তুতি নিন। আপনার স্বপ্নের চাকরি পেতে ডেটা স্ট্রাকচার, অ্যালগরিদম, সিস্টেম ডিজাইন প্রশ্ন এবং বিহেভিয়ারাল ইন্টারভিউ আয়ত্ত করুন।',
  sections: [
    {
      level: 'Advanced',
      titleEn: 'Data Structures & Algorithms (DSA)',
      titleBn: 'ডেটা স্ট্রাকচার এবং অ্যালগরিদম (DSA)',
      contentEn: 'DSA forms the core of technical screening in top tech companies. Focus on problem-solving patterns rather than memorizing solutions.',
      contentBn: 'DSA শীর্ষস্থানীয় টেক কোম্পানিগুলোতে টেকনিক্যাল স্ক্রিনিংয়ের মূল ভিত্তি তৈরি করে। সমাধান মুখস্থ করার পরিবর্তে সমস্যা সমাধানের প্যাটার্নগুলোর উপর ফোকাস করুন।',
      pointsEn: [
        'Core Data Structures: Arrays, Hash Maps, Linked Lists, Trees, Graphs.',
        'Common Patterns: Two Pointers, Sliding Window, Fast & Slow Pointers.',
        'Algorithms: Binary Search, BFS/DFS, Merge Sort, Quick Sort.',
        'Time and Space Complexity Analysis (Big O Notation).',
        'Practicing on platforms like LeetCode and HackerRank.'
      ],
      pointsBn: [
        'কোর ডেটা স্ট্রাকচার: অ্যারস, হ্যাশ ম্যাপস, লিঙ্কড লিস্ট, ট্রি, গ্রাফ।',
        'সাধারণ প্যাটার্ন: টু পয়েন্টার, স্লাইডিং উইন্ডো, ফাস্ট এবং স্লো পয়েন্টার।',
        'অ্যালগরিদম: বাইনারি সার্চ, BFS/DFS, মার্জ সর্ট, কুইক সর্ট।',
        'সময় এবং স্পেস কমপ্লেক্সিটি বিশ্লেষণ (Big O নোটেশন)।',
        'LeetCode এবং HackerRank এর মতো প্ল্যাটফর্মে অনুশীলন করা।'
      ],
      code: `// Common Pattern: Sliding Window (Find max sum subarray of size k)
function maxSubArraySum(arr, k) {
  if (arr.length < k) return null;
  
  let maxSum = 0;
  let currentSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`,
      language: 'javascript'
    },
    {
      level: 'Advanced',
      titleEn: 'Frontend Specific Interviews',
      titleBn: 'ফ্রন্টএন্ড নির্দিষ্ট ইন্টারভিউ',
      contentEn: 'Frontend interviews often differ from general software engineering interviews, focusing heavily on DOM manipulation, UI component design, and JavaScript quirks.',
      contentBn: 'ফ্রন্টএন্ড ইন্টারভিউগুলো প্রায়শই সাধারণ সফটওয়্যার ইঞ্জিনিয়ারিং ইন্টারভিউগুলো থেকে আলাদা হয়, যা মূলত DOM ম্যানিপুলেশন, UI কম্পোনেন্ট ডিজাইন এবং জাভাস্ক্রিপ্টের অদ্ভুত আচরণের উপর ফোকাস করে।',
      pointsEn: [
        'JavaScript Trivia: Closures, Hoisting, Event Loop, Prototypal Inheritance.',
        'Machine Coding: Building components (e.g., Star Rating, Auto-complete) in Vanilla JS or React within a time limit.',
        'Frontend System Design: Designing a scalable architecture for apps like Facebook Newsfeed or Pinterest.',
        'Web Performance optimization and Core Web Vitals.'
      ],
      pointsBn: [
        'জাভাস্ক্রিপ্ট ট্রিভিয়া: ক্লোজার, হোয়েস্টিং, ইভেন্ট লুপ, প্রোটোটাইপাল ইনহেরিট্যান্স।',
        'মেশিন কোডিং: একটি নির্দিষ্ট সময়ের মধ্যে ভ্যানিলা JS বা React দিয়ে কম্পোনেন্ট তৈরি করা (যেমন, স্টার রেটিং, অটো-কমপ্লিট)।',
        'ফ্রন্টএন্ড সিস্টেম ডিজাইন: ফেসবুক নিউজফিড বা পিন্টারেস্টের মতো অ্যাপের জন্য একটি স্কেলেবল আর্কিটেকচার ডিজাইন করা।',
        'ওয়েব পারফরম্যান্স অপ্টিমাইজেশন এবং কোর ওয়েব ভাইটালস।'
      ],
      code: `// Classic JS Interview Question: Implement a basic debounce function
function debounce(func, wait) {
  let timeoutId;
  
  return function(...args) {
    // Clear the previous timer
    clearTimeout(timeoutId);
    
    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// Usage
const handleSearch = debounce((query) => {
  console.log('Fetching data for:', query);
}, 300);`,
      language: 'javascript'
    }
  ]
};
