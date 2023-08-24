import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import HotelSuccessfulMain from "../hotelSuccessful/HotelSuccessfulMain";
import SuccessfulMain from "../successful/SuccessfulMain";
import { hotelSuccessfulMain, successfulMain } from "./code";

const BlocksSuccessfulMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Payment Successful</h2>
        <div className="common__body__section">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Successful [1]</h4>
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
          </div>
          <div className="tab-content" id="pills-tabContentre">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* Successful Main Here */}
              <SuccessfulMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={successfulMain} />
            </div>
          </div>
        </div>
        <div className="common__body__section">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Successful [2]</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh3"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tabh3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-homeblocksh3"
                    type="button"
                    role="tab"
                    aria-controls="pills-homeblocksh3"
                    aria-selected="true"
                  >
                    Preview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tabh3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profileblcoksh3"
                    type="button"
                    role="tab"
                    aria-controls="pills-profileblcoksh3"
                    aria-selected="false"
                  >
                    Html Code
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent3">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh3"
              role="tabpanel"
              aria-labelledby="pills-home-tabh3"
            >
              {/* Hotel Successful Main */}
              <HotelSuccessfulMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={hotelSuccessfulMain} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksSuccessfulMain;
