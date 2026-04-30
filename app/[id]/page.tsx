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
          <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-5xl shadow-lg border border-primary/20 animate-float relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <span className="relative z-10">{topic.icon}</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-glow">
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
                      <li key={pIdx} className="glass-card flex items-start gap-3 p-5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 group/point">
                        <div className="bg-primary/10 p-1 rounded-full group-hover/point:bg-primary/20 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        </div>
                        <span className="text-sm font-medium leading-relaxed">{point}</span>
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
      <footer className="mt-20 glass-card rounded-3xl p-10 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold">{t('Keep Learning!', 'শিখতে থাকুন!')}</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 text-lg">
            {t(
              'Mastering these concepts takes time. Try implementing the examples yourself to solidify your understanding.',
              'এই ধারণাগুলো আয়ত্ত করতে সময় লাগে। আপনার বুঝকে আরও মজবুত করতে উদাহরণগুলো নিজে নিজে ইমপ্লিমেন্ট করার চেষ্টা করুন।'
            )}
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transform hover:scale-105 active:scale-95">
              {t('Mark as Complete', 'সম্পন্ন হিসেবে চিহ্নিত করুন')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
