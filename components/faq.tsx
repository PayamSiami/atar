"use client";

import { useState } from "react";
import { HERB_FAQS } from "@/lib/herb-content";

export function HerbFaq() {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section
            id="atar-faq"
            className="scroll-mt-24 my-8"
            aria-label="سوالات متداول"
        >
            <h2 className="mb-4 text-center text-lg font-bold text-ink">سوالات متداول</h2>

            <div className="mx-auto max-w-2xl space-y-2">
                {HERB_FAQS.map((faq) => {
                    const open = openId === faq.id;
                    return (
                        <div key={faq.id} className="rounded-xl border border-latte bg-foam text-sm text-clay">
                            <button
                                type="button"
                                onClick={() => setOpenId(open ? null : faq.id)}
                                aria-expanded={open}
                                aria-controls={`faq-panel-${faq.id}`}
                                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-right font-semibold text-ink transition hover:bg-beige/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-inset"
                            >
                                <span>{faq.question}</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 shrink-0 text-moss transition-transform"
                                    style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
                                    aria-hidden
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            <div
                                id={`faq-panel-${faq.id}`}
                                role="region"
                                aria-hidden={!open}
                                className={`px-4 text-clay/85 transition-all ${
                                    open ? "max-h-48 py-3 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                                }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
