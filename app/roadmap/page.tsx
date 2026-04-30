'use client';

import React from 'react';
import { NAV_GROUPS } from '@/app/constants/navGroups';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { CheckCircle2, Circle, Flag, Rocket } from 'lucide-react';

export default function RoadmapPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {t('Full Developer Roadmap', 'সম্পূর্ণ ডেভেলপার রোডম্যাপ')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t(
            'Follow this step-by-step guide to master web development from zero to senior level.',
            'জিরো থেকে সিনিয়র লেভেল পর্যন্ত ওয়েব ডেভেলপমেন্ট শেখার ধাপে ধাপে গাইড।'
          )}
        </p>
      </header>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {NAV_GROUPS.map((group, groupIndex) => (
          <div key={groupIndex} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {groupIndex === 0 ? <Rocket className="w-5 h-5" /> : groupIndex === NAV_GROUPS.length - 1 ? <Flag className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm group-hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <time className="font-mono text-xs font-bold text-primary uppercase">
                  Phase {groupIndex + 1}
                </time>
              </div>
              <h3 className="text-xl font-bold mb-4">{group.cat}</h3>
              <div className="grid grid-cols-1 gap-2">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Circle className="w-3 h-3 fill-current" />
                    <span>{t(item.en, item.bn)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('Your Journey Starts Here', 'আপনার যাত্রা এখান থেকেই শুরু')}</h2>
        <p className="text-muted-foreground mb-6">
          {t(
            'Take it one step at a time. Consistency is more important than speed.',
            'একবারে একটি ধাপ নিন। গতির চেয়ে ধারাবাহিকতা বেশি গুরুত্বপূর্ণ।'
          )}
        </p>
      </section>
    </div>
  );
}
