import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Train - Booking System">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Train", "URL:void(0)"],
          ["List Page", "URL:void(0)"],
          ["Booking system", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
