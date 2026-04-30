import { TopicDetail } from '../../types';

export const reactTopic: TopicDetail = {
  id: 'react',
  titleEn: 'React',
  titleBn: 'রিঅ্যাক্ট',
  icon: '⚛️',
  descriptionEn: 'The most popular library for building modern user interfaces. Master component-based architecture, state management, and the React ecosystem.',
  descriptionBn: 'আধুনিক ইউজার ইন্টারফেস তৈরির সবচেয়ে জনপ্রিয় লাইব্রেরি। কম্পোনেন্ট-ভিত্তিক আর্কিটেকচার, স্টেট ম্যানেজমেন্ট এবং রিঅ্যাক্ট ইকোসিস্টেম আয়ত্ত করুন।',
  sections: [
    {
      level: 'Basic',
      titleEn: 'Components, Props & JSX',
      titleBn: 'কম্পোনেন্টস, প্রপস এবং JSX',
      contentEn: 'React applications are built from isolated pieces of UI called components. JSX allows you to write HTML-like markup inside JavaScript.',
      contentBn: 'রিঅ্যাক্ট অ্যাপ্লিকেশনগুলো কম্পোনেন্ট নামক UI এর আলাদা অংশ থেকে তৈরি করা হয়। JSX আপনাকে জাভাস্ক্রিপ্টের মধ্যে HTML এর মতো মার্কআপ লিখতে দেয়।',
      pointsEn: [
        'Understanding JSX syntax and its rules (className, closing tags).',
        'Functional Components vs Class Components (focus on functional).',
        'Passing data downwards using Props.',
        'Rendering lists using .map() and the importance of keys.',
        'Conditional rendering (&&, ternary operators).'
      ],
      pointsBn: [
        'JSX সিনট্যাক্স এবং এর নিয়মগুলো বোঝা (className, ক্লোজিং ট্যাগ)।',
        'ফাংশনাল কম্পোনেন্ট বনাম ক্লাস কম্পোনেন্ট (ফাংশনালের উপর জোর দিন)।',
        'প্রপস ব্যবহার করে নিচের দিকে ডেটা পাঠানো।',
        '.map() ব্যবহার করে তালিকা রেন্ডার করা এবং key এর গুরুত্ব।',
        'কন্ডিশনাল রেন্ডারিং (&&, টার্নারি অপারেটর)।'
      ],
      code: `interface UserCardProps {
  name: string;
  role: string;
  isActive?: boolean;
}

export function UserCard({ name, role, isActive = false }: UserCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      {isActive && <span className="text-green-500 text-sm">Online</span>}
    </div>
  );
}`,
      language: 'tsx'
    },
    {
      level: 'Intermediate',
      titleEn: 'State Management & Hooks',
      titleBn: 'স্টেট ম্যানেজমেন্ট এবং হুকস',
      contentEn: 'Hooks allow functional components to have state and lifecycle methods. Mastering hooks is essential for building dynamic React applications.',
      contentBn: 'হুকস ফাংশনাল কম্পোনেন্টগুলোকে স্টেট এবং লাইফসাইকেল মেথড ব্যবহার করতে দেয়। ডায়নামিক রিঅ্যাক্ট অ্যাপ্লিকেশন তৈরির জন্য হুকস আয়ত্ত করা অপরিহার্য।',
      pointsEn: [
        'useState: Managing local component state.',
        'useEffect: Handling side effects (fetching data, subscriptions).',
        'useRef: Accessing DOM elements and keeping mutable state without re-rendering.',
        'useMemo and useCallback: Optimizing performance by memoizing values and functions.',
        'Creating Custom Hooks to extract reusable logic.'
      ],
      pointsBn: [
        'useState: লোকাল কম্পোনেন্ট স্টেট পরিচালনা করা।',
        'useEffect: সাইড ইফেক্ট হ্যান্ডলিং (ডেটা ফেচ করা, সাবস্ক্রিপশন)।',
        'useRef: DOM এলিমেন্ট অ্যাক্সেস করা এবং রি-রেন্ডার না করে পরিবর্তনযোগ্য স্টেট রাখা।',
        'useMemo এবং useCallback: ভ্যালু এবং ফাংশন মেমোইজ করে পারফরম্যান্স অপ্টিমাইজ করা।',
        'পুনর্ব্যবহারযোগ্য লজিক বের করতে কাস্টম হুকস তৈরি করা।'
      ],
      code: `import { useState, useEffect } from 'react';

// Custom Hook Example
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return size;
}`,
      language: 'typescript'
    },
    {
      level: 'Advanced',
      titleEn: 'Context API & Global State',
      titleBn: 'Context API এবং গ্লোবাল স্টেট',
      contentEn: 'As applications grow, passing props deeply (prop drilling) becomes unmanageable. Learn to use Context API and global state management libraries.',
      contentBn: 'অ্যাপ্লিকেশন বড় হওয়ার সাথে সাথে, গভীরভাবে প্রপস পাঠানো (প্রপ ড্রিলিং) অবাস্তব হয়ে ওঠে। Context API এবং গ্লোবাল স্টেট ম্যানেজমেন্ট লাইব্রেরিগুলো ব্যবহার করতে শিখুন।',
      pointsEn: [
        'The Context API (createContext, useContext, Provider).',
        'When to use Context vs Redux/Zustand.',
        'Using Redux Toolkit (RTK) for robust global state.',
        'RTK Query or React Query for asynchronous server state management.',
        'Optimistic UI updates and cache invalidation.'
      ],
      pointsBn: [
        'Context API (createContext, useContext, Provider)।',
        'কখন Context বনাম Redux/Zustand ব্যবহার করবেন।',
        'মজবুত গ্লোবাল স্টেটের জন্য Redux Toolkit (RTK) ব্যবহার করা।',
        'অ্যাসিনক্রোনাস সার্ভার স্টেট ম্যানেজমেন্টের জন্য RTK Query বা React Query।',
        'অপ্টিমিস্টিক UI আপডেট এবং ক্যাশ ইনভ্যালিডেশন।'
      ],
      code: `// Theme Context Example
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{theme: Theme, toggleTheme: () => void} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`,
      language: 'tsx'
    }
  ]
};
