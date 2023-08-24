import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Bus - Invoice">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Bus", "URL:void(0)"],
          ["Invoice", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
