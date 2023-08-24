import Image from "next/image";
import Link from "next/link";
import appplay from "/public/img/app/appplay.png";
import appstore from "/public/img/app/appstore.png";
import apptwo from "/public/img/app/apptwo.png";

const AppStore = () => {
  return (
    <section className="app__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row flex-row-reverse justify-content-between align-items-center">
          <div
            className="col-xl-6 col-lg-7 col-md-7 wow fadeInDown"
            data-wow-duration="1.5s"
          >
            <div className="app__content">
              <div className="section__header">
                <h2>Instructions to Purchase Train Tickets</h2>
                <p className="apptext">
                  Download our app for the fastest, most convenient way to
                  Booking System.
                </p>
                <ul className="train__list pb__40">
                  <li>
                    <span className="icons">
                      <i className="material-symbols-outlined">done</i>
                    </span>
                    <span className="textss">
                      Tickets can be bought online five days in advance.
                    </span>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="material-symbols-outlined">done</i>
                    </span>
                    <span className="text">
                      In case of payment or transaction failure, the deducted
                      amount would be refunded by your bank within 8 business
                      days.
                    </span>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="material-symbols-outlined">done</i>
                    </span>
                    <span className="text">
                      In case money has been deducted from your card / mobile
                      wallet but you have not received a ticket confirmation,
                      the deducted amount would be refunded by your bank within
                      8 business days.
                    </span>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="material-symbols-outlined">done</i>
                    </span>
                    <span className="text">
                      Download the official app published by Rechargio from App
                      store
                    </span>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="material-symbols-outlined">done</i>
                    </span>
                    <span className="text">
                      In case of passengers downloading fake apps or any other
                      app from app store which claim to sell train tickets of
                      Rechargio, the authorities will not take any liability.
                    </span>
                  </li>
                </ul>
                <div className="d-flex gap-3 align-items-center">
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appplay} alt="img" />
                  </Link>
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appstore} alt="img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-5 wow fadeInUp"
            data-wow-duration="2.5s"
          >
            <div className="app__thumb app__thumb__two">
              <Image src={apptwo} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
