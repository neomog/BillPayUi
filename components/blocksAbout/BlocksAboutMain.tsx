import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Refer1 from "../home/Refer";
import Refer3 from "../homeThree/Refer";
import Refer2 from "../homeTwo/Refer";
import { refer1, refer2, refer3, support } from "./code";

const BlocksAboutMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">About & Refer</h2>
        {/* home one */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>About/Refer [1]</h4>
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
              <Refer1 />
              {/* Home End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={refer1} />
            </div>
          </div>
        </div>
        {/* home two */}
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>About/Refer [2]</h4>
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
              <Refer2 />
              {/* Home two End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={refer2} />
            </div>
          </div>
        </div>
        {/* home three */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>About/Refer [3]</h4>
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
              <Refer3 />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={refer3} />
            </div>
          </div>
        </div>

        {/* home six */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>About/Refer [4]</h4>
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
              {/*<Support />*/}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5ts"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5ts"
            >
              {/* @TODO:Content */}
              <Code code={support} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksAboutMain;
