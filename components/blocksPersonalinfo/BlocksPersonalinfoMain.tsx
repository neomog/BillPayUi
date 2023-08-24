import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import DebitCreaditMain from "../debitCreadit/DebitCreaditMain";
import FavoriteMian from "../favourites/FavoriteMian";
import LoginSecurityMain from "../loginSecurity/LoginSecurityMain";
import NotificationMain from "../notification/NotificationMain";
import ChangePasswordMain from "../passwordChange/ChangePasswordMain";
import PersonalInfoMain from "../personalInformation/PersonalInfoMain";
import TransactionMain from "../transaction/TransactionMain";
import {
  changePasswordMain,
  debitCreaditMain,
  favoriteMian,
  loginSecurityMain,
  notificationMain,
  personalInfoMain,
  transactionMain,
} from "./code";

const BlocksPersonalinfoMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Personal Info</h2>
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Personal Info</h4>
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
              <PersonalInfoMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* @TODO:Content */}
              <Code code={personalInfoMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section">
          <div className="common__body__head pb__20">
            <h4>Login/Security</h4>
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
              <LoginSecurityMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* @TODO:Content */}
              <Code code={loginSecurityMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Favourites</h4>
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
              <FavoriteMian />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* @TODO:Content */}
              <Code code={favoriteMian} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Credit/Debit Cards</h4>
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
              <DebitCreaditMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* @TODO:Content */}
              <Code code={debitCreaditMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Transaction</h4>
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
              <TransactionMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* @TODO:Content */}
              <Code code={transactionMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Change Password</h4>
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
          <div className="tab-content" id="pills-tabContent5ter">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5ts"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5ts"
            >
              <ChangePasswordMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5ts"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5ts"
            >
              {/* @TODO:Content */}
              <Code code={changePasswordMain} />
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Notifications</h4>
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
              <NotificationMain />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs"
            >
              {/* @TODO:Content */}
              <Code code={notificationMain} />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksPersonalinfoMain;
