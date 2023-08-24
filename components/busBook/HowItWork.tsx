import Image from "next/image";
import Link from "next/link";
import tt1 from "/public/img/bus/tt1.png";
import tt2 from "/public/img/bus/tt2.png";
import tt3 from "/public/img/bus/tt3.png";

const HowItWork = () => {
  return (
    <section className="workit__service bgsection pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown">
            <div className="section__header">
              <h2>How it&#39;s work</h2>
              <p className="pb__40">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use...
              </p>
              <Link href="/bus-bookingsystem" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 wow fadeInUp">
            <div className="howwork__wrapper">
              <div
                className="homework__item wow fadeInUp"
                data-wow-duration="1.2s"
              >
                <div className="head__wrap">
                  <Image src={tt1} alt="img" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/bus-bookingsystem">Search Bus</Link>
                  </h5>
                  <p>
                    Choose your origin, destination, journey dates, search for
                    Bus
                  </p>
                </div>
              </div>
              <div
                className="homework__item wow fadeInUp"
                data-wow-duration="1.6s"
              >
                <div className="head__wrap">
                  <Image src={tt3} alt="img" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/bus-bookingsystem">Select seats</Link>
                  </h5>
                  <p>Select your desired trip and choose your seats</p>
                </div>
              </div>
              <div
                className="homework__item wow fadeInUp"
                data-wow-duration="1.8s"
              >
                <div className="head__wrap">
                  <Image src={tt2} alt="img" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/bus-bookingsystem">Buy & pay</Link>
                  </h5>
                  <p>Pay for the tickets via Debit / Credit Cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
