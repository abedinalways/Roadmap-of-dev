import { TopicDetail } from '../../types';

export const testingTopic: TopicDetail = {
  id: 'testing',
  titleEn: 'Testing',
  titleBn: 'টেস্টিং',
  icon: '🧪',
  descriptionEn: 'Ensure code reliability and prevent regressions. Learn Unit Testing, Integration Testing, and End-to-End (E2E) Testing for robust applications.',
  descriptionBn: 'কোডের নির্ভরযোগ্যতা নিশ্চিত করুন এবং রিগ্রেশন প্রতিরোধ করুন। মজবুত অ্যাপ্লিকেশনের জন্য ইউনিট টেস্টিং, ইন্টিগ্রেশন টেস্টিং এবং এন্ড-টু-এন্ড (E2E) টেস্টিং শিখুন।',
  sections: [
    {
      level: 'Intermediate',
      titleEn: 'Unit & Component Testing',
      titleBn: 'ইউনিট এবং কম্পোনেন্ট টেস্টিং',
      contentEn: 'Unit testing focuses on isolated functions or components to ensure they behave exactly as expected given specific inputs.',
      contentBn: 'ইউনিট টেস্টিং নির্দিষ্ট ইনপুটের ভিত্তিতে আলাদা ফাংশন বা কম্পোনেন্টগুলো আশানুরূপ কাজ করছে কিনা তা নিশ্চিত করতে ফোকাস করে।',
      pointsEn: [
        'Jest / Vitest: Test runners, assertions (expect), and mocking.',
        'React Testing Library (RTL): Testing components from a user\'s perspective.',
        'Testing user interactions (clicks, typing) with user-event.',
        'Mocking API calls and external dependencies.'
      ],
      pointsBn: [
        'Jest / Vitest: টেস্ট রানার, অ্যাসারশন (expect) এবং মকিং।',
        'React Testing Library (RTL): ব্যবহারকারীর দৃষ্টিকোণ থেকে কম্পোনেন্ট পরীক্ষা করা।',
        'user-event এর মাধ্যমে ইউজারের ইন্টারঅ্যাকশন (ক্লিক, টাইপিং) পরীক্ষা করা।',
        'API কল এবং এক্সটার্নাল ডিপেন্ডেন্সি মক করা।'
      ],
      code: `import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('increments value on button click', async () => {
    render(<Counter initialCount={0} />);
    
    // Check initial state
    const countText = screen.getByTestId('count-value');
    expect(countText).toHaveTextContent('0');
    
    // Simulate user interaction
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);
    
    // Assert new state
    expect(countText).toHaveTextContent('1');
  });
});`,
      language: 'typescript'
    },
    {
      level: 'Advanced',
      titleEn: 'End-to-End (E2E) Testing',
      titleBn: 'এন্ড-টু-এন্ড (E2E) টেস্টিং',
      contentEn: 'E2E testing simulates real user scenarios by automating an actual browser, testing the entire application stack from frontend to database.',
      contentBn: 'E2E টেস্টিং একটি প্রকৃত ব্রাউজার স্বয়ংক্রিয় করে বাস্তব ইউজার সিনারিও সিমুলেট করে, ফ্রন্টএন্ড থেকে ডেটাবেস পর্যন্ত সম্পূর্ণ অ্যাপ্লিকেশন স্ট্যাক পরীক্ষা করে।',
      pointsEn: [
        'Cypress vs Playwright: Choosing the right E2E framework.',
        'Writing tests for critical user journeys (e.g., Login, Checkout).',
        'Handling authentication states and bypassing captchas in tests.',
        'Visual Regression Testing to catch unintentional CSS changes.',
        'Integrating tests into CI/CD pipelines (GitHub Actions).'
      ],
      pointsBn: [
        'Cypress বনাম Playwright: সঠিক E2E ফ্রেমওয়ার্ক বেছে নেওয়া।',
        'গুরুত্বপূর্ণ ইউজার জার্নির জন্য টেস্ট লেখা (যেমন, লগইন, চেকআউট)।',
        'টেস্টে অথেন্টিকেশন স্টেট হ্যান্ডলিং এবং ক্যাপচা বাইপাস করা।',
        'অনিচ্ছাকৃত CSS পরিবর্তন ধরতে ভিজ্যুয়াল রিগ্রেশন টেস্টিং।',
        'CI/CD পাইপলাইনে (GitHub Actions) টেস্ট ইন্টিগ্রেট করা।'
      ],
      code: `// Playwright E2E Test Example (login.spec.ts)
import { test, expect } from '@playwright/test';

test('user can login successfully', async ({ page }) => {
  // Go to login page
  await page.goto('/login');
  
  // Fill in credentials
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'securePassword123');
  
  // Click submit
  await page.click('button[type="submit"]');
  
  // Assert redirect to dashboard and welcome message
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Welcome back');
});`,
      language: 'typescript'
    }
  ]
};
