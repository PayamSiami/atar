export function HerbHero() {
    const trustItems = [
        "مجوز رسمی اتحادیه عطاران",
        "ارسال سراسری",
        "تضمین اصالت کالا",
        "مشاوره‌ی عطار",
    ];

    return (
        <section
            style={{
                backgroundImage:
                    "linear-gradient(to bottom right, rgba(47,93,70,0.75), rgba(138,90,51,0.6)), url('/bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative min-h-[94vh] overflow-hidden text-foam"
        >
            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 text-center md:py-32 md:pb-28">
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
