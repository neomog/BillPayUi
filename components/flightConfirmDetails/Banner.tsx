import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Flights - Confirm Details">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Flights", "URL:void(0)"],
          ["Confirm Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
