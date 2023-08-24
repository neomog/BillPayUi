import Image from "next/image";
import Link from "next/link";
import b2 from "/public/img/bus/b2.png";
import b3 from "/public/img/bus/b3.png";
import b4 from "/public/img/bus/b4.png";
import b6 from "/public/img/bus/b6.png";
import car1 from "/public/img/cars/car1.jpg";
import car2 from "/public/img/cars/car2.jpg";
import carman1 from "/public/img/cars/carman1.jpg";
import carman2 from "/public/img/cars/carman2.jpg";
import carround from "/public/img/cars/carround.png";

const CarServices = () => {
  return (
    <section className="cars__ticket bgsection pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="train__ticket__content car__ticket__content">
              <div className="section__header mb__30 wow fadeInDown">
                <h2>We provide car rental services worldwide</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <ul className="offer__list pb__40 wow fadeInUp">
                <li>
                  <span className="thumb">
                    <Image src={b3} alt="img" />
                  </span>
                  <span className="text">Unlimited Offers</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b2} alt="img" />
                  </span>
                  <span className="text">24X7 Support</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b6} alt="img" />
                  </span>
                  <span className="text">Cheapest Price</span>
                </li>
                <li>
                  <span className="thumb">
                    <Image src={b4} alt="img" />
                  </span>
                  <span className="text">100% Trust pay</span>
                </li>
              </ul>
              <Link href="/car-list" className="cmn__btn wow fadeInDown">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="worldwide__tumb__wrapper">
              <div className="thumb__innner">
                <div className="tumb wow fadeInDown" data-wow-duration="1.2s">
                  <Image src={car1} alt="img" className="img-fluid" />
                </div>
                <div className="tumb wow fadeInUp" data-wow-duration="1.2s">
                  <Image src={car2} alt="img" className="img-fluid" />
                </div>
              </div>
              <div className="thumb__innner">
                <div className="tumb wow fadeInUp" data-wow-duration="1.2s">
                  <Image src={carman1} alt="img" className="img-fluid" />
                </div>
                <div className="tumb wow fadeInDown" data-wow-duration="1.2s">
                  <Image src={carman2} alt="img" className="img-fluid" />
                </div>
              </div>
              <div className="car__rount">
                <Image src={carround} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarServices;
