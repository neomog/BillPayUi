import Image from "next/image";
import carshapeapp from "/public/img/cars/carshapeapp.png";

import Link from "next/link";
import carapp from "/public/img/cars/carapp.png";
import hotcoffee from "/public/img/room/hotcoffee.png";
import seats from "/public/img/room/seats.png";
import supports from "/public/img/room/supports.png";
import wifi from "/public/img/room/wifi.png";

const facilities = [
  {
    id: 1,
    imgSrc: seats,
    title: "Comfortable Seats",
    link: "/car-grid",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
  },
  {
    id: 2,
    imgSrc: hotcoffee,
    title: "Hot Coffee",
    link: "/car-grid",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
  },
  {
    id: 3,
    imgSrc: wifi,
    title: "Unlimited WIFI",
    link: "/car-grid",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
  },
  {
    id: 4,
    imgSrc: supports,
    title: "Unlimited Support",
    link: "/car-grid",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
  },
];

const CarFacilities = () => {
  return (
    <section className="hotel__facilities pb-120 z-n1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Car Facilities</h2>
              <p className="max-636">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some
              </p>
            </div>
          </div>
        </div>
        <div className="flight__facilites__wrap bus__facilities__wrap">
          <div className="row justify-content-between align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5">
              <div className="car__facilitiesthumb">
                <Image src={carapp} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
              <div className="car__facilities__wrap gy-3 row">
                {facilities.map((facilitie) => {
                  const { id, description, imgSrc, link, title } = facilitie;
                  return (
                    <div key={id} className="col-lg-6">
                      <div
                        className="hotel__facilities__item wow fadeInDown"
                        data-wow-duration="1.2s"
                      >
                        <div className="head__wrap">
                          <Image src={imgSrc} alt="img" />
                          <h5>
                            <Link href={link}>{title}</Link>
                          </h5>
                        </div>
                        <p>{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carshape">
        <Image src={carshapeapp} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default CarFacilities;
