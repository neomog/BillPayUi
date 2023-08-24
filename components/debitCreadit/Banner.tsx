import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Credit or Debit Cards">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["My Profile", "URL:void(0)"],
          ["Cedit or Debit Cards", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
