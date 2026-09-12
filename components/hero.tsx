"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
    const trustItems = [
        "مجوز رسمی اتحادیه عطاران",
        "ارسال سراسری",
        "تضمین اصالت کالا",
        "مشاوره‌ی عطار",
    ];

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);

    function handlePlay() {
        const video = videoRef.current;
        if (!video) return;
        // User gesture → autoplay policy permits this.
        video.play().catch((err) => {
            // Surfaced instead of swallowed: a silent catch is why a broken
            // clip looks identical to a broken click handler.
            console.error("intro clip failed to play:", err);
        });
    }

    return (
        <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden bg-forest text-foam">
            {/* Background layer — no z-index, so it sits under the content. */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative aspect-5/2 max-h-full w-full max-w-full">
                    <Image
                        src="/hero.png"
                        alt=""
                        fill
                        sizes="100vw"
                        priority
                        className="select-none object-contain"
                    />

                    <video
                        ref={videoRef}
                        src="/intro-clip.mp4"
                        // loop
                        muted={false}
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                        tabIndex={-1}
                        onPlaying={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onError={() => setVideoError(true)}
                        className="absolute left-1/2 top-[20%] w-[11%] -translate-x-1/5 -translate-y-5/9 object-contain pointer-events-none animate-fade-in"

                    />

                    {/*
                     * z-20 beats the foreground's z-10 — this is the actual
                     * fix. Without it the headline block swallows the click.
                     */}
                    {!isPlaying && !videoError && (
                        <button
                            type="button"
                            onClick={handlePlay}
                            aria-label="پخش ویدیو معرفی"
                            className="absolute left-1/2 top-[20%] z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-foam shadow-lg backdrop-blur transition hover:scale-110 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foam sm:h-14 sm:w-14"
                        >
                            <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    )}

                    {videoError && (
                        <p className="absolute left-1/2 top-[20%] z-20 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black/70 px-3 py-1 text-[0.7rem] text-foam">
                            ویدیو بارگذاری نشد
                        </p>
                    )}
                </div>
            </div>

            {/* Foreground — z-10, unchanged. */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 text-center md:py-32 md:pb-28">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
                    عطاری سنتی از سال ۱۳۶۳
                </span>

                <h1 className="text-3xl font-extrabold leading-snug md:text-5xl md:leading-snug">
                    سلامتی، از دلِ طبیعت
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-foam/85 md:text-base">
                    بیش از ۲۰۰ قلم گیاه دارویی، دمنوش، عرقیجات و عسل طبیعی؛ دست‌چین‌شده و با
                    ضمانت اصالت، به‌همراه مشاوره‌ی عطار.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href="#atar-products"
                        className="w-full rounded-full bg-foam px-7 py-3 text-sm font-bold text-forest shadow-lg transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 sm:w-auto"
                    >
                        مشاهده محصولات
                    </a>
                    <a
                        href="#atar-about"
                        className="w-full rounded-full border-2 border-foam/70 px-7 py-3 text-sm font-semibold text-foam backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto"
                    >
                        درباره‌ی عطاری
                    </a>
                </div>

                <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-foam/90">
                    {trustItems.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-foam/60" aria-hidden />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
        </svg>
    );
}