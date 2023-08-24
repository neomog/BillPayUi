import HomeFilterOptions from "../common/HomeFilterOptions";
import RechargePaymentbox from "../common/RechargePaymentbox";
import PaymentSponsorSlider from "../slider/PaymentSponsorSlider";
import band from "/public/img/banner/band.jpg";

const sliderData = [
  { id: 1, img: band },
  { id: 2, img: band },
  { id: 3, img: band },
];

const Banner = () => {
  return (
    <section className="banner__section">
      {/* Container */}
      <div className="container">
        <div
          className="fasilities__wrapper pb__40 wow fadeInUp"
          data-wow-duration="2s"
        >
          {/* Home Filter Options */}
          <HomeFilterOptions />
        </div>

        <div className="fasilities__body wow fadeInUp" data-wow-duration="3s">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
              <div className="recharge__paymentbox">
                {/* Recharge Payment box */}
                <RechargePaymentbox title=" Pay your Broadbanad Bill" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              {/* Payment Sponsor Slider */}
              <PaymentSponsorSlider sliderData={sliderData} />
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
    </section>
  );
};

export default Banner;
