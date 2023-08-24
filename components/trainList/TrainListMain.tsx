import FilterOption from "../busList/FilterOption";
import Pagination from "../pagination/Pagination";
import AllTrainList from "./AllTrainList";

const TrainListMain = () => {
  return (
    <section className="flight__onewaysection pb__60">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* Filter Option Here */}
            <FilterOption id="trainList" />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <span className="dubai d-block text-center mb__20 dtext lato fw-400">
              American All Train List
            </span>

            {/* All Train List Here */}
            <AllTrainList />

            {/* Pagination Here */}
            <Pagination clss="justify-content-center pt__40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainListMain;
