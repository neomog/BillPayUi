import AllBusListOne from "../busList/AllBusList";
import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Pagination from "../pagination/Pagination";
import { allBusListOne, allBusListOneWay } from "./code";

const BlocksRoundMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Round Trip OneWay</h2>
        {/* home one */}
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Round Trip [1]</h4>
            <ul className="nav nav-pills" id="pills-tabblocks" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocks"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocks"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoks"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoks"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentre">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* Home Here  */}
              <section className="flight__onewaysec pt__60 pb__60">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <span className="dubai d-block text-center mb__20 dtext lato fw-400">
                        New York To Dubai
                      </span>

                      {/* All Bus List Here */}
                      <AllBusListOne />

                      {/* Pagination Here */}
                      <Pagination clss="justify-content-center pt__40" />
                    </div>
                  </div>
                </div>
              </section>
              {/* Home End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={allBusListOne} />
            </div>
          </div>
        </div>
        {/* home two */}
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>One Way [1]</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh2" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh2"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh2"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh2"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh2"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh2"
              role="tabpanel"
              aria-labelledby="pills-home-tabh2"
            >
              {/* Home two Here  */}
              <section className="flight__onewaysec pt__60 pb__60">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <span className="dubai d-block text-center mb__20 dtext lato fw-400">
                        New York To Dubai & Dubai To New York
                      </span>
                      {/* All Bus List Here */}

                      {/* Pagination Here */}
                      <Pagination clss="justify-content-center pt__40" />
                    </div>
                  </div>
                </div>
              </section>
              {/* Home two End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={allBusListOneWay} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksRoundMain;
