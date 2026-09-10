// Herb shop (عطاری) demo content, front-end only — mirrors the shape of the
// coffee content in ./content.ts so both storefronts stay consistent.

export type HerbBadgeType = "organic" | "certified";

export type HerbProduct = {
  id: number;
  name: string;
  weight: string;
  price: string;
  badge: string;
  badgeType: HerbBadgeType;
  emoji: string;
  type: string;
};

export type HerbTestimonial = {
  id: number;
  name: string;
  purchase: string;
  rating: number;
  text: string;
};

export type HerbFaq = {
  id: number;
  question: string;
  answer: string;
};

/* پرفروش‌های عطاری */
export const HERB_BESTSELLERS: HerbProduct[] = [
  { id: 1, name: "دمنوش آرام‌بخش بابونه", weight: "۱۰۰ گرم", price: "۹۵٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "🌼", type: "دمنوش" },
  { id: 2, name: "عسل طبیعی کوهستان", weight: "۹۰۰ گرم", price: "۴۸۰٬۰۰۰", badge: "اصالت تضمینی", badgeType: "certified", emoji: "🍯", type: "عسل" },
  { id: 3, name: "زعفران سرگل ممتاز", weight: "۴٫۶ گرم", price: "۳۲۰٬۰۰۰", badge: "اصالت تضمینی", badgeType: "certified", emoji: "🌸", type: "ادویه" },
  { id: 4, name: "عرق کاسنی سنتی", weight: "۱٫۵ لیتر", price: "۱۱۰٬۰۰۰", badge: "تقطیر سنتی", badgeType: "certified", emoji: "🌿", type: "عرقیجات" },
  { id: 5, name: "چای سبز معطر", weight: "۲۰۰ گرم", price: "۱۸۰٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "🍵", type: "دمنوش" },
  { id: 6, name: "روغن بادام شیرین خالص", weight: "۱۲۰ میلی‌لیتر", price: "۱۴۵٬۰۰۰", badge: "پرس سرد", badgeType: "certified", emoji: "🫒", type: "روغن گیاهی" },
  { id: 7, name: "گل گاوزبان خشک", weight: "۱۰۰ گرم", price: "۸۵٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "💐", type: "گیاه دارویی" },
  { id: 8, name: "آویشن شیرازی", weight: "۱۰۰ گرم", price: "۷۵٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "🌿", type: "گیاه دارویی" },
  { id: 9, name: "نبات زعفرانی خانگی", weight: "۵۰۰ گرم", price: "۱۲۰٬۰۰۰", badge: "دست‌ساز", badgeType: "certified", emoji: "🍬", type: "نبات" },
  { id: 10, name: "پودر زنجبیل تند", weight: "۲۵۰ گرم", price: "۹۵٬۰۰۰", badge: "تازه آسیاب", badgeType: "certified", emoji: "🌰", type: "ادویه" },
];

/* دمنوش‌های ویژه */
export const HERB_TEAS: HerbProduct[] = [
  { id: 101, name: "دمنوش لاغری گیاهی", weight: "۱۵۰ گرم", price: "۱۱۰٬۰۰۰", badge: "ترکیب اختصاصی", badgeType: "organic", emoji: "🍵", type: "دمنوش" },
  { id: 102, name: "دمنوش خواب راحت اسطوخودوس", weight: "۱۰۰ گرم", price: "۱۲۰٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "🌸", type: "دمنوش" },
  { id: 103, name: "دمنوش گرم زنجبیل و لیمو", weight: "۱۵۰ گرم", price: "۱۰۵٬۰۰۰", badge: "ترکیب اختصاصی", badgeType: "certified", emoji: "🍋", type: "دمنوش" },
  { id: 104, name: "دمنوش گوارشی نعنا و زیره", weight: "۱۰۰ گرم", price: "۸۵٬۰۰۰", badge: "تازه بسته‌بندی", badgeType: "certified", emoji: "🍃", type: "دمنوش" },
  { id: 105, name: "دمنوش خار مریم", weight: "۱۵۰ گرم", price: "۱۳۵٬۰۰۰", badge: "ارگانیک", badgeType: "organic", emoji: "🌿", type: "دمنوش" },
  { id: 106, name: "چای ترش مجلسی", weight: "۲۰۰ گرم", price: "۹۵٬۰۰۰", badge: "پررنگ", badgeType: "certified", emoji: "🌺", type: "دمنوش" },
  { id: 107, name: "دمنوش بهار نارنج", weight: "۱۰۰ گرم", price: "۱۴۵٬۰۰۰", badge: "فصلی", badgeType: "organic", emoji: "🌼", type: "دمنوش" },
  { id: 108, name: "دمنوش گلپر و دارچین", weight: "۱۵۰ گرم", price: "۹۸٬۰۰۰", badge: "گرم و پرعطر", badgeType: "certified", emoji: "🌰", type: "دمنوش" },
];

export const HERB_CATEGORIES = [
    "دمنوش‌ها",
    "عرقیجات",
    "عسل و فرآورده‌های زنبور",
    "ادویه و گیاهان دارویی",
    "روغن‌های طبیعی",
    "خشکبار",
];

export const HERB_TESTIMONIALS: HerbTestimonial[] = [
    {
        id: 1,
        name: "مریم احمدی",
        purchase: "خریدار دمنوش بابونه",
        rating: 5,
        text: "دمنوش بابونه‌شون عالیه؛ شب‌ها خیلی راحت‌تر خوابم می‌بره. بسته‌بندی هم تمیز و بهداشتی بود.",
    },
    {
        id: 2,
        name: "حسین کریمی",
        purchase: "خریدار عسل طبیعی",
        rating: 5,
        text: "عسل کوهستانشون واقعاً اصلیه. سه چهار بار خریدم و کیفیتش همیشه ثابت بوده.",
    },
    {
        id: 3,
        name: "زهرا موسوی",
        purchase: "خریدار عرقیجات",
        rating: 4,
        text: "عرق کاسنی رو برای پدرم می‌گیرم؛ دقیقاً همون طعم عطاری قدیم رو داره.",
    },
    {
        id: 4,
        name: "علی رضایی",
        purchase: "خریدار گیاهان دارویی",
        rating: 5,
        text: "مشاوره‌ی عطار واقعاً کمک کرد؛ دقیقاً همون چیزی که دنبالش بودم رو پیشنهاد دادن.",
    },
];

export const HERB_FAQS: HerbFaq[] = [
    {
        id: 1,
        question: "آیا محصولات عطاری مجوز دارند؟",
        answer:
            "بله؛ عطاری بوعلی دارای پروانه‌ی رسمی اتحادیه عطاران و مجوز بهداشت است و همه‌ی محصولات از تولیدکننده‌های معتبر و دارای پروانه تهیه می‌شوند.",
    },
    {
        id: 2,
        question: "دمنوش‌ها و گیاهان را چطور نگه دارم؟",
        answer:
            "در ظرف دربسته، خشک و دور از نور مستقیم نگه دارید. برای حفظ عطر و خاصیت گیاهان، دمنوش‌ها را ترجیحاً تا شش ماه پس از خرید مصرف کنید.",
    },
    {
        id: 3,
        question: "ارسال چقدر زمان می‌برد؟",
        answer:
            "سفارش‌های تهران یک روز کاری و شهرستان‌ها بین دو تا چهار روز کاری ارسال می‌شوند. محصولات حساس مثل عسل با بسته‌بندی ویژه ارسال می‌شوند.",
    },
    {
        id: 4,
        question: "اگر داروی خاصی مصرف می‌کنم، می‌توانم گیاه دارویی استفاده کنم؟",
        answer:
            "برخی گیاهان با داروها تداخل دارند. پیش از مصرف، حتماً با پزشک یا داروساز خود مشورت کنید؛ عطار ما نیز راهنمایی کلی ارائه می‌دهد.",
    },
];

export const HERB_TAGS = [
    "خرید دمنوش آرام‌بخش",
    "عرق نعنا",
    "عسل طبیعی کوهستان",
    "زعفران سرگل",
    "آویشن شیرازی",
    "گل گاوزبان",
    "روغن بادام شیرین",
    "چای ترش",
    "خار مریم",
    "دارچین",
    "زنجبیل",
    "بهار نارنج",
    "عرق کاسنی",
];
