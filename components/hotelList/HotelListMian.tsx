import hotelsData from "@/data/hotelsData";
import HotelListCard from "../cards/HotelListCard";
import FilterOption from "../hotelGrid/FilterOption";
import Pagination from "../pagination/Pagination";

const HotelListMian = () => {
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
                {hotelsData.slice(0, 4).map((hotel) => (
                  <div
                    key={hotel.id}
                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-6"
                  >
                    {/* Hotel Grid Card Here */}
                    <HotelListCard data={hotel} />
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

export default HotelListMian;
