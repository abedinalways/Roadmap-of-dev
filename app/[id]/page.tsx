'use client';

import React, { use } from 'react';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, BookOpen, CheckCircle2, Star, Zap } from 'lucide-react';
import { TOPICS_DATA } from '@/app/data/topics';
import { CodeBlock } from '@/components/CodeBlock';
import { Level } from '@/app/types';

export default function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, lang } = useLanguage();
  const topic = TOPICS_DATA[id];

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center p-10">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 text-4xl">
          ❓
        </div>
        <h1 className="text-4xl font-bold mb-4">{t('Topic Coming Soon', 'টপিকটি শীঘ্রই আসছে')}</h1>
        <p className="text-muted-foreground max-w-md">
          {t(
            "We're currently working hard to bring you the best preparation material for this topic. Stay tuned!",
            "আমরা এই টপিকটির জন্য সেরা প্রস্তুতির উপাদান তৈরি করতে কঠোর পরিশ্রম করছি। সাথেই থাকুন!"
          )}
        </p>
      </div>
    );
  }

  const getLevelBadge = (level: Level) => {
    const styles = {
      Basic: 'bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400',
      Intermediate: 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400',
      Advanced: 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400',
    };
    return styles[level];
  };

  const getLevelIcon = (level: Level) => {
    if (level === 'Basic') return <Zap className="w-4 h-4" />;
    if (level === 'Intermediate') return <BookOpen className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{t('Topics', 'টপিকস')}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{t(topic.titleEn, topic.titleBn)}</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-5xl shadow-sm border border-primary/20">
            {topic.icon}
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {t(topic.titleEn, topic.titleBn)}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(topic.descriptionEn, topic.descriptionBn)}
            </p>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="grid gap-12 pt-8">
        {topic.sections.map((section, idx) => (
          <section key={idx} className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/20 rounded-full transition-colors group-hover:bg-primary/50" />
            
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getLevelBadge(section.level)}`}>
                  {getLevelIcon(section.level)}
                  {section.level}
                </Badge>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {t(section.titleEn, section.titleBn)}
                </h2>
              </div>

              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/80">
                  {t(section.contentEn, section.contentBn)}
                </p>
                
                {section.pointsEn && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none p-0">
                    {(lang === 'bn' ? section.pointsBn : section.pointsEn)?.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 transition-all hover:bg-muted/50">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {section.code && (
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t('Example Implementation', 'উদাহরণ ইমপ্লিমেন্টেশন')}
                  </h4>
                  <CodeBlock code={section.code} language={section.language} />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Footer / Next Steps */}
      <footer className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center space-y-6">
        <h3 className="text-2xl font-bold">{t('Keep Learning!', 'শিখতে থাকুন!')}</h3>
        <p className="text-muted-foreground">
          {t(
            'Mastering these concepts takes time. Try implementing the examples yourself to solidify your understanding.',
            'এই ধারণাগুলো আয়ত্ত করতে সময় লাগে। আপনার বুঝকে আরও মজবুত করতে উদাহরণগুলো নিজে নিজে ইমপ্লিমেন্ট করার চেষ্টা করুন।'
          )}
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            {t('Mark as Complete', 'সম্পন্ন হিসেবে চিহ্নিত করুন')}
          </button>
        </div>
      </footer>
    </div>
  );
}
