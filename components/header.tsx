"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
    { href: "#atar-products", label: "محصولات" },
    { href: "#atar-teas", label: "دمنوش‌ها" },
    { href: "#atar-testimonials", label: "نظرات" },
    { href: "#atar-faq", label: "سوالات متداول" },
    { href: "#atar-about", label: "درباره ما" },
];

export function HerbHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full bg-foam/85 backdrop-blur border-b border-latte">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-6 lg:px-8 h-16">
                {/* Brand — first in RTL order, renders on the right. */}
                <a href="#atar-home" className="flex items-center gap-2 shrink-0" aria-label="عطاری بوعلی — صفحه اصلی">
                    <span className="text-xl md:text-2xl font-extrabold text-forest tracking-tight">
                        عطاری بوعلی
                    </span>
                    <span className="bg-mist text-moss text-[0.6rem] font-bold px-2 py-0.5 rounded-full tracking-wider">
                        گیاهی
                    </span>
                </a>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-clay">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="hover:text-leaf transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                    <Link
                        href="/"
                        className="text-xs font-semibold text-moss hover:text-forest transition-colors"
                    >
                        ← فروشگاه قهوه
                    </Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden w-9 h-9 rounded-full bg-beige flex items-center justify-center text-clay hover:bg-beige-dark hover:text-ink transition-colors"
                    aria-label={isMenuOpen ? "بستن منو" : "منو"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <line x1="3" y1="7" x2="21" y2="7" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="17" x2="21" y2="17" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-latte bg-foam px-4 py-2 flex flex-col text-sm font-medium text-clay">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setIsMenuOpen(false)}
                            className="py-2.5 border-b border-latte/60 last:border-0 hover:text-ink transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
