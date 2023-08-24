import Image from "next/image";
import Link from "next/link";
import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import { error } from "./code";
import error_ing from "/public/img/signup/error.png";

const BlocksErrorMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Error Page</h2>
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Error</h4>
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
              <section className="error__section d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7">
                      <div className="error__content">
                        <Image
                          src={error_ing}
                          className="error__thumb img-fluid"
                          alt="error"
                        />
                        <h2>Oops! Page Not Found</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <Link href="/" className="cmn__btn">
                          <span>Back to home</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={error} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksErrorMain;
