import Image from "next/image";
import Link from "next/link";
import bbel from "/public/img/payment/bbel.jpg";
import deltas from "/public/img/payment/deltas.jpg";
import nortex from "/public/img/payment/nortex.jpg";
import southzoon from "/public/img/payment/southzoon.jpg";
import coffee from "/public/img/svg/coffee.svg";
import radio from "/public/img/svg/radio.svg";
import singlebess from "/public/img/svg/singlebess.svg";
import singlecoffee from "/public/img/svg/singlecoffee.svg";
import wifis from "/public/img/svg/wifis.svg";

const AllTrainGrid = () => {
  return (
    <div className="flight__oneway__wrapper flight__grid__waywrapper">
      <div className="row g-4">
        {[bbel, deltas, nortex, southzoon].map((img, i) => (
          <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="flight__oneway__item2">
              <div className="flight__oneway__inner2">
                <div className="table__two">
                  <ul className="bgwhite headline__text d-flex justify-content-center circle__input">
                    <li className="fz-24 fw-400 lato dtext">Train Ticket</li>
                  </ul>
                  <div className="tabletwo__body  justify-content-between w-100">
                    <div className="w-100 tablebg">
                      <span className="d-grid dadhes pt__30 pb__20 justify-content-center">
                        <span className="delta mb__10 d-block">
                          <Image src={img} alt="img" />
                        </span>
                        <span className="fz-16 fw-400 lato">BBEL Express</span>
                      </span>
                      <ul className="table__conponent align-items-center dadhes d-flex justify-content-between">
                        <li>
                          <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                            8:10 am
                          </span>
                          <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                            am
                          </span>
                          <span className="fz-16 fw-400 lato">NY, US</span>
                        </li>
                        <li>
                          <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                            8h
                          </span>
                          <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                            10m
                          </span>
                          <span className="fz-16 d-block fw-400 lato">
                            12+s
                          </span>
                          <span className="fz-16 fw-400 lato">top</span>
                        </li>
                        <li>
                          <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                            10:20
                          </span>
                          <span className="fz-18 d-block fw-600 lato dtext">
                            pm
                          </span>
                          <span className="fz-16 fw-400 lato">Dubai</span>
                        </li>
                      </ul>
                    </div>
                    <div className="right__tableprice d-flex justify-content-center w-100 tablebg">
                      <div className="boxes">
                        <span className="dollartext mb-1 fz-18 fw-500 lato d-flex align-items-center gap-2">
                          $99{" "}
                          <span className="troth fz-16 fw-400 lato">$111</span>
                        </span>
                        <span className="fz-16 dtext d-block mb__15 fw-400 lato">
                          Off day : Friday
                        </span>
                        <Link href="/train-bookingsystem" className="cmn__btn">
                          <span>Book Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flight__wayfooter circle__input d-flex align-items-center justify-content-between">
                  <span className="fz-16 fw-400 lato dtext">
                    Refundable <span className="gratext lato">$5 eCash</span>
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <span className="dicon d-flex align-items-center justify-content-center">
                      <Image src={coffee} alt="svg" />
                    </span>
                    <span className="dicon d-flex align-items-center justify-content-center">
                      <Image src={singlecoffee} alt="svg" />
                    </span>
                    <span className="dicon d-flex align-items-center justify-content-center">
                      <Image src={radio} alt="svg" />
                    </span>
                    <span className="dicon d-flex align-items-center justify-content-center">
                      <Image src={singlebess} alt="svg" />
                    </span>
                    <span className="dicon d-flex align-items-center justify-content-center">
                      <Image src={wifis} alt="svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrainGrid;
