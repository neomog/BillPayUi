import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Banner1 from "../home/Banner";
import Banner3 from "../homeThree/Banner";
import Banner2 from "../homeTwo/Banner";
import HotelBook from "../hotelBook/Banner";
import TrainBook from "../trainBook/Banner";
import {
  banner1,
  banner2,
  banner3,
  bookingLanding1,
  bookingLanding2,
  bookingLanding3,
  busBook,
  carsBook,
  flightBook,
  hotelBook,
  trainBook,
} from "./code";

const BlocksHomeMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Home & Hero</h2>
        {/* home one */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Hero One</h4>
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
              {/* Home Here */}
              <Banner1 />
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={banner1} />
            </div>
          </div>
        </div>
        {/* home two */}
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Hero Two</h4>
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
              {/* Home two Here */}
              <Banner2 />
              {/* Home two End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={banner2} />
            </div>
          </div>
        </div>
        {/* home three */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Hero Three</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh3" role="tablist">
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
          <div className="tab-content" id="pills-tabContent3">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh3"
              role="tabpanel"
              aria-labelledby="pills-home-tabh3"
            >
              <Banner3 />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={banner3} />
            </div>
          </div>
        </div>
        {/* home four */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Booking One</h4>
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
              {/*<BookingLanding1 />*/}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* @TODO:Content */}
              <Code code={bookingLanding1} />
            </div>
          </div>
        </div>
        {/* home five */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Booking Two</h4>
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
          <div className="tab-content" id="pills-tabContent5">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5"
            >
              {/*<BookingLanding2 />*/}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* @TODO:Content */}
              <Code code={bookingLanding2} />
            </div>
          </div>
        </div>
        {/* home six */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Booking Three</h4>
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
          <div className="tab-content" id="pills-tabContent5s">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5ts"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5ts"
            >
              {/*<BookingLanding3 />*/}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5ts"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5ts"
            >
              {/* @TODO:Content */}
              <Code code={bookingLanding3} />
            </div>
          </div>
        </div>
        {/* home hotel book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Hotel Booking</h4>
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
              {/* Home Here */}
              <HotelBook />
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs"
            >
              {/* @TODO:Content */}
              <Code code={hotelBook} />
            </div>
          </div>
        </div>
        {/* home flight book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Flight Booking</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs1"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs1"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs1"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs1"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs1">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs1"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs1"
            >
              {/* Home Here */}
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs1"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs1"
            >
              {/* @TODO:Content */}
              <Code code={flightBook} />
            </div>
          </div>
        </div>
        {/* home Train book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Train Booking</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs2"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs2"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs2"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs2l"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs2l"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs2l"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs2">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs2"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs2"
            >
              {/* Home Here */}
              <TrainBook />
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs2l"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs2l"
            >
              {/* @TODO:Content */}
              <Code code={trainBook} />
            </div>
          </div>
        </div>
        {/* home Bus book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Bus Booking</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs3"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs3"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs3"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs2bus"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs3"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs3"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs3">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs3"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs3"
            >
              {/* Home Here */}
              {/*<BusBook />*/}
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs2bus"
            >
              {/* @TODO:Content */}
              <Code code={busBook} />
            </div>
          </div>
        </div>
        {/* home Car book */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Car Booking</h4>
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
          <div className="tab-content" id="pills-tabContentrehs3ls">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs4"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs4"
            >
              {/* Home Here */}
              {/* Home End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs4"
            >
              {/* @TODO:Content */}
              <Code code={carsBook} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksHomeMain;
