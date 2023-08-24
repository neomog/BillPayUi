import Successful from "@/app/(recharge-bill)/successful/page";
import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import OrderMain from "../order/OrderMain";
import OrderSummeryMain from "../orderSummary/OrderSummeryMain";
import PaymentMain from "../payment/PaymentMain";
import { orderMain, orderSummeryMain, paymentMain, successful } from "./code";

const BlocksOrdersystemMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Order System</h2>
        {/* paymentsystem one */}
        <div className="common__body__section pb__60">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Order Now</h4>
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
              <OrderMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={orderMain} />
            </div>
          </div>
        </div>
        {/* paymentsystem two */}
        <div className="common__body__section">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Order Summary</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh2"
                role="tablist"
              >
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
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh2"
              role="tabpanel"
              aria-labelledby="pills-home-tabh2"
            >
              <OrderSummeryMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={orderSummeryMain} />
            </div>
          </div>
        </div>
        {/* paymentsystem three */}
        <div className="common__body__section pb__60">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Payment</h4>
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
              <PaymentMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={paymentMain} />
            </div>
          </div>
        </div>
        {/* paymentsystem four */}
        <div className="common__body__section pb__60">
          <div className="container">
            <div className="common__body__head pb__20">
              <h4>Payment Done</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh4"
                role="tablist"
              >
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
          </div>
          <div className="tab-content" id="pills-tabContent4">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh4"
              role="tabpanel"
              aria-labelledby="pills-home-tabh4"
            >
              <Successful />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* @TODO:Content */}
              <Code code={successful} />
            </div>
          </div>
        </div>
        {/* paymentsystem five */}
      </div>
    </BlockMain>
  );
};

export default BlocksOrdersystemMain;
