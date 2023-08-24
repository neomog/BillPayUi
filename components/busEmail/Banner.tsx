import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Bus - Email Template">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Bus", "URL:void(0)"],
          ["Email Template", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
