import Breadcumnd from "../breadcumnd/Breadcumnd";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      <div className="container">
        <div className="breadcumnd__wrapper">
          <h2 className="bread__title">Hotel Grid Page</h2>

          {/* Breadcumnd here */}
          <Breadcumnd
            breadcrumbs={[
              ["Home", "/"],
              ["Booking", "URL:void(0)"],
              ["Hotel", "URL:void(0)"],
              ["Hotel Grid Page", "/"],
            ]}
          />
        </div>
      </div>

      <div className="hotel__list__section pt-80">
        <div className="container">
          {/* Search Section */}
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Banner;
