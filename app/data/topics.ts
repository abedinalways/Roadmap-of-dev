import { TopicDetail } from '../types';

export const TOPICS_DATA: Record<string, TopicDetail> = {
  html: {
    id: 'html',
    titleEn: 'HTML & CSS',
    titleBn: 'HTML ও CSS',
    icon: '🎨',
    descriptionEn: 'The building blocks of the web. Master semantic HTML and modern CSS layouts.',
    descriptionBn: 'ওয়েবের মূল ভিত্তি। সিম্যান্টিক HTML এবং আধুনিক CSS লেআউট আয়ত্ত করুন।',
    sections: [
      {
        level: 'Basic',
        titleEn: 'Semantic HTML',
        titleBn: 'সিম্যান্টিক HTML',
        contentEn: 'Semantic HTML introduces meaning to the web page rather than just presentation. It helps SEO and accessibility.',
        contentBn: 'সিম্যান্টিক HTML ওয়েব পেজে শুধু উপস্থাপনা নয়, বরং অর্থ প্রদান করে। এটি SEO এবং অ্যাক্সেসিবিলিটিতে সাহায্য করে।',
        pointsEn: [
          'Use <main>, <nav>, <article>, <section>',
          'Proper heading hierarchy (h1-h6)',
          'Alt text for images',
          'Form accessibility with <label>'
        ],
        pointsBn: [
          '<main>, <nav>, <article>, <section> ব্যবহার করুন',
          'সঠিক হেডিং হায়ারার্কি (h1-h6)',
          'ইমেজের জন্য অল্টার টেক্সট',
          '<label> এর মাধ্যমে ফর্ম অ্যাক্সেসিবিলিটি'
        ],
        code: `<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>The Importance of Semantics</h1>
    <p>Context matters...</p>
  </article>
</main>`,
        language: 'html'
      },
      {
        level: 'Intermediate',
        titleEn: 'CSS Flexbox & Grid',
        titleBn: 'CSS ফ্লেক্সবক্স ও গ্রিড',
        contentEn: 'Modern layout techniques that allow for responsive and complex designs with ease.',
        contentBn: 'আধুনিক লেআউট কৌশল যা সহজে রেসপনসিভ এবং জটিল ডিজাইন তৈরি করতে দেয়।',
        pointsEn: [
          'Flexbox for 1D layouts',
          'CSS Grid for 2D layouts',
          'Responsive design with media queries',
          'CSS Variables (Custom Properties)'
        ],
        pointsBn: [
          '১ডি লেআউটের জন্য ফ্লেক্সবক্স',
          '২ডি লেআউটের জন্য CSS গ্রিড',
          'মিডিয়া কোয়েরির মাধ্যমে রেসপনসিভ ডিজাইন',
          'CSS ভেরিয়েবল (কাস্টম প্রোপার্টি)'
        ],
        code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
        language: 'css'
      }
    ]
  },
  js: {
    id: 'js',
    titleEn: 'JavaScript',
    titleBn: 'জাভাস্ক্রিপ্ট',
    icon: '💛',
    descriptionEn: 'The language of the web. From basics to functional and asynchronous programming.',
    descriptionBn: 'ওয়েবের ভাষা। বেসিক থেকে শুরু করে ফাংশনাল এবং অ্যাসিনক্রোনাস প্রোগ্রামিং।',
    sections: [
      {
        level: 'Basic',
        titleEn: 'ES6+ Fundamentals',
        titleBn: 'ES6+ এর মূল ভিত্তি',
        contentEn: 'Modern JavaScript features that make code cleaner and more efficient.',
        contentBn: 'আধুনিক জাভাস্ক্রিপ্ট ফিচার যা কোডকে আরও পরিষ্কার এবং কার্যকর করে।',
        pointsEn: [
          'Let and Const',
          'Arrow Functions',
          'Template Literals',
          'Destructuring and Spread operator'
        ],
        pointsBn: [
          'Let এবং Const',
          'অ্যারো ফাংশন',
          'টেমপ্লেট লিটারেল',
          'ডিস্ট্রাকচারিং এবং স্প্রেড অপারেটর'
        ],
        code: `const user = { name: 'Abedin', role: 'Dev' };
const { name, role } = user;

const greet = (name) => \`Hello, \${name}!\`;
console.log(greet(name));`,
        language: 'javascript'
      },
      {
        level: 'Advanced',
        titleEn: 'Asynchronous JS',
        titleBn: 'অ্যাসিনক্রোনাস JS',
        contentEn: 'Mastering Promises, Async/Await, and handling API calls.',
        contentBn: 'প্রমিস, অ্যাসিনক্রোনাস/অ্যাওয়েট এবং API কল হ্যান্ডলিং আয়ত্ত করা।',
        pointsEn: [
          'Event Loop and Microtasks',
          'Promises and Promise.all',
          'Async/Await syntax',
          'Fetch API and error handling'
        ],
        pointsBn: [
          'ইভেন্ট লুপ এবং মাইক্রোটাস্ক',
          'প্রমিস এবং Promise.all',
          'অ্যাসিনক্রোনাস/অ্যাওয়েট সিনট্যাক্স',
          'Fetch API এবং এরর হ্যান্ডলিং'
        ],
        code: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed:', error);
  }
}`,
        language: 'javascript'
      }
    ]
  },
  react: {
    id: 'react',
    titleEn: 'React',
    titleBn: 'রিঅ্যাক্ট',
    icon: '⚛️',
    descriptionEn: 'Build modern user interfaces with a component-based architecture.',
    descriptionBn: 'কম্পোনেন্ট-ভিত্তিক আর্কিটেকচারের মাধ্যমে আধুনিক ইউজার ইন্টারফেস তৈরি করুন।',
    sections: [
      {
        level: 'Basic',
        titleEn: 'Components & Hooks',
        titleBn: 'কম্পোনেন্ট ও হুকস',
        contentEn: 'The fundamental concepts of React: Components, Props, and State using Hooks.',
        contentBn: 'রিঅ্যাক্টের মৌলিক ধারণা: হুকস ব্যবহার করে কম্পোনেন্ট, প্রপস এবং স্টেট।',
        pointsEn: [
          'Functional Components',
          'useState for local state',
          'useEffect for side effects',
          'Passing data via Props'
        ],
        pointsBn: [
          'ফাংশনাল কম্পোনেন্ট',
          'লোকাল স্টেটের জন্য useState',
          'সাইড ইফেক্টের জন্য useEffect',
          'প্রপস এর মাধ্যমে ডেটা পাঠানো'
        ],
        code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
        language: 'javascript'
      }
    ]
  },
  nextjs: {
    id: 'nextjs',
    titleEn: 'Next.js',
    titleBn: 'নেক্সট.জেএস',
    icon: '▲',
    descriptionEn: 'The React Framework for the Web. Master App Router, SSR, and ISR.',
    descriptionBn: 'ওয়েবের জন্য রিঅ্যাক্ট ফ্রেমওয়ার্ক। অ্যাপ রাউটার, SSR এবং ISR আয়ত্ত করুন।',
    sections: [
      {
        level: 'Basic',
        titleEn: 'App Router & File-based Routing',
        titleBn: 'অ্যাপ রাউটার ও ফাইল-ভিত্তিক রাউটিং',
        contentEn: 'Understanding how Next.js uses the file system to define routes and layouts.',
        contentBn: 'নেক্সট.জেএস কীভাবে রাউট এবং লেআউট নির্ধারণ করতে ফাইল সিস্টেম ব্যবহার করে তা বোঝা।',
        pointsEn: [
          'page.tsx and layout.tsx files',
          'Nested Routing',
          'Link component for navigation',
          'Dynamic Routes [id]'
        ],
        pointsBn: [
          'page.tsx এবং layout.tsx ফাইল',
          'নেস্টেড রাউটিং',
          'ন্যাভিগেশনের জন্য Link কম্পোনেন্ট',
          'ডায়নামিক রাউট [id]'
        ],
        code: `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Reading: {params.slug}</h1>
}`,
        language: 'javascript'
      },
      {
        level: 'Intermediate',
        titleEn: 'Server vs Client Components',
        titleBn: 'সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট',
        contentEn: 'The core of modern Next.js development. Knowing when to use which.',
        contentBn: 'আধুনিক নেক্সট.জেএস ডেভেলপমেন্টের মূল অংশ। কোনটি কখন ব্যবহার করতে হবে তা জানা।',
        pointsEn: [
          'Default are Server Components',
          '"use client" directive',
          'Fetching data in Server Components',
          'Interleaving components'
        ],
        pointsBn: [
          'ডিফল্ট হিসেবে সার্ভার কম্পোনেন্ট',
          '"use client" ডিরেক্টিভ',
          'সার্ভার কম্পোনেন্টে ডেটা ফেচিং',
          'কম্পোনেন্ট ইন্টারলিভিং'
        ],
        code: `// Server Component (Default)
async function ProductList() {
  const products = await fetchProducts();
  return <div>{/* render products */}</div>
}`,
        language: 'javascript'
      }
    ]
  },
  typescript: {
    id: 'typescript',
    titleEn: 'TypeScript',
    titleBn: 'টাইপস্ক্রিপ্ট',
    icon: '🔷',
    descriptionEn: 'JavaScript with syntax for types. Build more reliable and maintainable apps.',
    descriptionBn: 'টাইপ সিনট্যাক্স সহ জাভাস্ক্রিপ্ট। আরও নির্ভরযোগ্য এবং রক্ষণাবেক্ষণযোগ্য অ্যাপ তৈরি করুন।',
    sections: [
      {
        level: 'Basic',
        titleEn: 'Types & Interfaces',
        titleBn: 'টাইপস ও ইন্টারফেস',
        contentEn: 'The foundation of TypeScript: defining the shape of your data.',
        contentBn: 'টাইপস্ক্রিপ্টের ভিত্তি: আপনার ডেটার আকার নির্ধারণ করা।',
        pointsEn: [
          'Primitive Types (string, number, boolean)',
          'Interfaces vs Type Aliases',
          'Optional and Readonly properties',
          'Union and Intersection types'
        ],
        pointsBn: [
          'প্রিমিটিভ টাইপস (string, number, boolean)',
          'ইন্টারফেস বনাম টাইপ অ্যালিয়াস',
          'অপশনাল এবং রিড-অনলি প্রোপার্টি',
          'ইউনিয়ন এবং ইন্টারসেকশন টাইপস'
        ],
        code: `interface User {
  id: number;
  name: string;
  email?: string; // Optional
}

type ID = string | number;`,
        language: 'typescript'
      }
    ]
  },
  systemdesign: {
    id: 'systemdesign',
    titleEn: 'System Design',
    titleBn: 'সিস্টেম ডিজাইন',
    icon: '🏗️',
    descriptionEn: 'Designing scalable and distributed systems for modern web applications.',
    descriptionBn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনের জন্য স্কেলেবল এবং ডিস্ট্রিবিউটেড সিস্টেম ডিজাইন করা।',
    sections: [
      {
        level: 'Advanced',
        titleEn: 'Scalability & Load Balancing',
        titleBn: 'স্কেলেবিলিটি ও লোড ব্যালেন্সিং',
        contentEn: 'How to handle millions of users by scaling horizontally and using load balancers.',
        contentBn: 'কীভাবে হরাইজন্টাল স্কেলিং এবং লোড ব্যালেন্সার ব্যবহার করে লক্ষ লক্ষ ইউজার হ্যান্ডেল করা যায়।',
        pointsEn: [
          'Vertical vs Horizontal Scaling',
          'Load Balancer Algorithms (Round Robin, etc.)',
          'Database Sharding',
          'Caching Strategies (Redis, Memcached)'
        ],
        pointsBn: [
          'ভার্টিকাল বনাম হরাইজন্টাল স্কেলিং',
          'লোড ব্যালেন্সার অ্যালগরিদম',
          'ডেটাবেস শার্ডিং',
          'ক্যাশিং স্ট্র্যাটেজি (Redis, Memcached)'
        ],
        code: `// Conceptual Load Balancer
function loadBalancer(requests, servers) {
  let index = 0;
  return requests.map(req => {
    const server = servers[index];
    index = (index + 1) % servers.length;
    return server.handle(req);
  });
}`,
        language: 'javascript'
      }
    ]
  }
};
