import Image from "next/image";
import Link from "next/link";
import CarSearch from "../common/CarSearch";
import car_bg from "/public/img/cars/car-bg.png";

const Banner = () => {
  return (
    <>
      <section className="hotel__booksection cars__booksection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-7">
              <div className="hotel__content">
                <h1 className="wow fadeInDown" data-wow-duration="2s">
                  Have a fantastic trip! We provide car service
                </h1>
                <p className="wow fadeInUp max-636" data-wow-duration="2s">
                  Enjoy unforgettable supercar tours, holidays, hospitality and
                  more with Discover your next great adventure.
                </p>
                <div className="cmn__grp">
                  <Link href="/car-list" className="cmn__btn">
                    <span>Explore deals</span>
                  </Link>
                  <Link href="/about" className="cmn__btn outline__btn">
                    <span>About us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-5"></div>
          </div>
        </div>
        <div className="car__shape">
          <Image src={car_bg} alt="img" className="img-fluid" />
        </div>
      </section>

      <div className="hotelbokking__categoris">
        <div className="container">
          <div className="hotelbooking__categoris__wrap">
            <div className="dating__body">
              <h5 className="hoteltitle">Book Car Rental Worldwide</h5>
              {/* Car Search */}
              <CarSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
