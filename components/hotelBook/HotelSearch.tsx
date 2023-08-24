"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";

const room = [
  { id: 1, name: "Room" },
  { id: 2, name: "Single Room" },
  { id: 3, name: "Dobble Room" },
];

const HotelSearch = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="hotelbokking__categoris">
      <div className="container">
        <div className="hotelbooking__categoris__wrap">
          <div className="dating__body">
            <h5 className="hoteltitle">
              Book Domestic and isternational Hotels
            </h5>
            <div className="dating__body__box mb__30">
              <div className="dating__item dating__hidden">
                <input type="text" placeholder="Enter Locality City" />
              </div>
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
                {/* select here */}
                {/*<Select data={operator} />*/}
              </div>
              <div className="dating__item">
                <button type="submit" className="cmn__btn">
                  <span>Search Hotels</span>
                </button>
              </div>
            </div>
            <div className="boock__check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="bcheckbok3"
              />
              <label className="form-check-label" htmlFor="bcheckbok3">
                I Agree support terms & condition
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
