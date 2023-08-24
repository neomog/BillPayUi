import Image from "next/image";
import Link from "next/link";
import hotbrekfast from "/public/img/room/hotbrekfast.png";
import internetfibra from "/public/img/room/internetfibra.png";
import pickdrop from "/public/img/room/pickdrop.png";
import prking from "/public/img/room/prking.png";
import roomservice from "/public/img/room/roomservice.png";
import swimming from "/public/img/room/swimming.png";

const hotelFacilities = [
  {
    id: "facility1",
    imageSrc: pickdrop,
    title: "Pick up & drop",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "facility2",
    imageSrc: prking,
    title: "Parking Space",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "facility3",
    imageSrc: roomservice,
    title: "Room Service",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "facility4",
    imageSrc: swimming,
    title: "Swimming Pool",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "facility5",
    imageSrc: internetfibra,
    title: "Fibra Internet",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "facility6",
    imageSrc: hotbrekfast,
    title: "Breakfast",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const HotelFacilities = () => {
  return (
    <section className="hotel__facilities pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Hotel Facilities</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {hotelFacilities.map(({ id, imageSrc, title, description }) => (
            <div
              key={id}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="1.2s"
            >
              <div className="hotel__facilities__item">
                <div className="head__wrap">
                  <Image src={imageSrc} alt="img" />
                  <h5>
                    <Link href="/hotel-list">{title}</Link>
                  </h5>
                </div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;
