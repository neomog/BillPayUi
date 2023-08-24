"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import fastpay from "/public/img/payment/fastpay.png";
import mastercard from "/public/img/payment/mastercard.png";
import payoneer from "/public/img/payment/payoneer.png";
import paypals from "/public/img/payment/paypals.png";
import visas from "/public/img/payment/visas.png";
import comments from "/public/img/svg/comments.svg";

const adult = [
  { id: 1, name: "Adults" },
  { id: 2, name: "Adults One" },
  { id: 3, name: "Adults Two" },
];

const children = [
  { id: 1, name: "Children" },
  { id: 2, name: "Children One" },
  { id: 3, name: "Children Two" },
];

const roomType = [
  { id: 1, name: "Room type" },
  { id: 2, name: "luxury" },
  { id: 3, name: "single" },
];

const Cheakout = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="cheakout__rightbar__box">
      <h5 className="base mb__20 text-center">Cheakout</h5>
      <div className="dating__body check__hoteldetaislbody">
        <div className="dating__body__box">
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
          <div className="dating__item dating__inetial select__border">
            {/* Select Here */}
            <Select data={adult} />
          </div>
          <div className="dating__item dating__inetial select__border">
            {/* Select Here */}
            <Select data={children} />
          </div>
          <div className="dating__inetial roomtype select__border">
            {/* Select Here */}
            <Select data={roomType} />
          </div>
        </div>
      </div>
      <div className="extra__service__item mt__30">
        <span className=" lato fz-18 borderb text-start d-block fw-600 pb__15 mb__15 extra-title">
          Extra Service
        </span>
        <div className="common__typeproperty">
          <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
            <div className="radio__left d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="proper1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="proper1">
                <span className="fz-16 lato fw-400 dtext">Vat</span>
              </label>
            </div>
            <span className="radio__right fz-16 fw-400 dtext lato">
              $8 / per night
            </span>
          </div>
          <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
            <div className="radio__left d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="proper2"
              />
              <label className="form-check-label" htmlFor="proper2">
                <span className="fz-16 lato fw-400 dtext">Cleaning Fee</span>
              </label>
            </div>
            <span className="radio__right fz-16 fw-400 dtext lato">$11</span>
          </div>
          <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
            <div className="radio__left d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="proper3"
              />
              <label className="form-check-label" htmlFor="proper3">
                <span className="fz-16 lato fw-400 dtext">Airport Pickup</span>
              </label>
            </div>
            <span className="radio__right fz-16 fw-400 dtext lato">$17</span>
          </div>
          <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
            <div className="radio__left d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="proper4"
              />
              <label className="form-check-label" htmlFor="proper4">
                <span className="fz-16 lato fw-400 dtext">Wine & Dine</span>
              </label>
            </div>
            <span className="radio__right fz-16 fw-400 dtext lato">
              $40 / per person
            </span>
          </div>
          <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
            <div className="radio__left d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="proper5"
              />
              <label className="form-check-label" htmlFor="proper5">
                <span className="fz-16 lato fw-400 dtext">Parking</span>
              </label>
            </div>
            <span className="radio__right fz-16 fw-400 dtext lato">free</span>
          </div>
        </div>
      </div>
      <div className="extra__service__item mt__30">
        <span className=" lato fz-18 borderb d-block text-start fw-600 pb__15 mb__15 extra-title">
          Your price
        </span>
        <span className="fz-16 mb__30 d-flex gap-2 fw-400 lato dtext">
          <span className="tactive">$ 65</span>/ per room
        </span>
        <div className="d-flex justify-content-center mb__30">
          <Link href="/hotel-details-confirm" className="cmn__btn">
            <span>Book Now</span>
          </Link>
        </div>
        <div className="payment__cards d-flex align-items-center gap-2">
          <Link href="/URL:void(0)">
            <Image src={paypals} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={visas} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={fastpay} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={payoneer} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)" className="master">
            <Image src={mastercard} alt="payment-card" />
          </Link>
        </div>
        <span className="fz-16 fw-400 lato mb__30 text-center d-block booking-time pt__20">
          NB : Booking at 12:00 pm to 10:00 am
        </span>
        <div className="comment__chatboxright d-flex align-items-center gap-3">
          <div className="icon d-flex align-items-center justify-content-center">
            <Image src={comments} alt="img" />
          </div>
          <div className="content">
            <span className="dtext fz-24 fw-700 mb-1">Chat box</span>
            <p className="dtext lato fz-16 fw-400">
              Chat with us if you need any help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheakout;
