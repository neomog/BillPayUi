import Image from "next/image";
import Link from "next/link";
import dots from "/public/img/refer/dots.png";
import referball from "/public/img/refer/referball.png";
import livetrain from "/public/img/train/livetrain.png";
import platform from "/public/img/train/platform.png";
import pnarstatustrain from "/public/img/train/pnarstatustrain.png";
import viewcoasch from "/public/img/train/viewcoasch.png";

const TrainInfo = () => {
  return (
    <section className="refer__section__three pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="section__header">
              <h2>Get train information service here</h2>
              <p className="pb__40">
                There are many variations of passages of Lorem Ipsum available,
                but the have suffered alteration in some form, by injected
                humour, or randomised words which don&#39;t look even slightly
                believable. If you are going to use...
              </p>
              <Link href="/URL:void(0)" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="refer__boxes__wrap refer__boxes__wrapthree">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="refer__items__thregrid">
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={pnarstatustrain} alt="img" />
                      </div>
                      <div className="content">
                        <h5>PNR Status</h5>
                        <p>There are many variations of passages of Lorem...</p>
                        <Link href="/train-grid" className="righicon">
                          <i className="material-symbols-outlined">
                            chevron_right
                          </i>
                        </Link>
                      </div>
                    </div>
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={viewcoasch} alt="img" />
                      </div>
                      <div className="content">
                        <h5>View coach position</h5>
                        <p>There are many variations of passages of Lorem...</p>
                        <Link href="/train-grid" className="righicon">
                          <i className="material-symbols-outlined">
                            chevron_right
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 updown__support">
                  <div className="refer__items__thregrid">
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={livetrain} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Live train status</h5>
                        <p>There are many variations of passages of Lorem...</p>
                        <Link href="/train-grid" className="righicon">
                          <i className="material-symbols-outlined">
                            chevron_right
                          </i>
                        </Link>
                      </div>
                    </div>
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={platform} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Platform Locator</h5>
                        <p>There are many variations of passages of Lorem...</p>
                        <Link href="/train-grid" className="righicon">
                          <i className="material-symbols-outlined">
                            chevron_right
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="refer__dotthree1">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree2">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree3">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree4">
                <Image src={dots} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="refer__ball">
        <Image src={referball} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default TrainInfo;
