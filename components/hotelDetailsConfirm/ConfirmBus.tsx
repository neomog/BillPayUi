"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import condetails1 from "/public/img/details/condetails1.jpg";
import condetails2 from "/public/img/details/condetails2.jpg";
import bedss from "/public/img/svg/bedss.svg";
import facilities_bussen from "/public/img/svg/facilities-bussen.svg";
import gum from "/public/img/svg/gum.svg";
import info_cancel from "/public/img/svg/info-cancel.svg";
import mlocation from "/public/img/svg/mlocation.svg";
import person from "/public/img/svg/person.svg";
import singlebess from "/public/img/svg/singlebess.svg";
import star from "/public/img/svg/star.svg";
import wifis from "/public/img/svg/wifis.svg";

const people = [
  { id: 1, name: "1 Room/ 1 People" },
  { id: 2, name: "One Room" },
  { id: 3, name: "One People" },
];

const ConfirmBus = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="hotel__confrim__body">
      <h3 className="xs-28 dtext mb__30 fw-700">Confirm Hotel</h3>
      <div className="skyp__hotels__wrap mb__40">
        <div className="d-flex thumb__content gap-4 align-items-center">
          <div className="left__thumb gap-2 d-flex align-items-center">
            <Image src={condetails1} className="img-fluid" alt="img" />
            <Image src={condetails2} className="img-fluid" alt="img" />
          </div>
          <div className="skyp__right__content">
            <div className="d-flex mb__15 align-items-center justify-content-between">
              <h4 className="dtext xs-28">Skyp Hotel</h4>
              <span className="d-flex fz-18 fw-400 lato dtext align-items-center gap-3">
                <Image src={star} alt="star" />
                40.7
              </span>
            </div>
            <div className="fz-18 mb__15 fw-400 lato dtext d-flex align-items-center gap-2">
              <Image src={mlocation} alt="img" />
              Paris, France
            </div>
            <div className="confirms__icons mb__15 d-flex align-items-center gap-2">
              <span className="icon d-flex align-items-center justify-content-center">
                <Image src={facilities_bussen} alt="svg" />
              </span>
              <span className="icon d-flex align-items-center justify-content-center">
                <Image src={wifis} alt="svg" />
              </span>
              <span className="icon d-flex align-items-center justify-content-center">
                <Image src={bedss} alt="svg" />
              </span>
              <span className="icon d-flex align-items-center justify-content-center">
                <Image src={gum} alt="svg" />
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span className="icon d-flex align-items-center justify-content-center">
                  <Image src={singlebess} alt="svg" />
                </span>
                <span className="fz-18 fw-400 lato textfive">
                  Single bed room
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="icon d-flex align-items-center justify-content-center">
                  <Image src={person} alt="svg" />
                </span>
                <span className="fz-18 fw-400 lato textfive">2 Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dating__body update__skypinfo mb__40">
        <div className="dating__body__box align-items-end gap-2 justify-content-between">
          <div className="date__grpp">
            <span className="dtext mb-2 d-block fz-18 fw-500 lato">
              Check In
            </span>
            <div className="dating__item">
              {/* Date Picker */}
              <DatePicker
                placeholderText="Check In"
                selected={checkInDate}
                onChange={(date: any) => setCheckInDate(date)}
              />
              <span className="calendaricon">
                <i className="material-symbols-outlined">calendar_month</i>
              </span>
            </div>
          </div>
          <div className="date__grpp">
            <span className="dtext mb-2 d-block fz-18 fw-500 lato">
              Check Out
            </span>
            <div className="dating__item">
              {/* Date Picker */}
              <DatePicker
                placeholderText="Check Out"
                selected={checkOutDate}
                onChange={(date: any) => setCheckOutDate(date)}
              />
              <span className="calendaricon">
                <i className="material-symbols-outlined">calendar_month</i>
              </span>
            </div>
          </div>
          <div className="date__grpp">
            <span className="dtext mb-2 d-block fz-18 fw-500 lato">
              Rooms & Guests
            </span>
            <div className="dating__item dating__inetial select__border">
              {/* select here */}
              {/*<Select data={operator} />*/}
            </div>
          </div>
          <div className="date__grpp">
            <Link href="/URL:void(0)" className="cmn__btn">
              <span>Update Info</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="house__rules mb__30">
        <h4 className="mb__20 dtext">House Rules</h4>
        <ul className="house__list d-flex align-items-center flex-wrap">
          <li>Check-in: 12:00 pm - 10:00 am</li>
          <li>No smokin</li>
          <li>No pets allowed</li>
          <li>Checkout: 09:00 am</li>
          <li>Drug addiction not allowed</li>
          <li>No parties or events</li>
        </ul>
      </div>
      <div className="cancellation__two">
        <div className="d-flex mb__15 align-items-center gap-3">
          <div className="icons d-flex align-items-center justify-content-center">
            <Image src={info_cancel} alt="svg" />
          </div>
          <h5 className="dtext fw-700">Cancellation</h5>
        </div>
        <p className="fz-16 fw-400 lato dtext">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text.
        </p>
      </div>
    </div>
  );
};

export default ConfirmBus;
