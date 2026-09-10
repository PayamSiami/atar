import type { HerbProduct } from "@/lib/herb-content";

export interface HerbProductCardProps {
    product: HerbProduct;
}

export function HerbProductCard({ product }: HerbProductCardProps) {
    const badgeClass =
        product.badgeType === "organic" ? "badge-herb-organic" : "badge-herb-certified";

    return (
        <article
            className="group relative shrink-0 w-[200px] snap-start rounded-2xl border border-latte bg-foam p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-md"
            tabIndex={-1}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-2xl">
                {product.emoji}
            </div>

            <div className="mt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-mocha">
                {product.type}
            </div>

            <h3 className="mt-1 min-h-10 text-center text-sm font-bold leading-snug text-ink">
                {product.name}
            </h3>

            <div className="mt-2 text-xs text-mocha">{product.weight}</div>

            <div className="mt-1 text-lg font-bold text-forest">{product.price} تومان</div>

            <span className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[0.55rem] font-bold shadow-sm ${badgeClass}`}>
                {product.badge}
            </span>
        </article>
    );
}
