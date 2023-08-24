"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";

const room = [
  { id: 1, name: "Room" },
  { id: 2, name: "Single Room" },
  { id: 3, name: "Dobble Room" },
];

const Search = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="hotelbooking__categoris__wrap position-relative z-1">
      <div className="dating__body">
        <div className="dating__body__box">
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
      </div>
    </div>
  );
};

export default Search;
