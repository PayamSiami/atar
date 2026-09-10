import { HerbCategories } from "@/components/categories";
import { HerbShowcase } from "@/components/herb-showcase";
import { HerbTestimonials } from "@/components/herb-testimonials";
import { HerbAbout } from "@/components/about";
import { HerbFaq } from "@/components/faq";
import { HerbTags } from "@/components/herb-tags";
import { HERB_BESTSELLERS, HERB_TEAS } from "@/lib/herb-content";
import { HerbConsultant } from "./consultant";

export function HerbShopContent() {
    return (
        <main className="min-h-screen w-full scroll-mt-20">
            <HerbCategories />

            <HerbShowcase
                sectionId="atar-products"
                title="پرفروش‌های عطاری"
                subtitle="محبوب‌ترین‌های مشتریان ما"
                products={HERB_BESTSELLERS}
            />

            <HerbShowcase
                sectionId="atar-teas"
                title="دمنوش‌های ویژه"
                subtitle="برای هر لحظه و هر حالی، یک فنجان"
                products={HERB_TEAS}
            />

            <HerbConsultant />

            <HerbAbout />
            <HerbTestimonials />
            <HerbFaq />
            <HerbTags />
        </main>
    );
}
