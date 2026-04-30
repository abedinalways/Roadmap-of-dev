'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border bg-zinc-950 dark:bg-zinc-900 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 dark:bg-zinc-800 border-b border-border">
        <span className="text-xs font-mono text-zinc-400 uppercase">{language || 'code'}</span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-zinc-100"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-zinc-100 leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}
