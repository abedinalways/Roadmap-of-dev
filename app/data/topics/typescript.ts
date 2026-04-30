import { TopicDetail } from '../../types';

export const typescriptTopic: TopicDetail = {
  id: 'typescript',
  titleEn: 'TypeScript',
  titleBn: 'টাইপস্ক্রিপ্ট',
  icon: '🔷',
  descriptionEn: 'A strongly typed programming language that builds on JavaScript. It helps catch errors early and provides excellent developer tooling and autocomplete.',
  descriptionBn: 'একটি স্ট্রংলি টাইপড প্রোগ্রামিং ভাষা যা জাভাস্ক্রিপ্টের উপর তৈরি। এটি দ্রুত এরর ধরতে সাহায্য করে এবং চমৎকার ডেভেলপার টুলিং ও অটো-কমপ্লিট প্রদান করে।',
  sections: [
    {
      level: 'Basic',
      titleEn: 'Types, Interfaces & Basic Typings',
      titleBn: 'টাইপস, ইন্টারফেস এবং বেসিক টাইপিং',
      contentEn: 'The core of TypeScript is describing the shape of values. You can define custom types and interfaces to structure your data.',
      contentBn: 'টাইপস্ক্রিপ্টের মূল বিষয় হলো ভ্যালুগুলোর আকার বর্ণনা করা। আপনি ডেটা সাজাতে কাস্টম টাইপ এবং ইন্টারফেস সংজ্ঞায়িত করতে পারেন।',
      pointsEn: [
        'Primitive Types: string, number, boolean, array (string[]), tuple.',
        'Interfaces: defining object shapes and extending them.',
        'Type Aliases: defining custom types, including unions and intersections.',
        'Optional properties (?) and readonly modifier.',
        'Typing function parameters and return types.'
      ],
      pointsBn: [
        'প্রিমিটিভ টাইপস: string, number, boolean, array (string[]), tuple।',
        'ইন্টারফেস: অবজেক্টের আকার নির্ধারণ এবং সেগুলো প্রসারিত করা।',
        'টাইপ অ্যালিয়াস: ইউনিয়ন এবং ইন্টারসেকশন সহ কাস্টম টাইপ সংজ্ঞায়িত করা।',
        'অপশনাল প্রোপার্টি (?) এবং readonly মডিফায়ার।',
        'ফাংশন প্যারামিটার এবং রিটার্ন টাইপগুলোর টাইপিং।'
      ],
      code: `// Interface Definition
interface User {
  readonly id: number; // Cannot be modified after creation
  name: string;
  email?: string; // Optional property
}

// Extending Interfaces
interface AdminUser extends User {
  role: 'admin' | 'superadmin'; // String literal union type
}

// Typing a Function
function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}`,
      language: 'typescript'
    },
    {
      level: 'Intermediate',
      titleEn: 'Generics & Utility Types',
      titleBn: 'জেনেরিকস এবং ইউটিলিটি টাইপস',
      contentEn: 'Generics allow you to create reusable components that can work over a variety of types rather than a single one. Utility types provide built-in transformations.',
      contentBn: 'জেনেরিকস আপনাকে এমন পুনর্ব্যবহারযোগ্য কম্পোনেন্ট তৈরি করতে দেয় যা একটির পরিবর্তে বিভিন্ন ধরণের টাইপের উপর কাজ করতে পারে। ইউটিলিটি টাইপগুলো বিল্ট-ইন ট্রান্সফর্মেশন প্রদান করে।',
      pointsEn: [
        'Introduction to Generics <T>.',
        'Using Generics in Functions, Interfaces, and Classes.',
        'Utility Types: Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>.',
        'Type Assertions (as) and the "unknown" type (safer than "any").'
      ],
      pointsBn: [
        'জেনেরিকস <T> এর পরিচিতি।',
        'ফাংশন, ইন্টারফেস এবং ক্লাসে জেনেরিকস ব্যবহার করা।',
        'ইউটিলিটি টাইপস: Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>।',
        'টাইপ অ্যাসারশন (as) এবং "unknown" টাইপ ("any" এর চেয়ে নিরাপদ)।'
      ],
      code: `// Generic API Response Interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Specific Data Type
interface Product {
  id: number;
  title: string;
  price: number;
}

// Usage of Generics
async function fetchProduct(id: number): Promise<ApiResponse<Product>> {
  const res = await fetch(\`/api/products/\${id}\`);
  return res.json();
}

// Utility Types: Omit id for creating a new product
type CreateProductInput = Omit<Product, 'id'>;`,
      language: 'typescript'
    },
    {
      level: 'Advanced',
      titleEn: 'Advanced Typings & Mapped Types',
      titleBn: 'অ্যাডভান্সড টাইপিং এবং ম্যাপড টাইপস',
      contentEn: 'For complex applications, TypeScript offers powerful type manipulation tools to derive types automatically, keeping your code DRY and type-safe.',
      contentBn: 'জটিল অ্যাপ্লিকেশনের জন্য, টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে টাইপ ডেরাইভ করার জন্য শক্তিশালী টাইপ ম্যানিপুলেশন টুল অফার করে, যা আপনার কোডকে DRY এবং টাইপ-সেফ রাখে।',
      pointsEn: [
        'keyof operator to extract keys from an object type.',
        'typeof operator to create a type from an existing variable/object.',
        'Mapped Types: iterating over keys to create new types.',
        'Conditional Types (T extends U ? X : Y).',
        'Infer keyword for extracting types in conditional types.'
      ],
      pointsBn: [
        'অবজেক্ট টাইপ থেকে কী (keys) বের করার জন্য keyof অপারেটর।',
        'বিদ্যমান ভেরিয়েবল/অবজেক্ট থেকে টাইপ তৈরি করতে typeof অপারেটর।',
        'ম্যাপড টাইপস: নতুন টাইপ তৈরি করতে কীগুলোর (keys) উপর পুনরাবৃত্তি করা।',
        'কন্ডিশনাল টাইপস (T extends U ? X : Y)।',
        'কন্ডিশনাল টাইপে টাইপ বের করার জন্য Infer কিওয়ার্ড।'
      ],
      code: `const APP_CONFIG = {
  theme: 'dark',
  version: '2.0',
  debug: true
};

// Derive type directly from the object
type AppConfig = typeof APP_CONFIG;

// Create a type representing all the keys
type ConfigKey = keyof AppConfig; // "theme" | "version" | "debug"

// Mapped Type: Make all properties nullable
type NullableConfig = {
  [K in keyof AppConfig]: AppConfig[K] | null;
};

// Conditional Type Example
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<"hello">; // true
type Test2 = IsString<number>;  // false`,
      language: 'typescript'
    }
  ]
};
