import Banner from "@/components/about/Banner";
import Sponsor from "@/components/about/Sponsor";
import Footer from "@/components/footer/Footer";
import Faq from "@/components/home/Faq";
import AppStore from "@/components/homeTwo/AppStore";
import NavBar from "@/components/navBar/NavBar";

export default function About() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Banner Section Here  */}
      <Banner />

      {/* Support Section Here  */}
      {/*<Support />*/}

      {/* Faq Section Here  */}
      <Faq />

      {/* Sponsor Section Here  */}
      <Sponsor />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Testimonial Section Here  */}
      {/*<Testimonial />*/}

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
}
