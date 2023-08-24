import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Change Password">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["My Profile", "URL:void(0)"],
          ["Change Password", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
