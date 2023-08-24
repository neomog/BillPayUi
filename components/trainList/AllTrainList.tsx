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

const AllTrainList = () => {
  return (
    <div className="flight__oneway__wrapper">
      {[bbel, deltas, nortex, southzoon].map((img, i, arr) => (
        <div
          key={i}
          className={`flight__oneway__item ${
            arr.length - 1 !== i ? "mb__30" : ""
          }`}
        >
          <div className="flight__oneway__inner">
            <table className="table vertical-middle">
              <thead>
                <tr className="bgwhite circle__input">
                  <th className="fz-18 fw-500 lato dtext">Bus Name</th>
                  <th className="fz-18 fw-500 lato dtext">Departure</th>
                  <th className="fz-18 fw-500 lato dtext">Duration</th>
                  <th className="fz-18 fw-500 lato dtext">Arrival</th>
                  <th className="fz-18 fw-500 lato dtext">Price</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <tr>
                  <td className="tb-bg">
                    <span className="delta mb__10 d-block">
                      <Image src={img} alt="img" />
                    </span>
                    <span className="fz-16 d-block mb__10 fw-400 lato">
                      BBEL Enterprise
                    </span>
                    <span className="fz-16 fw-400 lato dtext">AC_Sleeper</span>
                  </td>
                  <td className="tb-bg">
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      80:10 am
                    </span>
                    <span className="fz-16 fw-400 lato">NY, US</span>
                  </td>
                  <td className="tb-bg">
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      8h 10m
                    </span>
                    <span className="fz-16 fw-400 lato">12+stop</span>
                  </td>
                  <td className="tb-bg">
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      10:20 am
                    </span>
                    <span className="fz-16 fw-400 lato">Les vignes</span>
                  </td>
                  <td className="tb-bg">
                    <span className="dollartext mb__10 fz-18 fw-500 lato d-flex align-items-center gap-2">
                      $99 <span className="troth fz-16 fw-400 lato">$111</span>
                    </span>
                    <span className="fz-16 fw-400 dtext lato d-block mb__15">
                      Odd day : Friday
                    </span>
                    <Link href="/bus-bookingsystem" className="cmn__btn">
                      <span>Book Now</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flight__wayfooter circle__input d-flex align-items-center justify-content-between">
              <span className="fz-16 fw-400 lato dtext">Bus Details</span>
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

export default AllTrainList;
