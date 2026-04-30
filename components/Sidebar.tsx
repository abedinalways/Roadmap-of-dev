'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS } from '@/app/constants/navGroups';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { cn } from '@/lib/utils';
import { Search, Globe, Moon, Sun, Menu, X } from 'lucide-react';
import { TOPICS_DATA } from '@/app/data/topics';

export function Sidebar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    try {
      const isDarkStored = localStorage.getItem('theme') !== 'light';
      setIsDark(isDarkStored);
      if (isDarkStored) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    try {
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-40 w-72 h-screen border-r border-border bg-card flex flex-col transition-transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-primary text-2xl">⚡</span>
            <span>DevPrep</span>
          </Link>
          <button 
            onClick={toggleTheme}
            className="lg:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('Search topics...', 'টপিক খুঁজুন...')}
              className="w-full bg-muted/50 border border-border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-border">
          {NAV_GROUPS.map((group) => (
            <div key={group.cat} className="space-y-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                {group.cat}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === `/${item.id}`;
                  const hasData = !!TOPICS_DATA[item.id] || item.id === 'roadmap' || item.id === 'home';
                  return (
                    <Link
                      key={item.id}
                      href={`/${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                        isActive 
                          ? "bg-primary text-primary-foreground font-medium" 
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span>{t(item.en, item.bn)}</span>
                      </div>
                      {!hasData && (
                        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground uppercase font-bold">
                          Soon
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border flex items-center justify-between gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
          <button 
            onClick={toggleTheme}
            className="hidden lg:flex p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </aside>
    </>
  );
}
