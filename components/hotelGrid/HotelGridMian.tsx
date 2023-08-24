import hotelsData from "@/data/hotelsData";
import HotelGridCard from "../cards/HotelGridCard";
import Pagination from "../pagination/Pagination";
import FilterOption from "./FilterOption";

const HotelGridMian = () => {
  return (
    <section className="hotel__list__common pt-120 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* Filter Option Here */}
            <FilterOption />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="hotel__list__box">
              <div className="row g-4">
                {hotelsData.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
                  >
                    {/* Hotel Grid Card Here */}
                    <HotelGridCard data={hotel} />
                  </div>
                ))}
              </div>

              {/* Pagination Here */}
              <Pagination clss="justify-content-center pt__40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelGridMian;
