import Image from "next/image";
import Link from "next/link";
import aairliness from "/public/img/payment/aairliness.jpg";
import deltas from "/public/img/payment/deltas.jpg";
import jalairlines from "/public/img/payment/jalairlines.jpg";
import royelairlines from "/public/img/payment/royelairlines.jpg";
import coffee from "/public/img/svg/coffee.svg";
import radio from "/public/img/svg/radio.svg";
import singlebess from "/public/img/svg/singlebess.svg";
import singlecoffee from "/public/img/svg/singlecoffee.svg";
import wifis from "/public/img/svg/wifis.svg";

const AllFlightList = () => {
  return (
    <div className="flight__oneway__wrapper">
      {[deltas, aairliness, jalairlines, royelairlines].map((img, i, arr) => (
        <div
          key={i}
          className={`flight__oneway__item2 ${
            arr.length - 1 !== i ? "mb__30" : ""
          }`}
        >
          <div className="flight__oneway__inner2">
            <div className="table__two">
              <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
                <li className="fz-18 fw-500 lato dtext">Airlines</li>
                <li className="fz-18 fw-500 lato dtext">Departure</li>
                <li className="fz-18 fw-500 lato dtext">Duration</li>
                <li className="fz-18 fw-500 lato dtext">Arrival</li>
                <li className="fz-18 fw-500 lato dtext">Price</li>
              </ul>
              <div className="tabletwo__body d-flex justify-content-between w-100">
                <div className="w-100">
                  <ul className="table__conponent align-items-center bbottom tablebg d-flex justify-content-between">
                    <li>
                      <span className="delta mb__10 d-block">
                        <Image src={img} alt="img" />
                      </span>
                      <span className="fz-16 fw-400 lato">Delta Air Lines</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        80:10 am
                      </span>
                      <span className="fz-16 fw-400 lato">NY, US</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        2h 10m
                      </span>
                      <span className="fz-16 fw-400 lato">( Non-Stop )</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        10:20 am
                      </span>
                      <span className="fz-16 fw-400 lato">Dubai</span>
                    </li>
                  </ul>
                  <ul className="table__conponent align-items-center tablebg d-flex justify-content-between">
                    <li>
                      <span className="delta mb__10 d-block">
                        <Image src={img} alt="img" />
                      </span>
                      <span className="fz-16 fw-400 lato">Delta Air Lines</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        80:10 am
                      </span>
                      <span className="fz-16 fw-400 lato">NY, US</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        2h 10m
                      </span>
                      <span className="fz-16 fw-400 lato">( Non-Stop )</span>
                    </li>
                    <li>
                      <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                        10:20 am
                      </span>
                      <span className="fz-16 fw-400 lato">Dubai</span>
                    </li>
                  </ul>
                </div>
                <div className="right__tableprice tablebg">
                  <span className="fz-16 fw-400 dtext lato d-block">
                    BHW 54657
                  </span>
                  <span className="gratext fz-26 d-block fw-400 lato">25%</span>
                  <span className="fz-16 mb-1 d-block fw-400 lato dtext">
                    Discount
                  </span>
                  <span className="dollartext d-block mb__20 fz-18 fw-500 lato d-flex align-items-center gap-2">
                    $399 <span className="troth fz-16 fw-400 lato">$499</span>
                  </span>
                  <Link href="/flight-confirm-details" className="cmn__btn">
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flight__wayfooter circle__input d-flex align-items-center justify-content-between">
              <span className="fz-16 fw-400 lato dtext">Flight Details</span>
              <div className="d-flex align-items-center gap-3">
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
              <span className="fz-16 fw-400 lato dtext">
                Refundable <span className="gratext lato">$5 eCash</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllFlightList;
