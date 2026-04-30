import { TopicDetail } from '../../types';

export const nextjsTopic: TopicDetail = {
  id: 'nextjs',
  titleEn: 'Next.js',
  titleBn: 'নেক্সট.জেএস',
  icon: '▲',
  descriptionEn: 'The React Framework for the Web. Master the App Router, Server Components, and full-stack capabilities to build production-ready applications.',
  descriptionBn: 'ওয়েবের জন্য রিঅ্যাক্ট ফ্রেমওয়ার্ক। প্রোডাকশন-রেডি অ্যাপ্লিকেশন তৈরি করতে অ্যাপ রাউটার, সার্ভার কম্পোনেন্ট এবং ফুল-স্ট্যাক ক্ষমতাগুলো আয়ত্ত করুন।',
  sections: [
    {
      level: 'Basic',
      titleEn: 'App Router & Routing Patterns',
      titleBn: 'অ্যাপ রাউটার এবং রাউটিং প্যাটার্ন',
      contentEn: 'Next.js uses a file-system based router built on top of Server Components. Understanding the App Router directory structure is the first step.',
      contentBn: 'নেক্সট.জেএস সার্ভার কম্পোনেন্টের উপর ভিত্তি করে একটি ফাইল-সিস্টেম ভিত্তিক রাউটার ব্যবহার করে। অ্যাপ রাউটার ডিরেক্টরি কাঠামো বোঝা প্রথম পদক্ষেপ।',
      pointsEn: [
        'Defining routes using page.tsx and layout.tsx.',
        'Nested routes and dynamic segments ([id]).',
        'Client-side navigation with the <Link> component.',
        'Loading UI (loading.tsx) and Error handling (error.tsx).',
        'Route Groups ((group)) for organizing without affecting the URL.'
      ],
      pointsBn: [
        'page.tsx এবং layout.tsx ব্যবহার করে রাউট সংজ্ঞায়িত করা।',
        'নেস্টেড রাউট এবং ডায়নামিক সেগমেন্ট ([id])।',
        '<Link> কম্পোনেন্টের মাধ্যমে ক্লায়েন্ট-সাইড নেভিগেশন।',
        'লোডিং UI (loading.tsx) এবং এরর হ্যান্ডলিং (error.tsx)।',
        'URL কে প্রভাবিত না করে সাজানোর জন্য রাউট গ্রুপ ((group))।'
      ],
      code: `// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">Dashboard Nav</aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

// app/dashboard/users/[id]/page.tsx
export default function UserProfile({ params }: { params: { id: string } }) {
  return <h1>Viewing Profile for User: {params.id}</h1>;
}`,
      language: 'tsx'
    },
    {
      level: 'Intermediate',
      titleEn: 'Server vs Client Components',
      titleBn: 'সার্ভার বনাম ক্লায়েন্ট কম্পোনেন্ট',
      contentEn: 'React Server Components (RSC) allow you to write UI that can be rendered and optionally cached on the server. Knowing when to use "use client" is crucial.',
      contentBn: 'রিঅ্যাক্ট সার্ভার কম্পোনেন্ট (RSC) আপনাকে এমন UI লিখতে দেয় যা সার্ভারে রেন্ডার এবং ঐচ্ছিকভাবে ক্যাশ করা যায়। কখন "use client" ব্যবহার করতে হবে তা জানা অত্যন্ত গুরুত্বপূর্ণ।',
      pointsEn: [
        'By default, all components inside App Router are Server Components.',
        'Server Components cannot use hooks (useState, useEffect) or browser APIs.',
        'Use the "use client" directive at the top of a file to make it a Client Component.',
        'Passing data from Server to Client Components (Props must be serializable).',
        'Interleaving: You can pass Server Components as children to Client Components.'
      ],
      pointsBn: [
        'ডিফল্টভাবে, অ্যাপ রাউটারের ভিতরের সমস্ত কম্পোনেন্ট সার্ভার কম্পোনেন্ট।',
        'সার্ভার কম্পোনেন্ট হুক (useState, useEffect) বা ব্রাউজার API ব্যবহার করতে পারে না।',
        'ক্লায়েন্ট কম্পোনেন্ট তৈরি করতে ফাইলের শীর্ষে "use client" ডিরেক্টিভ ব্যবহার করুন।',
        'সার্ভার থেকে ক্লায়েন্ট কম্পোনেন্টে ডেটা পাঠানো (প্রপস সিরিয়ালাইজেবল হতে হবে)।',
        'ইন্টারলিভিং: আপনি সার্ভার কম্পোনেন্টগুলোকে ক্লায়েন্ট কম্পোনেন্টের চিলড্রেন হিসেবে পাঠাতে পারেন।'
      ],
      code: `// Server Component (Default)
import ClientInteractivity from './ClientInteractivity';

export default async function ProductPage() {
  // Direct database query or fetch in Server Component!
  const product = await fetch('https://api.../product/1').then(res => res.json());
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Pass serializable data to Client Component */}
      <ClientInteractivity productId={product.id} price={product.price} />
    </div>
  );
}`,
      language: 'tsx'
    },
    {
      level: 'Advanced',
      titleEn: 'Data Fetching & Server Actions',
      titleBn: 'ডেটা ফেচিং এবং সার্ভার অ্যাকশন',
      contentEn: 'Next.js provides powerful tools for fetching, caching, and mutating data directly on the server, removing the need for separate API routes in many cases.',
      contentBn: 'নেক্সট.জেএস সার্ভারে সরাসরি ডেটা ফেচ, ক্যাশ এবং মিউটেট করার জন্য শক্তিশালী টুল প্রদান করে, যা অনেক ক্ষেত্রে আলাদা API রাউটের প্রয়োজনীয়তা দূর করে।',
      pointsEn: [
        'Fetching data on the server with extended fetch() API.',
        'Caching and Revalidating data (Time-based ISR or On-Demand).',
        'Server Actions: Asynchronous functions executed on the server, called from client.',
        'Form handling and mutations using Server Actions without JavaScript enabled.',
        'useFormStatus and useOptimistic hooks for better UX during mutations.'
      ],
      pointsBn: [
        'এক্সটেন্ডেড fetch() API দিয়ে সার্ভারে ডেটা ফেচ করা।',
        'ডেটা ক্যাশিং এবং রিভ্যালিডেটিং (সময়-ভিত্তিক ISR বা অন-ডিমান্ড)।',
        'সার্ভার অ্যাকশন: সার্ভারে এক্সিকিউট হওয়া অ্যাসিনক্রোনাস ফাংশন, যা ক্লায়েন্ট থেকে কল করা হয়।',
        'জাভাস্ক্রিপ্ট ছাড়াই সার্ভার অ্যাকশন ব্যবহার করে ফর্ম হ্যান্ডলিং এবং মিউটেশন।',
        'মিউটেশনের সময় ভালো UX এর জন্য useFormStatus এবং useOptimistic হুকস।'
      ],
      code: `// app/actions.ts (Server Actions)
'use server'

import { revalidatePath } from 'next/cache';
import db from '@/lib/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.post.create({ data: { title, content } });
  
  // Revalidate the cache for the posts page
  revalidatePath('/posts');
}

// app/posts/new/page.tsx (Client Component)
'use client'
import { createPost } from '@/app/actions';

export default function NewPostForm() {
  return (
    <form action={createPost}>
      <input type="text" name="title" required />
      <textarea name="content" required />
      <button type="submit">Submit Post</button>
    </form>
  );
}`,
      language: 'tsx'
    }
  ]
};
