import { TopicDetail } from '../../types';

export const devopsTopic: TopicDetail = {
  id: 'devops',
  titleEn: 'DevOps & Build Tools',
  titleBn: 'DevOps ও বিল্ড টুলস',
  icon: '⚙️',
  descriptionEn: 'Bridge the gap between development and operations. Learn CI/CD, containerization, and modern build tools for seamless deployments.',
  descriptionBn: 'ডেভেলপমেন্ট এবং অপারেশনের মধ্যে সেতুবন্ধন। নির্বিঘ্ন ডেপ্লয়মেন্টের জন্য CI/CD, কন্টেইনারাইজেশন এবং আধুনিক বিল্ড টুলস শিখুন।',
  sections: [
    {
      level: 'Advanced',
      titleEn: 'Containerization & Docker',
      titleBn: 'কন্টেইনারাইজেশন এবং ডকার',
      contentEn: 'Docker packages your application and its dependencies into a standardized unit (container) for software development, ensuring it runs identically everywhere.',
      contentBn: 'ডকার আপনার অ্যাপ্লিকেশন এবং এর ডিপেন্ডেন্সিগুলোকে সফ্টওয়্যার ডেভেলপমেন্টের জন্য একটি প্রমিত ইউনিটে (কন্টেইনার) প্যাকেজ করে, যা নিশ্চিত করে এটি সব জায়গায় একইভাবে চলবে।',
      pointsEn: [
        'Images vs Containers.',
        'Writing Dockerfiles: FROM, RUN, COPY, CMD.',
        'Multi-stage builds to reduce image size.',
        'Docker Compose for multi-container applications.',
        'Basic understanding of Orchestration (Kubernetes).'
      ],
      pointsBn: [
        'ইমেজ বনাম কন্টেইনার।',
        'Dockerfiles লেখা: FROM, RUN, COPY, CMD।',
        'ইমেজের আকার কমাতে মাল্টি-স্টেজ বিল্ড।',
        'মাল্টি-কন্টেইনার অ্যাপ্লিকেশনের জন্য ডকার কম্পোজ।',
        'অরকেস্ট্রেশন (কুবারনেটিস) সম্পর্কে প্রাথমিক ধারণা।'
      ],
      code: `# Multi-stage Dockerfile for a Next.js App
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]`,
      language: 'dockerfile'
    },
    {
      level: 'Advanced',
      titleEn: 'CI/CD Pipelines (GitHub Actions)',
      titleBn: 'CI/CD পাইপলাইন (GitHub Actions)',
      contentEn: 'Continuous Integration and Continuous Deployment (CI/CD) automate the testing and deployment processes, reducing human error and speeding up releases.',
      contentBn: 'কন্টিনিউয়াস ইন্টিগ্রেশন এবং কন্টিনিউয়াস ডেপ্লয়মেন্ট (CI/CD) টেস্টিং এবং ডেপ্লয়মেন্ট প্রক্রিয়াকে স্বয়ংক্রিয় করে, মানুষের ভুল কমায় এবং রিলিজকে দ্রুততর করে।',
      pointsEn: [
        'Continuous Integration: Automated testing and linting on every push.',
        'Continuous Deployment: Automatically deploying to staging/production on merge.',
        'GitHub Actions workflows (YAML files, triggers, jobs, steps).',
        'Managing secrets securely in CI environments.',
        'Automated rollbacks on deployment failure.'
      ],
      pointsBn: [
        'কন্টিনিউয়াস ইন্টিগ্রেশন: প্রতিটি পুশে স্বয়ংক্রিয় টেস্টিং এবং লিন্টিং।',
        'কন্টিনিউয়াস ডেপ্লয়মেন্ট: মার্জ করার সময় স্বয়ংক্রিয়ভাবে স্টেজিং/প্রোডাকশনে ডেপ্লয় করা।',
        'GitHub Actions ওয়ার্কফ্লো (YAML ফাইল, ট্রিগার, জব, স্টেপ)।',
        'CI পরিবেশে নিরাপদে সিক্রেট পরিচালনা করা।',
        'ডেপ্লয়মেন্ট ব্যর্থ হলে স্বয়ংক্রিয় রোলব্যাক।'
      ],
      code: `# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - run: npm ci
    - run: npm run lint
    - run: npm test
    - run: npm run build`,
      language: 'yaml'
    }
  ]
};
