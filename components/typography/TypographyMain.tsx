import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import { bodyText, displayHeadings, headings } from "./code";

const TypographyMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Typography</h2>
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Headings</h4>
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
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="typography__wrapper">
                <div className="typography__items">
                  <h1>Heading h1</h1>
                  <h2>Heading h2</h2>
                  <h3>Heading h3</h3>
                  <h4>Heading h4</h4>
                  <h5>Heading h5</h5>
                  <h6>Heading h6</h6>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={headings} />
            </div>
          </div>
        </div>
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Display headings</h4>
            <ul className="nav nav-pills" id="pills-tabheads" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhead"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshead"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshead"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhead"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshead"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshead"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContenthead">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshead"
              role="tabpanel"
              aria-labelledby="pills-home-tabhead"
            >
              <div className="typography__wrapper">
                <div className="typography__items">
                  <h1 className="d1">Display 1</h1>
                  <h2 className="d2">Display 2</h2>
                  <h3 className="d3">Display 3</h3>
                  <h4 className="d4">Display 4</h4>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshead"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhead"
            >
              {/* @TODO:Content */}
              <Code code={displayHeadings} />
            </div>
          </div>
        </div>
        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Body Text</h4>
            <ul className="nav nav-pills" id="pills-tabtext" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabtext"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockstext"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockstext"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabtext"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokstext"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokstext"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContenttext">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockstext"
              role="tabpanel"
              aria-labelledby="pills-home-tabtext"
            >
              <div className="typography__wrapper">
                <div className="body__text">
                  <div className="body__text__item">
                    <span className="texttitle">Lead text</span>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                  <div className="body__text__item">
                    <span className="texttitle">XL text</span>
                    <p className="xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                  <div className="body__text__item">
                    <span className="texttitle">L text</span>
                    <p className="lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                  <div className="body__text__item">
                    <span className="texttitle">Md text</span>
                    <p className="md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                  <div className="body__text__item">
                    <span className="texttitle">Sm text</span>
                    <p className="sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                  <div className="body__text__item">
                    <span className="texttitle">Xs text</span>
                    <p className="xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin volutpat mollis egestas. Nam luctus facilisis
                      ultrices. Pellentesque volutpat ligula est, id ullamcorper
                      purus semper sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* Typography End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokstext"
              role="tabpanel"
              aria-labelledby="pills-profile-tabtext"
            >
              {/* @TODO:Content */}
              <Code code={bodyText} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default TypographyMain;
