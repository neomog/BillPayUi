import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import AppStore from "../home/AppStore";
import HowItWork from "../homeThree/HowItWork";
import HowItWork2 from "../homeTwo/HowItWork";
import RoomsSuites from "../hotelBook/RoomsSuites";
import {
  appStore,
  busFacilities,
  howItWork,
  howItWork2,
  popularDestinations,
  roomsSuites,
  travelsDiscount,
} from "./code";

const BlocksAllblocksMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">All Blocks</h2>
        {/* home one */}
        <div className="common__body__section pb__60">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Section [1]</h4>
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
              {/* Rooms Suites */}
              <RoomsSuites />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={roomsSuites} />
            </div>
          </div>
        </div>
        {/* home two */}
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Section [2]</h4>
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
              {/* App Store Here */}
              <AppStore />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={appStore} />
            </div>
          </div>
        </div>

        {/* home four */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Section [3]</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh4" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh4"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh4"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh4"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh4"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent4">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh4"
              role="tabpanel"
              aria-labelledby="pills-home-tabh4"
            >
              {/* HowIt Work */}
              <HowItWork />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* @TODO:Content */}
              <Code code={howItWork} />
            </div>
          </div>
        </div>
        {/* home five */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Section [4]</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh5" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh5"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh5"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent55s">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5"
            >
              <HowItWork2 />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* @TODO:Content */}
              <Code code={howItWork2} />
            </div>
          </div>
        </div>
        {/* home six */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Section [5]</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblocksh5ts"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh5ts"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh5ts"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh5ts"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh5ts"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh5ts"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh5ts"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent5">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5ts"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5ts"
            >
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5ts"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5ts"
            >
              {/* @TODO:Content */}
              <Code code={popularDestinations} />
            </div>
          </div>
        </div>
        {/* home hotel book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Section [6]</h4>
            <ul className="nav nav-pills" id="pills-tabblockshs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs"
            >
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs"
            >
              {/* @TODO:Content */}
              <Code code={travelsDiscount} />
            </div>
          </div>
        </div>

        {/* home Car book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Section [7]</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs4"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs4"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs4"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs4"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs4"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs34">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs4"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs4"
            >
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs4"
            >
              {/* @TODO:Content */}
              <Code code={busFacilities} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksAllblocksMain;
