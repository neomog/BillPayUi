import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import available from "/public/img/allseat/available.png";
import booked from "/public/img/allseat/booked.png";
import seat_amain from "/public/img/allseat/seat-amain.png";
import seat_bmain from "/public/img/allseat/seat-bmain.png";
import seat_smain from "/public/img/allseat/seat-smain.png";
import selectted from "/public/img/allseat/selectted.png";
import stering from "/public/img/allseat/stering.png";

const select = [
  { id: 1, name: "Select" },
  { id: 2, name: "1" },
  { id: 3, name: "2" },
];

const select1 = [
  { id: 1, name: "Select" },
  { id: 2, name: "1" },
  { id: 3, name: "2" },
];

const BookingSystemMain = () => {
  return (
    <section className="train__bookingsystem pt__60 pb__60">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-5">
            <div className="busbooking__systemjourney">
              <div className="dating__body">
                <div className="dating__body__box">
                  <label className="d-block fz-24 dtext lato ">
                    Journey Date
                  </label>
                  <div className="dating__item dating__hidden mb__10">
                    <div
                      id="datepicker"
                      className="input-group date"
                      data-date-format="dd-mm-yyyy"
                    >
                      <input
                        className="form-control"
                        type="text"
                        placeholder="00/00/00"
                        readOnly
                      />
                      <span className="calendaricon">
                        <i className="material-symbols-outlined">
                          calendar_month
                        </i>
                      </span>
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <label className="d-block fz-24 dtext lato">
                    Pickup Point
                  </label>
                  <div
                    className="dating__item select__border mb__10"
                    id="jour2"
                  >
                    {/* select here */}
                    <Select data={select} />
                  </div>
                  <label className="d-block fz-24 dtext lato">
                    Dropping Point
                  </label>
                  <div
                    className="dating__item select__border mb__30"
                    id="jour3"
                  >
                    {/* select here */}
                    <Select data={select1} />
                  </div>
                  <div className="dating__item">
                    <button type="submit" className="cmn__btn">
                      <span>Search Bus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1"></div>
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
            <div className="busbooking__systemseat">
              <div className="seat__apply">
                <div className="d-flex flex-wrap justify-content-between gap-4 align-items-center">
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
              </div>
              <div className="seat__linemain__wrapper">
                <div className="d-flex align-items-center mb__20 justify-content-between gap-2">
                  <span className="fz-18 fw-600 lato dtext">Select Seats</span>
                  <span className="fz-18 fw-600 lato d-block gratext">
                    (1 Selected)
                  </span>
                </div>
                <div className="d-flex align-items-center mb__20 justify-content-between gap-2">
                  <span className="fz-24 fw-400 lato dtext">Door</span>
                  <span className="img">
                    <Image src={stering} alt="img" />
                  </span>
                </div>
                <div className="d-flex justify-content-between gap-2">
                  <div className="seat__linemaintain1">
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_smain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                  </div>
                  <div className="seat__linemaintain1">
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                    </div>
                    <div className="seta__box d-flex gap-3 mb__10">
                      <Link href="/URL:void(0)">
                        <Image src={seat_bmain} alt="seat" />
                      </Link>
                      <Link href="/URL:void(0)">
                        <Image src={seat_amain} alt="seat" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="seta__box gap__custom d-flex justify-content-between mb__10">
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_bmain} alt="seat" />
                  </Link>
                  <Link href="/URL:void(0)">
                    <Image src={seat_amain} alt="seat" />
                  </Link>
                </div>
                <div className="seat__confirm mt__30 text-center">
                  <Link href="/bus-confirm-details" className="cmn__btn">
                    <span>Confirm Seat</span>
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

export default BookingSystemMain;
