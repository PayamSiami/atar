import { Hero } from "@/components/hero";
import { HerbShopContent } from "@/components/shop-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عطاری بوعلی · گیاهان دارویی، دمنوش و عرقیجات سنتی",
  description:
    "خرید آنلاین گیاهان دارویی، دمنوش‌های سنتی، عرقیجات، عسل طبیعی و روغن‌های گیاهی — عطاری بوعلی با ضمانت اصالت و ارسال سراسری",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HerbShopContent />
    </>
  );
}