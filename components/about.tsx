export function HerbAbout() {
    return (
        <section
            id="atar-about"
            className="scroll-mt-24 my-8 rounded-3xl border border-latte bg-cream p-5 md:p-6"
            aria-label="درباره عطاری بوعلی"
        >
            <h2 className="mb-4 text-lg font-bold text-ink">درباره‌ی عطاری بوعلی</h2>

            <div className="grid gap-6 md:grid-cols-[1fr_200px]">
                <div className="space-y-3 text-sm leading-relaxed text-clay">
                    <p>
                        عطاری بوعلی با بیش از چهار دهه حضور در بازار سنتی، تجربه‌ی انتخاب و عرضه‌ی بهترین
                        گیاهان دارویی از سراسر ایران و نقاط مختلف جهان را در اختیار شما می‌گذارد.
                    </p>
                    <p>
                        هر محصول توسط عطار مجرب ما بررسی و تأیید می‌شود. از عسل کوهستان گرفته تا زعفران
                        سرگل و دمنوش‌های تخصصی، همه با ضمانت اصالت عرضه می‌شوند.
                    </p>
                    <p>
                        اگر درباره‌ی مصرف گیاهان دارویی سؤال دارید، تیم ما آماده‌ی مشاوره‌ی رایگان
                        است — هدف ما ارتقای سلامت شما از مسیر طبیعت است.
                    </p>
                </div>

                {/* Stats sidebar */}
                <div className="flex flex-row flex-wrap gap-4 md:flex-col md:items-end">
                    {[
                        { value: "۴۰+", label: "سال سابقه" },
                        { value: "۲۰۰+", label: "قلم محصول" },
                        { value: "۱۰۰٪", label: "ضمانت اصالت" },
                    ].map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex items-baseline gap-2 rounded-2xl bg-foam px-4 py-3 shadow-sm"
                        >
                            <span className="text-xl font-bold text-forest">{value}</span>
                            <span className="text-xs text-mocha">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
