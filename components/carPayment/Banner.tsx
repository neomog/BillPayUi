import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Car - Payment">
      {/* Breadcumnd Section  */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Bus", "URL:void(0)"],
          ["Payment", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
