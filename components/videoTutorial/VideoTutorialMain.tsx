"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import vd1 from "/public/img/blog/vd1.jpg";
import vd2 from "/public/img/blog/vd2.jpg";
import vd3 from "/public/img/blog/vd3.jpg";
import vd4 from "/public/img/blog/vd4.jpg";
import vd5 from "/public/img/blog/vd5.jpg";
import vd6 from "/public/img/blog/vd6.jpg";
import vd7 from "/public/img/blog/vd7.jpg";
import vd8 from "/public/img/blog/vd8.jpg";
import vd9 from "/public/img/blog/vd9.jpg";

const VideoTutorialMain = () => {
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

      <section className="video__turotial pt-80 pb-80">
        <div className="container">
          <div className="video__turotorial__wrapper pb-80">
            <h3 className="titles mb__40 dtext">Mobile Recharge Method</h3>
            <div className="row g-4 justify-content-center">
              {[vd1, vd2, vd3].map((itm, i) => (
                <div
                  key={i}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="video__items befores">
                    <div className="thumb">
                      <Image src={itm} alt="video" className="img-fluid" />
                      <Link
                        href="URL:void(0)"
                        className="video-btn"
                        onClick={() => setOpen(true)}
                      >
                        <span className="vide">
                          <i className="material-symbols-outlined">
                            play_arrow
                          </i>
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/URL:void(0)">
                          How to make mobile balance recharge?
                        </Link>
                      </h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link href="/URL:void(0)" className="cmn__btn">
                        <span>Explore deals</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="video__turotorial__wrapper pb-80">
            <h3 className="titles mb__40 dtext">Bill Payment Method</h3>
            <div className="row g-4 justify-content-center">
              {[vd4, vd5, vd6].map((itm, i) => (
                <div
                  key={i}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="video__items befores">
                    <div className="thumb">
                      <Image src={itm} alt="video" className="img-fluid" />
                      <Link
                        href="URL:void(0)"
                        className="video-btn"
                        onClick={() => setOpen(true)}
                      >
                        <span className="vide">
                          <i className="material-symbols-outlined">
                            play_arrow
                          </i>
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/URL:void(0)">
                          How to make bill payment system?
                        </Link>
                      </h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link href="/URL:void(0)" className="cmn__btn">
                        <span>Explore deals</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="video__turotorial__wrapper">
            <h3 className="titles mb__40 dtext">Booking System Method</h3>
            <div className="row g-4 justify-content-center">
              {[vd7, vd8, vd9].map((itm, i) => (
                <div
                  key={i}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="video__items befores">
                    <div className="thumb">
                      <Image src={itm} alt="video" className="img-fluid" />
                      <Link
                        href="URL:void(0)"
                        className="video-btn"
                        onClick={() => setOpen(true)}
                      >
                        <span className="vide">
                          <i className="material-symbols-outlined">
                            play_arrow
                          </i>
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/URL:void(0)">
                          How to Booking Ticket or Hotel?
                        </Link>
                      </h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link href="/URL:void(0)" className="cmn__btn">
                        <span>Explore deals</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoTutorialMain;
