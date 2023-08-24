"use client";

import Image from "next/image";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import bedss from "/public/img/svg/bedss.svg";
import coffee from "/public/img/svg/coffee.svg";
import dropdown from "/public/img/svg/dropdown.svg";
import facilities_bussen from "/public/img/svg/facilities-bussen.svg";
import gum from "/public/img/svg/gum.svg";
import star from "/public/img/svg/star.svg";
import swing from "/public/img/svg/swing.svg";
import wifis from "/public/img/svg/wifis.svg";

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
            data-bs-target="#hotelName"
            aria-expanded="false"
            aria-controls="hotelName"
          >
            Hotel Name
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content collapse show" id="hotelName">
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
            Type of property
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="departureTime">
          <div className="common__typeproperty my-3">
            {[
              ["Hotel", "500"],
              ["Motel", "200"],
              ["Villa", "111"],
              ["Farm House", "66"],
              ["Resort", "720"],
              ["Serviced Apartments", "54"],
            ].map(([period, time], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`hotel13${i}`}
                  />
                  <label className="form-check-label" htmlFor={`hotel13${i}`}>
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
            data-bs-target="#hotelTravels"
            aria-expanded="false"
            aria-controls="hotelTravels"
          >
            Hotel Travels
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="hotelTravels">
          <div className="common__typeproperty mt-3 pb-3">
            {[
              ["5 Star", "701"],
              ["4 Star", "621"],
              ["3 Star", "111"],
              ["2 Star", "66"],
              ["1 Star", "720"],
            ].map(([itm, number], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`star${i}`}
                  />
                  <label className="form-check-label" htmlFor={`star${i}`}>
                    <span className="star me-1">
                      <Image src={star} alt="svg" />
                    </span>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="search__item">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#amenities"
            aria-expanded="false"
            aria-controls="amenities"
          >
            Amenities
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="amenities">
          <div className="common__typeproperty mt-3 pb-3">
            {[
              [coffee, "Restaurant", "701"],
              [swing, "Swimming Pool", "621"],
              [facilities_bussen, " Business Facilitiies", "111"],
              [bedss, "Spa/Wellness", "66"],
              [wifis, "Internet/Wi-Fi", "720"],
              [gum, "Gym", "720"],
            ].map(([icon, itm, number], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`hotel${i}`}
                  />
                  <label className="form-check-label" htmlFor={`hotel${i}`}>
                    <span className="star me-1">
                      <Image src={icon} alt="svg" />
                    </span>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
