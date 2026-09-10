import Link from "next/link";

const FOOTER_LINKS = [
    { href: "#atar-products", label: "محصولات" },
    { href: "#atar-teas", label: "دمنوش‌ها" },
    { href: "#atar-about", label: "درباره ما" },
    { href: "#atar-faq", label: "سوالات متداول" },
];

const POPULAR_SEARCHES = [
    "خرید عسل طبیعی",
    "زعفران سرگل",
    "دمنوش آرام‌بخش",
    "روغن بادام شیرین",
];

const STATS = [
    { value: "۴۰+", label: "سال سابقه" },
    { value: "۲۰۰+", label: "قلم محصول" },
    { value: "۱۰۰٪", label: "ضمانت اصالت" },
];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
    );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export function HerbFooter() {
    return (
        <footer id="atar-home" className="w-full">
            {/* Brand band */}
            <section className="bg-forest text-foam">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:px-6 lg:px-8 py-10 text-center md:flex-row md:text-start">
                    <div className="shrink-0">
                        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">عطاری بوعلی</h2>
                        <span className="mt-1 block text-sm tracking-[0.15em] text-foam/80">میراثی از طبیعت</span>
                    </div>
                    <ul className="flex flex-wrap gap-4 text-sm text-foam/80">
                        {FOOTER_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className="hover:text-white transition-colors">{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Main footer */}
            <section className="bg-beige text-clay">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:px-8 py-8 text-sm md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-ink mb-2">دسترسی سریع</h3>
                        <ul className="space-y-1">
                            {FOOTER_LINKS.map(({ href, label }) => (
                                <li key={href}>
                                    <a href={href} className="hover:text-ink transition-colors">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-ink mb-2">جستجوهای پرطرفدار</h3>
                        <ul className="flex flex-wrap gap-2">
                            {POPULAR_SEARCHES.map((item) => (
                                <li key={item}>
                                    <span className="rounded-full bg-cream px-2 py-0.5 text-xs text-clay">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-ink mb-2">درباره عطاری بوعلی</h3>
                        <p className="leading-relaxed text-clay/80 mb-3">
                            با بیش از چهار دهه سابقه در بازار سنتی، گیاهان دارویی، دمنوش‌ها و عرقیجات را مستقیم از تولیدکننده به خانه‌ی شما می‌رسانیم.
                        </p>
                        <div className="flex gap-4 text-center">
                            {STATS.map(({ value, label }) => (
                                <div key={label}>
                                    <span className="block text-lg font-bold text-forest">{value}</span>
                                    <span className="text-[0.65rem] text-mocha">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Socials + copyright */}
                <div className="border-t border-latte bg-cream">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:px-6 lg:px-8 py-4 md:flex-row">
                        <div className="flex gap-3">
                            {[InstagramIcon, TelegramIcon, WhatsAppIcon].map((Icon, i) => (
                                <a key={i} href="#" aria-label={["Instagram", "Telegram", "WhatsApp"][i]}
                                    className="grid w-9 h-9 place-items-center rounded-full bg-beige text-clay hover:bg-moss hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-mocha">
                            کلیه حقوق این وب‌سایت متعلق به{" "}
                            <b className="text-clay">عطاری بوعلی</b> است.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}
