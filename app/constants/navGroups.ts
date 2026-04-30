import { NavGroup, NavItem } from '../types';

export const NAV_GROUPS: NavGroup[] = [
  {
    cat: '🚀 Get Started / শুরু',
    items: [
      { id: 'home', icon: '🏠', en: 'Home', bn: 'হোম' },
      { id: 'roadmap', icon: '🗺️', en: 'Roadmap', bn: 'রোডম্যাপ' },
    ],
  },
  {
    cat: '📌 Foundation / ভিত্তি',
    items: [
      { id: 'html', icon: '🎨', en: 'HTML & CSS', bn: 'HTML ও CSS' },
      { id: 'js', icon: '💛', en: 'JavaScript', bn: 'জাভাস্ক্রিপ্ট' },
    ],
  },
  {
    cat: '⚛️ Core Skills / মূল দক্ষতা',
    items: [
      { id: 'react', icon: '⚛️', en: 'React', bn: 'রিঅ্যাক্ট' },
      { id: 'nextjs', icon: '▲', en: 'Next.js', bn: 'নেক্সট.জেএস' },
      { id: 'typescript', icon: '🔷', en: 'TypeScript', bn: 'টাইপস্ক্রিপ্ট' },
    ],
  },
  {
    cat: '🔥 Advanced / অ্যাডভান্সড',
    items: [
      { id: 'websocket', icon: '🔌', en: 'WebSocket', bn: 'ওয়েবসকেট' },
      {
        id: 'gsap',
        icon: '✨',
        en: 'GSAP & Animation',
        bn: 'GSAP ও অ্যানিমেশন',
      },
      { id: 'performance', icon: '🚀', en: 'Performance', bn: 'পারফরম্যান্স' },
      { id: 'testing', icon: '🧪', en: 'Testing', bn: 'টেস্টিং' },
    ],
  },
  {
    cat: '👑 Senior Level / সিনিয়র',
    items: [
      {
        id: 'systemdesign',
        icon: '🏗️',
        en: 'System Design',
        bn: 'সিস্টেম ডিজাইন',
      },
      { id: 'security', icon: '🔒', en: 'Web Security', bn: 'ওয়েব সিকিউরিটি' },
      {
        id: 'devops',
        icon: '⚙️',
        en: 'DevOps & Build Tools',
        bn: 'DevOps ও বিল্ড টুলস',
      },
      {
        id: 'interview',
        icon: '🎯',
        en: 'Interview Prep',
        bn: 'ইন্টারভিউ প্রস্তুতি',
      },
    ],
  },
];

export const ALL_ITEMS: NavItem[] = NAV_GROUPS.flatMap(g => g.items);
