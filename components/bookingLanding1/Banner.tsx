import Image from "next/image";
import Link from "next/link";
import BusTab from "./BusTab";
import CarsTab from "./CarsTab";
import FlightTab from "./FlightTab";
import HotelTab from "./HotelTab";
import TrainTab from "./TrainTab";
import booking_landing1 from "/public/img/banner/booking-landing1.jpg";
import bus from "/public/img/banner/three/bus.png";
import cars from "/public/img/banner/three/cars.png";
import flight from "/public/img/banner/three/flight.png";
import hotel from "/public/img/banner/three/hotel.png";
import trains from "/public/img/banner/three/trains.png";

const Banner = () => {
  return (
    <section className="booking__landing__one mb-5">
      <div className="booking__thumb__one">
        <Image src={booking_landing1} alt="img" className="img-fluid" />
      </div>
      <div className="container">
        <div className="booking__landing__wrap1 trans50y">
          <div className="booking__landing__head pb__40">
            <ul
              className="nav nav-tabs fasilities__inner fasilities__innertwo"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <Link
                  href="URL:void(0)"
                  className="nav-link active"
                  id="home-tabb1"
                  data-bs-toggle="tab"
                  data-bs-target="#homeb1"
                  role="tab"
                  aria-controls="homeb1"
                  aria-selected="true"
                >
                  <span className="fasilities__item align-items-center d-flex">
                    <span className="icon">
                      <Image src={hotel} alt="icon" />
                    </span>
                    <span className="fz-18 pratext d-block">Hotels</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  href="URL:void(0)"
                  className="nav-link"
                  id="profile-tabb1"
                  data-bs-toggle="tab"
                  data-bs-target="#profileb1"
                  role="tab"
                  aria-controls="profileb1"
                  aria-selected="false"
                >
                  <span className="fasilities__item align-items-center d-flex">
                    <span className="icon">
                      <Image src={flight} alt="icon" />
                    </span>
                    <span className="fz-18 pratext d-block">Flights</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  href="URL:void(0)"
                  className="nav-link"
                  id="contact-tabb1"
                  data-bs-toggle="tab"
                  data-bs-target="#contactb1"
                  role="tab"
                  aria-controls="contactb1"
                  aria-selected="false"
                >
                  <span className="fasilities__item align-items-center d-flex">
                    <span className="icon">
                      <Image src={trains} alt="icon" />
                    </span>
                    <span className="fz-18 pratext d-block">Trains</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  href="URL:void(0)"
                  className="nav-link"
                  id="contact-tabb11"
                  data-bs-toggle="tab"
                  data-bs-target="#contactb11"
                  role="tab"
                  aria-controls="contactb11"
                  aria-selected="false"
                >
                  <span className="fasilities__item align-items-center d-flex">
                    <span className="icon">
                      <Image src={bus} alt="icon" />
                    </span>
                    <span className="fz-18 pratext d-block">Bus</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  href="URL:void(0)"
                  className="nav-link"
                  id="contact-tabb111"
                  data-bs-toggle="tab"
                  data-bs-target="#contactb111"
                  role="tab"
                  aria-controls="contactb111"
                  aria-selected="false"
                >
                  <span className="fasilities__item align-items-center d-flex">
                    <span className="icon">
                      <Image src={cars} alt="icon" />
                    </span>
                    <span className="fz-18 pratext d-block">Cars</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="booking__landing__body">
            <div className="tab-content" id="myTabContentbookin1">
              <div
                className="tab-pane fade show active"
                id="homeb1"
                role="tabpanel"
                aria-labelledby="home-tabb1"
              >
                <div className="dating__body">
                  {/* Hotel Tab  */}
                  <HotelTab />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profileb1"
                role="tabpanel"
                aria-labelledby="profile-tabb1"
              >
                <div className="dating__body">
                  {/* Flight Tab */}
                  <FlightTab />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactb1"
                role="tabpanel"
                aria-labelledby="contact-tabb1"
              >
                <div className="dating__body">
                  {/* Train Tab */}
                  <TrainTab />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactb11"
                role="tabpanel"
                aria-labelledby="contact-tabb11"
              >
                <div className="dating__body">
                  {/* Bus Tab */}
                  <BusTab />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactb111"
                role="tabpanel"
                aria-labelledby="contact-tabb111"
              >
                <div className="dating__body">
                  {/* Cars Tab */}
                  <CarsTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
