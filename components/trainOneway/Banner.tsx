import Breadcumnd from "../breadcumnd/Breadcumnd";
import SearchOption from "../busList/SearchOption";

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      {/* Container */}
      <div className="container">
        <div className="breadcumnd__wrapper">
          <h2 className="bread__title">Train - Round Trip</h2>

          {/* Breadcumnd here */}
          <Breadcumnd
            breadcrumbs={[
              ["Home", "/"],
              ["Booking", "URL:void(0)"],
              ["Bus", "URL:void(0)"],
              ["Round Trip", "/"],
            ]}
          />
        </div>
      </div>
      {/* Container */}

      {/* Search Option Here  */}
      <SearchOption />
      {/* Search Option End  */}
    </section>
  );
};

export default Banner;
