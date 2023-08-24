import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import Banner from "@/components/videoTutorial/Banner";
import VideoTutorialMain from "@/components/videoTutorial/VideoTutorialMain";

export default function VideoTutorial() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Banner Section */}
      <Banner />

      {/* Video Tutorial Main Section */}
      <VideoTutorialMain />

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
}
