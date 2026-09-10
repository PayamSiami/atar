"use client";

import { useState } from "react";
import { HERB_CATEGORIES } from "@/lib/herb-content";

export function HerbCategories() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <section
            id="atar-categories"
            className="mx-auto -mt-6 mb-10 w-full max-w-7xl px-4 scroll-mt-20"
            aria-label="دسته‌بندی محصولات"
        >
            <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1">
                {HERB_CATEGORIES.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setActive(active === category ? null : category)}
                        aria-pressed={active === category}
                        className={`shrink-0 snap-start rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/60 ${
                            active === category
                                ? "bg-forest text-white shadow"
                                : "bg-cream text-clay hover:bg-foam hover:text-forest"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}
