"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ReviewForm from "../carConfirmDetails/ReviewForm";
import Reviews from "../carConfirmDetails/Reviews";
import HotelDetailSlider from "../slider/HotelDetailSlider";
import Amenities from "./Amenities";
import Cheakout from "./Cheakout";
import ChooseRoom from "./ChooseRoom";
import CurrentWeather from "./CurrentWeather";
import video_thumb from "/public/img/details/video-thumb.jpg";

const HotelDetailsMain = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="gpelxzSME04"
        onClose={() => setOpen(false)}
      />

      <section className="hotel__details overflow-hidden pt__60">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8 col-lg-8">
              <div className="hotel__details__wrapleft">
                {/* Hotel Detail Slider Here */}
                <HotelDetailSlider />

                <div className="text__box pt__60 pb__40">
                  <h3 className="mb__20 dtext xs-32">Skyp Hotel</h3>
                  <p className="mb__20 xs-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam odio lorem, iaculis non felis vel, faucibus efficitur
                    dui. Aliquam erat volutpat. Quisque hendrerit massa nec
                    lobortis mollis. Nunc eu eros efficitur, convallis enim ac,
                    ultricies nisi. Lorem ipsum dolor sit amet, consectetur
                    adipiscing.
                  </p>
                  <p className="xs-16">
                    Donec sollicitudin nulla risus, eget luctus ipsum facilisis
                    dictum. Integer ultricies sapien libero, sed congue ligula
                    hendrerit quis. Vivamus dolor mauris, mollis nec accumsan
                    sed, pulvinar id nisl. Aliquam vulputate ante purus, quis
                    sollicitudin augue euismod sit amet. Aliquam vehicula mi sit
                    amet suscipit tincidunt. Quisque sed lobortis metus, vitae
                    efficitur felis.
                  </p>
                </div>
                <div className="video__thumb pb__40">
                  <Image
                    src={video_thumb}
                    className="w-100 h-100"
                    alt="video"
                  />
                  <button
                    className="video-btn border-0 bg-transparent"
                    onClick={() => setOpen(true)}
                  >
                    <span className="vide">
                      <i className="material-symbols-outlined">play_arrow</i>
                    </span>
                  </button>
                </div>
                <div className="amenities__contentbox pb__30">
                  <h4 className="mb__20 dtext">Amenities</h4>
                  {/* Amenities Section  */}
                  <Amenities />
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
                <div className="cancellation text-start pb__40 nlfbottom">
                  <h4 className="dtext mb__20">Cancellation</h4>
                  <p className="fz-16 fw-400 lato dtext">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be sure there
                    isn&#39;t anything embarrassing hidden in the middle of
                    text.
                  </p>
                </div>
                <div className="room__chooses pt__40">
                  <h3 className="dtext xs-28 mb__40">Choose Room</h3>
                  {/* Choose Room Section  */}
                  <ChooseRoom />
                </div>

                {/* Reviews Section Here */}
                <Reviews />

                {/* Review Form */}
                <ReviewForm />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="main__right__detaislbar">
                <div className="hotel__details__checkoungwrapper">
                  {/* Cheakout Section Here  */}
                  <Cheakout />
                </div>
                <div className="current__weather mt__30">
                  <h5 className="mb__30 text-center">Current Weather</h5>
                  {/* Current Weather */}
                  <CurrentWeather />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetailsMain;
