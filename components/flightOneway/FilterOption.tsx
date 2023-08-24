"use client";

import Image from "next/image";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import dropdown from "/public/img/svg/dropdown.svg";

const FilterOption = () => {
  const [value, setValue] = useState([200, 700]);

  return (
    <div className="common__filter__wrapper">
      <h3 className="filltertext borderb text-start pb__20 mb__20">Filter</h3>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flightName"
            aria-expanded="false"
            aria-controls="flightName"
          >
            Flight Name
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content collapse show" id="flightName">
          <form className="d-flex align-items-center justify-content-between my-3">
            <input type="text" placeholder="Search by Flight name" required />
            <button type={"submit"} className="search">
              <i className="material-symbols-outlined">search</i>
            </button>
          </form>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flightType"
            aria-expanded="false"
            aria-controls="flightType"
          >
            No. of Stops
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="flightType">
          <div className="common__typeproperty my-3">
            {["Non Stop", "1 Stop", "2+ Stop", "3+ Stop"].map((itm, i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1${i}`}
                  />
                  <label className="form-check-label" htmlFor={`proper1${i}`}>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#departureTime"
            aria-expanded="false"
            aria-controls="departureTime"
          >
            Departure Time
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="departureTime">
          <div className="common__typeproperty my-3">
            {[
              ["Early Morning", "12am - 8am"],
              ["Morning", "8am - 12pm"],
              ["Mid-Day", "12pm - 4pm"],
              ["Evening", "4pm - 12pm"],
              ["Night", "8pm - 12pm"],
            ].map(([period, time], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s13${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`proper1s13${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">{period}</span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pricing"
            aria-expanded="false"
            aria-controls="pricing"
          >
            Pricing scale
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="pricing">
          <div className="range__barcustom my-3">
            <div id="slider-range" className="range-bar">
              <RangeSlider
                value={value}
                onInput={setValue}
                min={0}
                max={1000}
                ariaValuemax
              />
            </div>

            <div className="price-input">
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-min"
                  value={value[0]}
                  readOnly
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-max"
                  value={value[1]}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search__item">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flightTravels"
            aria-expanded="false"
            aria-controls="flightTravels"
          >
            Airlines
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="flightTravels">
          <div className="common__typeproperty mt-3 pb-3">
            {[
              "Asia Pacific Domestic",
              "American Domestic",
              "Europe Domestic",
              "Middle East Domestic",
              "African Domestic",
              "Australian Domestic",
            ].map((itm, i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s${i}`}
                  />
                  <label className="form-check-label" htmlFor={`proper1s${i}`}>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
