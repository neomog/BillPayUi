import Image from "next/image";
import Link from "next/link";
import busappp from "/public/img/bus/busappp.png";
import breakfast from "/public/img/room/breakfast.png";
import medical from "/public/img/room/medical.png";
import salat from "/public/img/room/salat.png";
import seats from "/public/img/room/seats.png";
import supports from "/public/img/room/supports.png";
import wifi from "/public/img/room/wifi.png";

const BusFacilities = () => {
  return (
    <section className="hotel__facilities pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Bus Facilities</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="flight__facilites__wrap bus__facilities__wrap">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <div className="bus__fasilities__left">
                <div
                  className="hotel__facilities__item nlfbottom wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="head__wrap">
                    <Image src={breakfast} alt="img" />
                    <h5>
                      <Link href="/bus-list">Breakfast</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item nlfbottom wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="head__wrap pt__30">
                    <Image src={seats} alt="img" />
                    <h5>
                      <Link href="/bus-list">Comfortable seats</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item wow fadeInUp"
                  data-wow-duration="1.8s"
                >
                  <div className="head__wrap">
                    <Image src={wifi} alt="img" />
                    <h5>
                      <Link href="/bus-list">Unlimited WIFI</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div className="bus__fasilitiesthumb">
                <Image src={busappp} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <div className="bus__fasilities__right">
                <div
                  className="hotel__facilities__item nlfbottom wow fadeInDown"
                  data-wow-duration="1.2s"
                >
                  <div className="head__wrap">
                    <Image src={medical} alt="img" />
                    <h5>
                      <Link href="/bus-list">Medical Treatment</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item nlfbottom wow fadeInDown"
                  data-wow-duration="1.4s"
                >
                  <div className="head__wrap">
                    <Image src={salat} alt="img" />
                    <h5>
                      <Link href="/bus-list">Place of Religion Pray</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item wow fadeInDown"
                  data-wow-duration="1.6s"
                >
                  <div className="head__wrap">
                    <Image src={supports} alt="img" />
                    <h5>
                      <Link href="/bus-list">Unlimited Supports</Link>
                    </h5>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusFacilities;
