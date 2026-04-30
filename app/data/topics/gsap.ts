import { TopicDetail } from '../../types';

export const gsapTopic: TopicDetail = {
  id: 'gsap',
  titleEn: 'GSAP & Animation',
  titleBn: 'GSAP ও অ্যানিমেশন',
  icon: '✨',
  descriptionEn: 'Elevate your web applications with professional, high-performance animations using the GreenSock Animation Platform (GSAP) and modern CSS.',
  descriptionBn: 'গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP) এবং আধুনিক CSS ব্যবহার করে প্রফেশনাল, উচ্চ-পারফরম্যান্স অ্যানিমেশন দিয়ে আপনার ওয়েব অ্যাপ্লিকেশনগুলোকে আরও উন্নত করুন।',
  sections: [
    {
      level: 'Basic',
      titleEn: 'CSS Animations vs JS Animations',
      titleBn: 'CSS অ্যানিমেশন বনাম JS অ্যানিমেশন',
      contentEn: 'Before using complex libraries, understand the basics of web animation. CSS transitions are great for simple hovers, but JS libraries like GSAP shine for complex, timeline-based sequences.',
      contentBn: 'জটিল লাইব্রেরি ব্যবহার করার আগে, ওয়েব অ্যানিমেশনের মূল বিষয়গুলো বুঝুন। সাধারণ হোভারের জন্য CSS ট্রানজিশন দারুণ, কিন্তু জটিল, টাইমলাইন-ভিত্তিক সিকোয়েন্সের জন্য GSAP এর মতো JS লাইব্রেরিগুলো সেরা।',
      pointsEn: [
        'CSS Transitions: transition-property, duration, timing-function, delay.',
        'CSS Keyframes: @keyframes for looping or multi-step animations.',
        'When to use CSS (simple, declarative) vs JS (complex, physics-based, scroll-triggered).',
        'Hardware acceleration: Animating transform and opacity for smooth 60fps.'
      ],
      pointsBn: [
        'CSS ট্রানজিশন: transition-property, duration, timing-function, delay।',
        'CSS কিফ্রেমস: লুপিং বা মাল্টি-স্টেপ অ্যানিমেশনের জন্য @keyframes।',
        'কখন CSS (সাধারণ, ডিক্লারেটিভ) বনাম JS (জটিল, ফিজিক্স-ভিত্তিক, স্ক্রল-ট্রিগারড) ব্যবহার করবেন।',
        'হার্ডওয়্যার অ্যাকসিলারেশন: মসৃণ 60fps এর জন্য transform এবং opacity অ্যানিমেট করা।'
      ],
      code: `/* Smooth CSS Hover Animation */
.card {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}`,
      language: 'css'
    },
    {
      level: 'Intermediate',
      titleEn: 'GSAP Core & Timelines',
      titleBn: 'GSAP কোর এবং টাইমলাইন',
      contentEn: 'GSAP (GreenSock Animation Platform) is the industry standard for JavaScript animation. It allows you to animate almost any CSS property, SVG, or canvas object with precise control.',
      contentBn: 'GSAP (গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম) জাভাস্ক্রিপ্ট অ্যানিমেশনের জন্য ইন্ডাস্ট্রি স্ট্যান্ডার্ড। এটি আপনাকে নিখুঁত নিয়ন্ত্রণের সাথে প্রায় যেকোনো CSS প্রোপার্টি, SVG, বা ক্যানভাস অবজেক্ট অ্যানিমেট করতে দেয়।',
      pointsEn: [
        'GSAP Tweens: gsap.to(), gsap.from(), gsap.fromTo().',
        'Eases: Power1.easeOut, Bounce.ease, Elastic.ease.',
        'GSAP Timelines (gsap.timeline()) for chaining animations sequentially.',
        'Using GSAP with React: The useGSAP() hook and Refs.'
      ],
      pointsBn: [
        'GSAP টুইনস: gsap.to(), gsap.from(), gsap.fromTo()।',
        'ইজ (Eases): Power1.easeOut, Bounce.ease, Elastic.ease।',
        'অ্যানিমেশনগুলোকে পর্যায়ক্রমে সাজানোর জন্য GSAP টাইমলাইন (gsap.timeline())।',
        'React এর সাথে GSAP ব্যবহার: useGSAP() হুক এবং Refs।'
      ],
      code: `import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Create a timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-title", { y: 50, opacity: 0, duration: 1 })
      .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".hero-btn", { scale: 0.8, opacity: 0, stagger: 0.2 }, "-=0.3");
  }, { scope: container });

  return (
    <div ref={container}>
      <h1 className="hero-title">Welcome</h1>
      <p className="hero-subtitle">To the future</p>
      <button className="hero-btn">Start</button>
    </div>
  );
}`,
      language: 'tsx'
    },
    {
      level: 'Advanced',
      titleEn: 'ScrollTrigger & Advanced Effects',
      titleBn: 'স্ক্রলট্রিগার এবং অ্যাডভান্সড ইফেক্টস',
      contentEn: 'GSAP\'s ScrollTrigger plugin lets you trigger animations based on the scroll position. It is essential for modern, storytelling web experiences.',
      contentBn: 'GSAP এর ScrollTrigger প্লাগইন আপনাকে স্ক্রল পজিশনের উপর ভিত্তি করে অ্যানিমেশন ট্রিগার করতে দেয়। এটি আধুনিক, স্টোরিটেলিং ওয়েব অভিজ্ঞতার জন্য অপরিহার্য।',
      pointsEn: [
        'Registering Plugins: gsap.registerPlugin(ScrollTrigger).',
        'Pinning elements while scrolling (pin: true).',
        'Scrubbing animations (scrub: true) linking animation progress directly to scrollbar.',
        'Parallax effects and SVG path drawing animations.'
      ],
      pointsBn: [
        'প্লাগইন রেজিস্টার করা: gsap.registerPlugin(ScrollTrigger)।',
        'স্ক্রল করার সময় এলিমেন্ট পিন করা (pin: true)।',
        'অ্যানিমেশন প্রগ্রেসকে সরাসরি স্ক্রলবারের সাথে লিঙ্ক করতে স্ক্রাবিং অ্যানিমেশন (scrub: true)।',
        'প্যারালাক্স ইফেক্ট এবং SVG পাথ ড্রয়িং অ্যানিমেশন।'
      ],
      code: `import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate element as it enters the viewport
gsap.to(".fade-in-section", {
  scrollTrigger: {
    trigger: ".fade-in-section",
    start: "top 80%", // trigger when top of element hits 80% of viewport
    end: "bottom 20%",
    toggleActions: "play none none reverse" 
  },
  opacity: 1,
  y: 0,
  duration: 1
});`,
      language: 'javascript'
    }
  ]
};
