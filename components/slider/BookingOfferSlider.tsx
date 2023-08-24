"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import bookings1 from "/public/img/slider/bookings1.jpg";
import bookings2 from "/public/img/slider/bookings2.jpg";
import bookings3 from "/public/img/slider/bookings3.jpg";
import bookings4 from "/public/img/slider/bookings4.jpg";

const BookingOfferSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        <Link href="/hotel-details" className="hurray__offer">
          <Image src={bookings1} alt="img" />
          <span className="cmn__btn hurray1">
            <span>Hurry up!</span>
          </span>
        </Link>
        <Link href="/flight-book" className="hurray__offer">
          <Image src={bookings2} alt="img" />
          <span className="cmn__btn hurray2">
            <span>Book Now</span>
          </span>
        </Link>
        <Link href="/train-book" className="hurray__offer">
          <Image src={bookings3} alt="img" />
          <span className="cmn__btn hurray3">
            <span>Book Now</span>
          </span>
        </Link>
        <Link href="/bus-book" className="hurray__offer">
          <Image src={bookings4} alt="img" />
          <span className="cmn__btn hurray4">
            <span>Book Now</span>
          </span>
        </Link>
        <Link href="/train-book" className="hurray__offer">
          <Image src={bookings3} alt="img" />
          <span className="cmn__btn hurray3">
            <span>Book Now</span>
          </span>
        </Link>
        <Link href="/cars-book" className="hurray__offer">
          <Image src={bookings2} alt="img" />
          <span className="cmn__btn hurray2">
            <span>Book Now</span>
          </span>
        </Link>
      </Slider>

      {/* Slider Navigation Here */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </>
  );
};

export default BookingOfferSlider;
