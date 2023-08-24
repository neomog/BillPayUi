import selectCoachData from "@/data/selectCoachData";
import Image from "next/image";
import Link from "next/link";
import TrainSelect from "./TrainSelect";
import available from "/public/img/allseat/available.png";
import booked from "/public/img/allseat/booked.png";
import selectted from "/public/img/allseat/selectted.png";

const TrainBookingsystemMain = () => {
  return (
    <section className="train__bookingsystem pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="trainbooking__system">
              <div className="flight__oneway__item2">
                <div className="flight__oneway__inner2">
                  <div className="table__two">
                    <div className="tabletwo__body d-flex justify-content-between w-100">
                      <div className="w-100">
                        <ul className="table__conponent align-items-center tablebg d-flex justify-content-between">
                          {[
                            ["BBEL Express", "7721"],
                            ["80:10 am", "NY, US"],
                            ["8h 10m", "12+stop"],
                            ["10:20 pm", "Dubai"],
                          ].map(([title, des], i) => (
                            <li key={i}>
                              <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                {title}
                              </span>
                              <span className="fz-16 fw-400 lato">{des}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ticket__availablebook  justify-content-between align-items-center d-flex">
                <div className="search__item">
                  <div className="common__sidebar__content">
                    <div className="common__typeproperty">
                      {[
                        "AC_B",
                        "AC_S",
                        "Snigdha",
                        "F_Chair",
                        "S_Chair",
                        "Shovon",
                      ].map((itm, i, arr) => (
                        <div
                          key={i}
                          className={`type__radio ${
                            arr.length - 1 !== i ? "mb__10" : ""
                          } d-flex align-items-center justify-content-between`}
                        >
                          <div className="radio__left d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`proper1${i}`}
                              defaultChecked={i === 0 ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`proper1${i}`}
                            >
                              <span className="fz-16 lato fw-400 dtext">
                                {itm}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ticekt__dateavailable d-flex">
                  <div className="tic__left">
                    {["15-12-22", "16-12-22", "17-12-22"].map((itm, i) => (
                      <div key={i} className="boxex">
                        <span className="fz-16 fw-400 lato dtext mb-1 d-block">
                          {itm}
                        </span>
                        <div className="type__radio d-flex align-items-center justify-content-between">
                          <div className="radio__left d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`properavails${i}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`properavails${i}`}
                            >
                              <span className="fz-16 lato fw-400 gratext">
                                Available
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tic__left border__left">
                    {["18-12-22", "19-12-22", "20-12-22"].map((itm, i) => (
                      <div key={i} className="boxex">
                        <span className="fz-16 fw-400 lato dtext mb-1 d-block">
                          {itm}
                        </span>
                        <div className="type__radio d-flex align-items-center justify-content-between">
                          <div className="radio__left d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`properavailsr${i}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`properavailsr${i}`}
                            >
                              <span className="fz-16 lato fw-400 gratext">
                                Available
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="seat__apply mt__40 mb__30">
                <div className="d-flex flex-wrap gap-4 mb__20 align-items-center">
                  <div className="d-flex fz-16 gap-2 fw-400 lato dtext align-items-center">
                    <Image src={selectted} alt="select" />
                    Selected
                  </div>
                  <div className="d-flex fz-16 gap-2 fw-400 lato dtext align-items-center">
                    <Image src={booked} alt="select" />
                    Booked
                  </div>
                  <div className="d-flex fz-16 gap-2 fw-400 lato dtext align-items-center">
                    <Image src={available} alt="select" />
                    Available
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <span className="fz-18 fw-600 lato dtext">Select Coach</span>
                  <span className="fz-18 fw-600 lato d-block gratext">
                    (1 Selected)
                  </span>
                </div>
                <ul className="number__ticket mt-4 d-flex flex-wrap">
                  {selectCoachData.map((img, i) => (
                    <li key={i}>
                      <Link href="/URl:void(0)">
                        <Image src={img} alt="seat" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="seat__linemain__wrapper">
                <div className="d-flex align-items-center mb__30 justify-content-between gap-2">
                  <span className="fz-18 fw-600 lato dtext">Select Seats</span>
                  <span className="fz-18 fw-600 lato d-block gratext">
                    (1 Selected)
                  </span>
                </div>
                {/* Train Select  */}
                <TrainSelect />
              </div>
              <div className="seatline__footer border__top mb__20 mt__30 pt__40">
                <div className="incomponent__box justify-content-center d-flex">
                  <Link href="/train-confirm-details" className="cmn__btn">
                    <span>Continue Purchase</span>
                  </Link>
                  <Link
                    href="/train-bookingsystem"
                    className="cmn__btn outline__btn"
                  >
                    <span>Cancel</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainBookingsystemMain;
