"use client";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { HerbProductCard } from "@/components/product-card";
import type { HerbProduct } from "@/lib/herb-content";

const CARD_WIDTH = 200;
const GAP = 16;

export function HerbShowcase({
    sectionId,
    title,
    subtitle,
    products,
}: {
    sectionId?: string;
    title: string;
    subtitle: string;
    products: HerbProduct[];
}) {
    const {
        scrollRef,
        showLeftFade,
        showRightFade,
        scrollProgress,
        scrollByAmount,
        onMouseDown,
    } = useHorizontalScroll(CARD_WIDTH, GAP);

    return (
        <section
            id={sectionId}
            className="scroll-mt-24 my-8 rounded-3xl border border-latte bg-cream p-5 md:p-6"
            aria-label={title}
        >
            <div className="mb-4">
                <h2 className="text-lg font-bold text-ink">{title}</h2>
                <p className="text-xs text-mocha">{subtitle}</p>
            </div>

            <div className="relative">
                {/* Left fade */}
                {showLeftFade && (
                    <div
                        aria-hidden
                        className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent pointer-events-none"
                    />
                )}

                {/* Right fade */}
                {showRightFade && (
                    <div
                        aria-hidden
                        className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent pointer-events-none"
                    />
                )}

                {/* Scrollable track */}
                <div
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    className="no-scrollbar flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scroll-smooth snap-x"
                    style={{ userSelect: "none" }}
                >
                    {products.map((product) => (
                        <HerbProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Scroll buttons */}
                <button
                    type="button"
                    onClick={() => scrollByAmount("left")}
                    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                    aria-label="مورد قبلی"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => scrollByAmount("right")}
                    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                    aria-label="مورد بعدی"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
            </div>

            {/* Progress */}
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-beige">
                <div
                    className="h-full rounded-full bg-leaf transition-all duration-300"
                    style={{ width: `${Math.max(6, scrollProgress * 100)}%` }}
                />
            </div>
        </section>
    );
}
