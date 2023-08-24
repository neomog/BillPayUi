"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import largbed1 from "/public/img/room/largbed1.jpg";
import largibed2 from "/public/img/room/largibed2.jpg";
import sing1 from "/public/img/room/sing1.jpg";
import sing2 from "/public/img/room/sing2.jpg";
import single3 from "/public/img/room/single3.jpg";
import single4 from "/public/img/room/single4.jpg";

const RoomsSuites = () => {
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

      <section className="roomsuites__section pt-120 pb-120">
        <div className="container">
          <div className="section__header section__center pb__60 wow fadeInDown">
            <h2>Rooms & Suites</h2>
            <p className="max600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-duration="1.8s"
            >
              <div className="rooms">
                <div className="row g-4">
                  <div className="col-xl-12 col-lg-12">
                    <div className="rooms__items">
                      <Image src={largbed1} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$100/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Single Bed Room</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="rooms__items">
                      <Image src={sing1} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$300/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Double Bed</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="rooms__items">
                      <Image src={sing2} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$300/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Family Room</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2.2s"
            >
              <div className="rooms">
                <div className="row g-4">
                  <div className="col-xl-6 col-lg-6">
                    <div className="rooms__items">
                      <Image src={single3} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$300/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Double bed</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="rooms__items">
                      <Image src={single4} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$100/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Single Bed</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="rooms__items">
                      <Image src={largibed2} alt="img" className="img-fluid" />
                      <div className="content__wrap">
                        <div className="content">
                          <h6>$700/Night</h6>
                          <h4>
                            <Link href="/hotel-list">Lusury Be Room</Link>
                          </h4>
                        </div>
                      </div>
                      <button
                        className="video video-btn border-0"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined">play_circle</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsSuites;
