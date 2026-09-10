"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TalkingCharacter } from "@/components/talking-character";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";

const WELCOME =
    "سلام! من مشاور گیاهی بوعلی هستم. هر سؤالی درباره‌ی گیاهان یا دمنوش دارید بفرمایید.";
const TIPS: string[] = [
    "بابونه برای آرامش و خواب راحت معروفه. یک قاشق چای‌خوری بابونه خشک در آب جوش بگذارید، بگذارید دم بکند و سپس نوشیدنی کنید.",
    "زنجبیل تازه می‌تونه به گوارش کمک کنه؛ اما اگر داروی خاصی مصرف می‌کنید، قبل از مصرف حتماً با داروساز مشورت کنید.",
    "عسل کوهستان را به‌عنوان شیرین‌کننده‌ی طبیعت در چای یا دمنوش‌تان امتحان کنید؛ بوی عطرش می‌ماند اما شیرینی‌اش می‌پیچد.",
    "برای دمنوش‌های خشک، آب جوش بگذارید سرد نشود؛ پنج تا هفت دقیقه دم کنید تا عطر و طعم کامل بشه.",
    "نعنا بعد از غذا می‌تونه احساس سنگینی رو کم کنه؛ یک یا دو قاشق چای‌خوری خشک کافی است.",
];

function estimateDuration(text: string) {
    // ~85ms per Persian character is a decent speaker-independent estimate.
    return Math.min(14000, text.length * 85 + 1200);
}

export function HerbConsultant() {
    const { supported, speak, cancel } = useSpeechSynthesis();
    const [says, setSays] = useState<string | null>(null);
    const [mouthOn, setMouthOn] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    function start(text: string) {
        setSays(text);
        // Mouth animates whether or not TTS actually fired.
        setMouthOn(true);
        clearTimer();
        timerRef.current = setTimeout(() => setMouthOn(false), estimateDuration(text));
        speak(text, {
            onEnd: () => {
                setMouthOn(false);
                clearTimer();
            },
        });
    }

    function nextTip() {
        const tip = TIPS[Math.floor(Math.random() * TIPS.length)];
        start(tip);
    }

    const stop = useCallback(() => {
        cancel();
        setMouthOn(false);
        clearTimer();
    }, [cancel]);

    // Stop automatically if the user switches tab (don't keep talking off-screen).
    useEffect(() => {
        if (!supported) return;
        const onHide = () => stop();
        document.addEventListener("visibilitychange", onHide);
        return () => document.removeEventListener("visibilitychange", onHide);
    }, [stop, supported]);

    return (
        <section
            id="atar-tips"
            className="scroll-mt-24 my-8 rounded-3xl border border-latte bg-cream p-5 md:p-6"
            aria-label="مشاور گیاهی آنلاین"
        >
            <h2 className="mb-2 text-center text-lg font-bold text-ink">
                مشاور گیاهی بوعلی
            </h2>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                {/* Character + bubble */}
                <div className="relative flex flex-col items-center gap-3 md:order-2">
                    <div className="relative flex h-44 w-44 items-end justify-center">
                        <TalkingCharacter variant="herbalist" speaking={mouthOn} />
                        {/* speech bubble */}
                        {says && (
                            <div
                                className="absolute -top-16 left-1/2 -translate-x-1/2 w-52 max-w-xs rounded-3xl bg-foam border border-latte px-3 py-2 text-right text-xs text-clay shadow-lg text-balance"
                                aria-live="polite"
                            >
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-l border-b border-latte bg-foam" />
                                {says}
                            </div>
                        )}
                    </div>
                    <span className="text-xs text-mocha">
                        {supported
                            ? mouthOn
                                ? "در حال صحبت کردن..."
                                : "روی من کلیک کن تا با من حرف بزنی."
                            : "صدای متن در اینجا نمایش داده می‌شود."}
                    </span>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-stretch gap-2 md:order-1 md:w-64 text-sm">
                    <button
                        type="button"
                        onClick={() => start(WELCOME)}
                        className="rounded-full bg-forest px-4 py-2 font-semibold text-white transition hover:bg-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf/60"
                    >
                        سلام، مشاور! 🫖
                    </button>
                    <button
                        type="button"
                        onClick={nextTip}
                        className="rounded-full border border-latte bg-foam px-4 py-2 text-forest transition hover:bg-leaf/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf/60"
                    >
                        یک نکته‌ی گیاهی بگو 🌿
                    </button>
                    {mouthOn && (
                        <button
                            type="button"
                            onClick={stop}
                            className="rounded-full border border-latte bg-foam px-4 py-2 text-xs font-semibold text-clay transition hover:bg-roast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf/60"
                        >
                            قطع صدا
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
