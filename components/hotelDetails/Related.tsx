"use client";

import hotelsData from "@/data/hotelsData";
import { useRef } from "react";
import Slider from "react-slick";
import HotelGridCard from "../cards/HotelGridCard";
import SliderNavigation from "../common/SliderNavigation";

const Related = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="hotel__related__section pt-120 pb-90">
      <div className="container">
        <div className="blog__related__head pb__40">
          <h3>More Related News</h3>
        </div>
        <div className="blog__grid__leftwrapper">
          <div className="blog__related__wrapper owl-theme owl-carousel">
            <Slider {...settings} ref={sliderRef}>
              {/* Hotel Grid Card */}
              {hotelsData.map((hotel) => (
                <HotelGridCard key={hotel.id} data={hotel} />
              ))}
            </Slider>

            {/* Slider Navigation Here */}
            <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Related;
