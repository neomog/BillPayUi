import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";
import { contactForm, contactInfo } from "./code";

const BlocksContactMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Contact us</h2>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Contact</h4>
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
              <ContactForm />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={contactForm} />
            </div>
          </div>
        </div>

        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Contact Help</h4>
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
              <ContactInfo />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={contactInfo} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksContactMain;
