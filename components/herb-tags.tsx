import { HERB_TAGS } from "@/lib/herb-content";

export function HerbTags() {
    return (
        <section
            className="my-8"
            aria-label="جستجوهای مرتبط"
        >
            <h2 className="mb-3 text-center text-lg font-bold text-ink">
                جستجوهای مرتبط
            </h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
                {HERB_TAGS.map((tag) => (
                    <a
                        key={tag}
                        href={
                            tag.startsWith("خرید ")
                                ? `#atar-products`
                                : tag.startsWith("عرق ")
                                  ? "#atar-products"
                                  : "#atar-teas"
                        }
                        className="cursor-pointer rounded-full bg-foam border border-latte px-3 py-1 text-xs font-medium text-clay shadow-sm transition hover:-translate-y-0.5 hover:border-leaf/50 hover:bg-leaf/5 hover:text-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf/50"
                    >
                        {tag}
                    </a>
                ))}
            </div>
        </section>
    );
}
