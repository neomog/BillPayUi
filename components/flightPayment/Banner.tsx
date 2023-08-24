import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Flights - Payment">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Flight", "URL:void(0)"],
          ["Payment", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
