"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-dark">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span>LokaalAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Blog
            </Link>
            <a
              href="#aan-de-slag"
              className="text-sm font-medium bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full transition-colors"
            >
              Aan de slag
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-brand"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 flex flex-col gap-3">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm font-medium py-2 text-foreground/80 hover:text-brand">Home</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-sm font-medium py-2 text-foreground/80 hover:text-brand">Blog</Link>
            <a href="#aan-de-slag" onClick={() => setMenuOpen(false)} className="text-sm font-medium bg-brand text-white px-5 py-2 rounded-full text-center">Aan de slag</a>
          </nav>
        )}
      </div>
    </header>
  );
}
