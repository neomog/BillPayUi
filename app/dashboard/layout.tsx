import Footer from "@/components/footer/Footer";
import AppStore from "@/components/home/AppStore";
import Faq from "@/components/home/Faq";
import PromoCode from "@/components/home/PromoCode";
import Refer from "@/components/home/Refer";
import Support from "@/components/home/Support";
import Working from "@/components/home/Working";
import NavBar from "@/components/navBar/NavBar";
import HomeTestimonialSlider from "@/components/slider/HomeTestimonialSlider";

export default function HomeOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Banner Section Here  */}
      <NavBar />

      {children}

    </>
  );
}
