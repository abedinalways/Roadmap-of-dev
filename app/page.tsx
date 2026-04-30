'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_GROUPS } from '@/app/constants/navGroups';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { ArrowRight, BookOpen, Target, Zap } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t('Master Your Tech Skills', 'আপনার টেক স্কিলগুলো দক্ষ করে তুলুন')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t(
            'From foundational concepts to senior-level architectural patterns. A structured path to becoming a professional developer.',
            'বেসিক থেকে শুরু করে সিনিয়র লেভেল আর্কিটেকচার পর্যন্ত। একজন প্রফেশনাল ডেভেলপার হওয়ার সুবিন্যস্ত পথ।'
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/roadmap"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
          >
            <Target className="w-5 h-5" />
            {t('View Roadmap', 'রোডম্যাপ দেখুন')}
          </Link>
          <Link
            href="/html"
            className="flex items-center gap-2 bg-muted hover:bg-muted/80 px-6 py-3 rounded-full font-semibold transition-all"
          >
            <BookOpen className="w-5 h-5" />
            {t('Start Learning', 'শেখা শুরু করুন')}
          </Link>
        </div>
      </section>

      {/* Feature Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="text-yellow-500" />, titleEn: 'Quick Learning', titleBn: 'দ্রুত শিখুন', descEn: 'Concise and practical guides', descBn: 'সংক্ষিপ্ত এবং ব্যবহারিক গাইড' },
          { icon: <BookOpen className="text-blue-500" />, titleEn: 'Full Coverage', titleBn: 'সম্পূর্ণ কভারেজ', descEn: 'Basic to advanced topics', descBn: 'বেসিক থেকে অ্যাডভান্সড টপিক' },
          { icon: <Target className="text-green-500" />, titleEn: 'Job Ready', titleBn: 'চাকরির প্রস্তুতি', descEn: 'Interview focused preparation', descBn: 'ইন্টারভিউ ফোকাসড প্রস্তুতি' },
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card/50 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold">{t(feature.titleEn, feature.titleBn)}</h3>
            <p className="text-muted-foreground">{t(feature.descEn, feature.descBn)}</p>
          </div>
        ))}
      </div>

      {/* Categories Grid */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">{t('Explore Categories', 'ক্যাটাগরিগুলো এক্সপ্লোর করুন')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NAV_GROUPS.slice(1).map((group) => (
            <div key={group.cat} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors group">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {group.cat}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                  >
                    <span>{item.icon}</span>
                    <span>{t(item.en, item.bn)}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex justify-end">
                <Link
                  href={`/${group.items[0].id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors"
                >
                  {t('View all topics', 'সবগুলো টপিক দেখুন')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 rounded-3xl p-12 text-center space-y-6 border border-primary/10">
        <h2 className="text-3xl font-bold">{t('Ready to Level Up?', 'আপনার স্কিল বাড়াতে প্রস্তুত?')}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t(
            'Join thousands of developers who are building their solid preparation with DevPrep.',
            'হাজার হাজার ডেভেলপারদের সাথে যোগ দিন যারা DevPrep এর মাধ্যমে তাদের প্রস্তুতিকে শক্তিশালী করছে।'
          )}
        </p>
        <Link
          href="/interview"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
        >
          {t('Start Interview Prep', 'ইন্টারভিউ প্রস্তুতি শুরু করুন')}
        </Link>
      </section>

      <footer className="text-center py-12 text-muted-foreground text-sm border-t border-border">
        <p>© 2026 DevPrep. {t('Built for developers by developers.', 'ডেভেলপারদের জন্য তৈরি।')}</p>
      </footer>
    </div>
  );
}
