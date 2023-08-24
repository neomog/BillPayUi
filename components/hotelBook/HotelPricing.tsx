import Image from "next/image";
import PriceSlider from "../slider/PriceSlider";
import calender from "/public/img/pricing/calender.png";
import price from "/public/img/pricing/price.png";
import pricingshape1 from "/public/img/pricing/pricingshape1.png";
import pricingshape2 from "/public/img/pricing/pricingshape2.png";

const HotelPricing = () => {
  return (
    <section className="hotel__pricing pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-7 col-lg-7">
            {/* Price Slider Here */}
            <PriceSlider />
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="hotel__price__content">
              <div
                className="section__header pb__20 wow fadeInDown wow fadeInDown"
                data-wow-duration="1.2s"
              >
                <h2>Hotel Special Pricing plans</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable....
                </p>
              </div>
              <div className="refer__wrap">
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="icon">
                    <Image src={price} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Flexible Price</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="icon">
                    <Image src={calender} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Anytime Discharge</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__shap1">
        <Image src={pricingshape1} alt="img" className="img-fluid" />
      </div>
      <div className="pricing__shap2">
        <Image src={pricingshape2} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default HotelPricing;
