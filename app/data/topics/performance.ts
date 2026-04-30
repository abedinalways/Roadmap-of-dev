import { TopicDetail } from '../../types';

export const performanceTopic: TopicDetail = {
  id: 'performance',
  titleEn: 'Web Performance',
  titleBn: 'ওয়েব পারফরম্যান্স',
  icon: '🚀',
  descriptionEn: 'Optimize your web applications for speed and efficiency. Learn about Core Web Vitals, lazy loading, and asset optimization to retain users.',
  descriptionBn: 'গতি এবং দক্ষতার জন্য আপনার ওয়েব অ্যাপ্লিকেশনগুলোকে অপ্টিমাইজ করুন। ব্যবহারকারী ধরে রাখতে কোর ওয়েব ভাইটাল, লেজি লোডিং এবং অ্যাসেট অপ্টিমাইজেশন সম্পর্কে জানুন।',
  sections: [
    {
      level: 'Intermediate',
      titleEn: 'Core Web Vitals & Metrics',
      titleBn: 'কোর ওয়েব ভাইটাল এবং মেট্রিক্স',
      contentEn: 'Google uses Core Web Vitals to measure user experience. Understanding these metrics is the first step to improving your site\'s SEO and performance.',
      contentBn: 'ইউজার এক্সপেরিয়েন্স পরিমাপ করতে গুগল কোর ওয়েব ভাইটাল ব্যবহার করে। এই মেট্রিকগুলো বোঝা আপনার সাইটের SEO এবং পারফরম্যান্স উন্নত করার প্রথম পদক্ষেপ।',
      pointsEn: [
        'LCP (Largest Contentful Paint): Loading performance (should be < 2.5s).',
        'INP (Interaction to Next Paint): Responsiveness and interactivity.',
        'CLS (Cumulative Layout Shift): Visual stability (prevent content jumping).',
        'Using Lighthouse, Chrome DevTools, and PageSpeed Insights for auditing.'
      ],
      pointsBn: [
        'LCP (Largest Contentful Paint): লোডিং পারফরম্যান্স (< 2.5s হওয়া উচিত)।',
        'INP (Interaction to Next Paint): রেসপনসিভনেস এবং ইন্টারঅ্যাক্টিভিটি।',
        'CLS (Cumulative Layout Shift): ভিজ্যুয়াল স্ট্যাবিলিটি (কন্টেন্ট লাফানো রোধ করা)।',
        'অডিটিং এর জন্য Lighthouse, Chrome DevTools এবং PageSpeed Insights ব্যবহার করা।'
      ],
      code: `// Measuring Core Web Vitals in Next.js
// app/layout.tsx
import { NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log({
      name: metric.name,
      value: Math.round(metric.value * (metric.name === 'CLS' ? 1000 : 1)),
      id: metric.id,
    });
  }
}`,
      language: 'typescript'
    },
    {
      level: 'Advanced',
      titleEn: 'Optimization Techniques',
      titleBn: 'অপ্টিমাইজেশন টেকনিক',
      contentEn: 'Implement practical strategies to reduce bundle size, optimize assets, and deliver content faster to the user\'s screen.',
      contentBn: 'বান্ডেলের আকার কমাতে, অ্যাসেট অপ্টিমাইজ করতে এবং ব্যবহারকারীর স্ক্রিনে দ্রুত কন্টেন্ট পৌঁছে দিতে বাস্তবসম্মত কৌশলগুলো প্রয়োগ করুন।',
      pointsEn: [
        'Code Splitting and Lazy Loading (React.lazy, Next.js dynamic imports).',
        'Image Optimization: WebP/AVIF formats, responsive sizes (srcset), and Next.js <Image>.',
        'Font Optimization: Preloading, font-display: swap, and next/font.',
        'Minification, Tree-Shaking, and removing dead code.',
        'Caching strategies (Service Workers, CDN, HTTP Cache Headers).'
      ],
      pointsBn: [
        'কোড স্প্লিটিং এবং লেজি লোডিং (React.lazy, Next.js ডায়নামিক ইমপোর্ট)।',
        'ইমেজ অপ্টিমাইজেশন: WebP/AVIF ফরম্যাট, রেসপনসিভ সাইজ (srcset) এবং Next.js <Image>।',
        'ফন্ট অপ্টিমাইজেশন: প্রিলোডিং, font-display: swap, এবং next/font।',
        'মিনিফিকেশন, ট্রি-শেকিং এবং ডেড কোড মুছে ফেলা।',
        'ক্যাশিং স্ট্র্যাটেজি (সার্ভিস ওয়ার্কার, CDN, HTTP ক্যাশ হেডার)।'
      ],
      code: `// Next.js Dynamic Import (Lazy Loading a heavy component)
import dynamic from 'next/dynamic';

// The chart library will only be loaded when this component renders
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Disable server-side rendering if it relies on window
});

export default function Dashboard() {
  return (
    <div>
      <h2>Analytics</h2>
      <HeavyChart data={chartData} />
    </div>
  );
}`,
      language: 'tsx'
    }
  ]
};
