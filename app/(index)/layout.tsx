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

      {/*{children}*/}

      {/* promo code Section Here */}
      <PromoCode />

      {/* Refer Section Here */}
      <Refer />

      {/* Refer Section Here */}
      <Working />

      {/* Faq Section Here */}
      <Faq />

      {/* Testimonial Section Here */}
      <HomeTestimonialSlider />

      {/* Testimonial Section Here */}
      <AppStore />

      {/* Support Section Here */}
      <Support />

      {/* Footer Section Here */}
      <Footer />
    </>
  );
}
