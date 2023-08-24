import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import KnowledgeBase from "../help/KnowledgeBase";
import Solution from "../help/Solution";
import HelpKnowledgeMain from "../helpKnowledge/HelpKnowledgeMain";
import HelpKnowledgeDetailsMain from "../helpKnowledgeDetails/HelpKnowledgeDetailsMain";
import HelpSupportMain from "../helpSupport/HelpSupportMain";
import SubmitTicketMain from "../submitTicket/SubmitTicketMain";
import VideoTutorialMain from "../videoTutorial/VideoTutorialMain";
import {
  helpKnowledgeDetailsMain,
  helpKnowledgeMain,
  helpSupportMain,
  knowledgeBase,
  solution,
  submitTicketMain,
  videoTutorialMain,
} from "./code";

const BlocksSupportMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Help Support</h2>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Help [1]</h4>
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
              <KnowledgeBase />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={knowledgeBase} />
            </div>
          </div>
        </div>

        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Help [2]</h4>
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
              <Solution />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={solution} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Help [3]</h4>
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
              <HelpSupportMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={helpSupportMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Help [4]</h4>
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
              <HelpKnowledgeMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* @TODO:Content */}
              <Code code={helpKnowledgeMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Help Details [5]</h4>
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
          <div className="tab-content" id="pills-tabContent5tss">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5"
            >
              <HelpKnowledgeDetailsMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* @TODO:Content */}
              <Code code={helpKnowledgeDetailsMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Video Tutorial [6]</h4>
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
              <VideoTutorialMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5ts"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5ts"
            >
              {/* @TODO:Content */}
              <Code code={videoTutorialMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Submit Ticket [7]</h4>
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
              <SubmitTicketMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs"
            >
              {/* @TODO:Content */}
              <Code code={submitTicketMain} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksSupportMain;
