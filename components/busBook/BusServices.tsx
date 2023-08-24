import Image from "next/image";
import Link from "next/link";
import b1 from "/public/img/bus/b1.png";
import b2 from "/public/img/bus/b2.png";
import b3 from "/public/img/bus/b3.png";
import b4 from "/public/img/bus/b4.png";
import b5 from "/public/img/bus/b5.png";
import b6 from "/public/img/bus/b6.png";

const BusServices = () => {
  return (
    <section className="bus__ticket">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5"></div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="train__ticket__content bus__ticket__content">
              <div className="section__header mb__30">
                <h2>We provide bus booking at affordable rates</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <ul className="offer__list pb__40">
                <li>
                  <span className="thumb">
                    <Image src={b1} alt="img" />
                  </span>
                  <span className="text">No Booking Charges</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b2} alt="img" />
                  </span>
                  <span className="text">24X7 Support</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b3} alt="img" />
                  </span>
                  <span className="text">Cheapest Price</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b4} alt="img" />
                  </span>
                  <span className="text">Easy for Refunds</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b5} alt="img" />
                  </span>
                  <span className="text">2 Lakh+ Routes</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b6} alt="img" />
                  </span>
                  <span className="text">100% Trust pay</span>
                </li>
              </ul>
              <Link href="/bus-list" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusServices;
