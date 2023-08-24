import Image from "next/image";
import HotelReviewSlider from "../slider/HotelReviewSlider";
import shapeflower from "/public/img/room/shapeflower.png";
import swimmingpool from "/public/img/room/swimmingpool.jpg";

const HotelSwimminres = () => {
  return (
    <section className="hotel__swmminrest">
      <div className="container-fluid p-0">
        <div className="row g-0 justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="hotelrest__swimming">
              <Image src={swimmingpool} alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="hotelswimming__slider__bg px-3">
              <div className="resting__swmming row justify-content-center">
                <div className="col-xxl-8 col-xl-12 col-lg-12">
                  {/* Hotel Review Slider Here */}
                  <HotelReviewSlider />
                </div>
              </div>
              <div className="flower__shape z-n1">
                <Image src={shapeflower} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSwimminres;
