/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Lang } from '../types';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem('app-lang') as Lang;
      if (savedLang && (savedLang === 'en' || savedLang === 'bn' || savedLang === 'both')) {
        setLangState(savedLang);
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('app-lang', newLang);
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
  }, []);

  const t = useCallback((en: string, bn: string) => {
    if (lang === 'bn') return bn;
    if (lang === 'both') return `${en} / ${bn}`;
    return en;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t
  }), [lang, setLang, t]);

  // To prevent hydration mismatch, we can either:
  // 1. Always render the same thing on server and client (initial 'en' state)
  // 2. Or, don't render content that depends on state until mounted.
  // Since we want the UI to be visible immediately, we'll go with #1.
  // The useEffect will then update the state on the client if needed.

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
