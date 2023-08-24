import Image from "next/image";
import Link from "next/link";
import bookiing from "/public/img/cars/bookiing.png";
import car_ingo from "/public/img/cars/car-ingo.png";
import customer from "/public/img/cars/customer.png";
import location from "/public/img/cars/location.png";
import rental from "/public/img/cars/rental.png";

const facilities = [
  {
    id: 1,
    imageSrc: location,
    title: "Over 50,000 locations",
    link: "/car-list",
    description:
      "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    id: 2,
    imageSrc: bookiing,
    title: "No booking fees",
    link: "/car-list",
    description:
      "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    id: 3,
    imageSrc: rental,
    title: "Low rental rates",
    link: "/car-list",
    description:
      "There are many variations of passages of Lorem Ipsum available...",
  },
  {
    id: 4,
    imageSrc: customer,
    title: "24/7 customer service",
    link: "/car-list",
    description:
      "There are many variations of passages of Lorem Ipsum available...",
  },
];

const CarInformation = () => {
  return (
    <section className="hotel__facilities  pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Car Information Service</h2>
              <p className="max-636">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="flight__facilites__wrap bus__facilities__wrap">
          <div className="row flex-row-reverse justify-content-between align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="car__facilities__wrap gy-3 row">
                {facilities.map((facilitie) => {
                  const { description, id, imageSrc, link, title } = facilitie;
                  return (
                    <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="hotel__facilities__item wow fadeInDown"
                        data-wow-duration="1.2s"
                      >
                        <div className="head__wrap">
                          <Image src={imageSrc} alt="img" />
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
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="car__facilitiesthumb2">
                <Image src={car_ingo} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarInformation;
