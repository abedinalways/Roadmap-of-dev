'use client';

import React from 'react';
import { NAV_GROUPS } from '@/app/constants/navGroups';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { CheckCircle2, Circle, Flag, Rocket } from 'lucide-react';

export default function RoadmapPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <header className="space-y-4 text-center pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-glow">
          {t('Full Developer Roadmap', 'সম্পূর্ণ ডেভেলপার রোডম্যাপ')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t(
            'Follow this step-by-step guide to master web development from zero to senior level.',
            'জিরো থেকে সিনিয়র লেভেল পর্যন্ত ওয়েব ডেভেলপমেন্ট শেখার ধাপে ধাপে গাইড।'
          )}
        </p>
      </header>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent before:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
        {NAV_GROUPS.map((group, groupIndex) => (
          <div key={groupIndex} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/50 bg-background text-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 animate-pulse-slow">
              {groupIndex === 0 ? <Rocket className="w-5 h-5" /> : groupIndex === NAV_GROUPS.length - 1 ? <Flag className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 glass-card rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(var(--primary),0.15)] hover:border-primary/40 group/card">
              <div className="flex items-center justify-between mb-3">
                <time className="font-mono text-xs font-bold text-primary uppercase">
                  Phase {groupIndex + 1}
                </time>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground/90">{group.cat}</h3>
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3 text-sm text-muted-foreground p-2 rounded-lg hover:bg-primary/5 transition-colors group-hover/card:text-foreground/80">
                    <Circle className="w-2 h-2 fill-primary text-primary" />
                    <span className="font-medium">{t(item.en, item.bn)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="glass-card rounded-3xl p-12 text-center relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t('Your Journey Starts Here', 'আপনার যাত্রা এখান থেকেই শুরু')}</h2>
          <p className="text-muted-foreground text-lg mb-0 max-w-lg mx-auto">
            {t(
              'Take it one step at a time. Consistency is more important than speed.',
              'একবারে একটি ধাপ নিন। গতির চেয়ে ধারাবাহিকতা বেশি গুরুত্বপূর্ণ।'
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
