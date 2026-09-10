"use client";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { HERB_TESTIMONIALS } from "@/lib/herb-content";

export function HerbTestimonials() {
    const { scrollRef, onMouseDown } = useHorizontalScroll(290, 16);

    return (
        <section
            id="atar-testimonials"
            className="scroll-mt-24 my-8"
            aria-label="نظرات مشتریان"
        >
            <div className="mb-4 text-center">
                <h2 className="text-lg font-bold text-ink">صدای مشتریان</h2>
                <p className="text-xs text-mocha">از تجربه‌ی خرید عطاری بوعلی</p>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={onMouseDown}
                className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hidden cursor-grab active:cursor-grabbing scroll-px-4"
            >
                {HERB_TESTIMONIALS.map((t) => (
                    <div
                        key={t.id}
                        className="flex shrink-0 flex-col gap-2 w-[280px] snap-start rounded-2xl border border-latte bg-foam p-5 shadow-sm text-right"
                    >
                        {/* quote icon */}
                        <div className="text-3xl leading-none text-moss/40" aria-hidden>
                            “
                        </div>
                        <p className="mt-1 flex-1 text-sm italic text-clay">{t.text}</p>
                        <div className="mt-auto flex items-center justify-end gap-2.5">
                            <span className="text-right text-xs">
                                <span className="block font-bold text-ink">{t.name}</span>
                                <span className="text-mocha">{t.purchase}</span>
                            </span>
                            <span
                                className="text-xs text-amber-400"
                                aria-label={`${t.rating} از ۵ ستاره`}
                            >
                                {"★".repeat(t.rating)}
                                {"☆".repeat(5 - t.rating)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
