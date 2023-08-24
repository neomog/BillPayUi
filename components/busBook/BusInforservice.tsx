import Image from "next/image";
import Link from "next/link";
import info_service from "/public/img/bus/info-service.jpg";
import position from "/public/img/bus/position.png";
import searcg from "/public/img/bus/searcg.png";
import trainss from "/public/img/bus/trainss.png";

const BusInforservice = () => {
  return (
    <section className="information__service pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8 col-lg-8 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Bus Information Service</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="flight__facilites__wrap bus__facilities__wrap">
          <div className="row align-items-center justify-content-center justify-content-between">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
              <div className="bus__fasilities__left">
                <div
                  className="hotel__facilities__item bsleft wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="head__wrap">
                    <Image src={searcg} alt="img" />
                    <h5>
                      <Link href="/URL:void(0)">PNR Status</Link>
                    </h5>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item bsleft wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="head__wrap">
                    <Image src={trainss} alt="img" />
                    <h5>
                      <Link href="/URL:void(0)">Live Bus status</Link>
                    </h5>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered...
                  </p>
                </div>
                <div
                  className="hotel__facilities__item wow fadeInUp"
                  data-wow-duration="1.8s"
                >
                  <div className="head__wrap">
                    <Image src={position} alt="img" />
                    <h5>
                      <Link href="/URL:void(0)">View coach position</Link>
                    </h5>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="bus__fasilitiesthumb">
                <Image src={info_service} alt="img" />
              </div>
              <div className="busdetail__contetn">
                <h5>
                  <Link href="/URL:void(0)">Details</Link>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusInforservice;
