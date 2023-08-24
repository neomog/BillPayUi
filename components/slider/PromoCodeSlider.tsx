"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import aritel from "/public/img/payment/aritel.png";
import bank from "/public/img/payment/bank.png";
import card from "/public/img/payment/card.png";
import flexsiblw from "/public/img/payment/flexsiblw.png";
import linkaply from "/public/img/payment/linkaply.png";
import mqn from "/public/img/payment/mqn.png";
import paypal from "/public/img/payment/paypal.png";
import visa from "/public/img/payment/visa.png";

const data = [
  {
    id: 1,
    boxes: [
      {
        thumbSrc: aritel,
        linkText: "SWyro5ruq2Eu",
        href: "/order",
      },
      {
        thumbSrc: mqn,
        linkText: "gsXAMqnkIxbr",
        href: "/order",
      },
    ],
  },
  {
    id: 2,
    boxes: [
      {
        thumbSrc: paypal,
        linkText: "OayKsH7Xmr0O",
        href: "/order",
      },
      {
        thumbSrc: linkaply,
        linkText: "Hr0A4OKcB6qH",
        href: "/order",
      },
    ],
  },
  {
    id: 3,
    boxes: [
      {
        thumbSrc: bank,
        linkText: "qMgxjZk0fxWz",
        href: "/order",
      },
      {
        thumbSrc: visa,
        linkText: "L8sMlo3UvLFz",
        href: "/order",
      },
    ],
  },
  {
    id: 4,
    boxes: [
      {
        thumbSrc: flexsiblw,
        linkText: "R2r0UAWdFeUW",
        href: "/order",
      },
      {
        thumbSrc: card,
        linkText: "7e12J7hQ4Xia",
        href: "/order",
      },
    ],
  },
  {
    id: 5,
    boxes: [
      {
        thumbSrc: aritel,
        linkText: "SWyro5ruq2Eu",
        href: "/order",
      },
      {
        thumbSrc: mqn,
        linkText: "gsXAMqnkIxbr",
        href: "/order",
      },
    ],
  },
  {
    id: 6,
    boxes: [
      {
        thumbSrc: paypal,
        linkText: "OayKsH7Xmr0O",
        href: "/order",
      },
      {
        thumbSrc: linkaply,
        linkText: "Hr0A4OKcB6qH",
        href: "/order",
      },
    ],
  },
];

const PromoCodeSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 767,
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
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="promo__sponsor__wrapper owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {data.map((itm) => {
          const { id, boxes } = itm;
          return (
            <div key={id} className="promo__sponsor__item">
              {boxes.map((single, i) => {
                const { href, linkText, thumbSrc } = single;
                return (
                  <div key={i} className="promo__box">
                    <div className="thumb">
                      <Image src={thumbSrc} alt="img" />
                    </div>
                    <div className="content">
                      <span className="fz-16 link">{linkText}</span>
                      <Link href={href}>
                        <span>Apply</span>
                        <span className="icon">
                          <i className="material-symbols-outlined">east</i>
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation
        sliderRef={sliderRef}
        arrow="keyboard_double_arrow_right"
      />
    </div>
  );
};

export default PromoCodeSlider;
