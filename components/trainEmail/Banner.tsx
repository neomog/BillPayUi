import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Train - Email Template">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Train", "URL:void(0)"],
          ["List Page", "URL:void(0)"],
          ["Email Template", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
