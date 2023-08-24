import Image from "next/image";
import Link from "next/link";
import buypay from "/public/img/train/buypay.png";
import slecetseats from "/public/img/train/slecetseats.png";
import tarinshapeticket from "/public/img/train/tarinshapeticket.png";
import trainsearch from "/public/img/train/trainsearch.png";

const PurchaseTicket = () => {
  return (
    <section className="ticketeasily__section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7">
            <div className="refer__content trainticket__content">
              <div className="section__header mb__30 wow fadeInDown">
                <h2>How to purchase ticket very easily</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="refer__wrap pt__20">
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="icon">
                    <Image src={trainsearch} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Search Train</h5>
                    <p>
                      Choose your origin, destination, jouney dates and search
                      for trains
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="icon">
                    <Image src={slecetseats} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Select seats</h5>
                    <p>Select your desired trip and choose your seats</p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="icon">
                    <Image src={buypay} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Buy & pay</h5>
                    <p>Pay for the tickets Via Dbit / Creadit Cards or MFS</p>
                  </div>
                </div>
              </div>
              <Link
                href="/train-list"
                className="cmn__btn wow fadeInUp"
                data-wow-duration="1.8s"
              >
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-5"></div>
        </div>
      </div>
      <div className="trainticket__shape">
        <Image src={tarinshapeticket} alt="img" className="h-100" />
      </div>
    </section>
  );
};

export default PurchaseTicket;
