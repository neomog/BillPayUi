import Image from "next/image";
import Link from "next/link";
import discount1 from "/public/img/flights/discount1.jpg";
import discount2 from "/public/img/flights/discount2.jpg";
import discount3 from "/public/img/flights/discount3.jpg";
import discount4 from "/public/img/flights/discount4.jpg";
import discount5 from "/public/img/flights/discount5.jpg";

const TravelsDiscount = () => {
  return (
    <section className="discount__travel bgsection pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Travels Discount</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="travel__dicount__item ">
              <Image src={discount1} alt="img" className="img-fluid" />
              <div className="bestoffer__content">
                <h4 className="cheap">Fly Now, Pay Later</h4>
                <p className="usa">USA cheap flight deals</p>
                <h1 className="offfertitle">
                  <span className="uptoget">
                    <span className="upto d-block">Get</span>
                    <span className="upto">upto</span>
                  </span>
                  45
                  <span className="offs">% OFF</span>
                </h1>
                <Link href="/flight-oneway" className="cmn__btn cmn__green">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="travel__dicount__item ">
              <Image src={discount2} alt="img" className="img-fluid" />
              <div className="content">
                <div className="boxeswidth">
                  <h1 className="fivepercent">5%</h1>
                  <h4 className="instant">INSTANT DISCOUNT</h4>
                  <p className="flightbook">on Flight Booking</p>
                  <Link href="/flight-oneway" className="cmn__btn cmn__meron">
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="travel__dicount__item">
              <Image src={discount3} alt="img" className="img-fluid" />
              <div className="content">
                <h4 className="fivtin">Get 15% off</h4>
                <p className="winter pb__20">Fly to Dubai & Enjoy</p>
                <Link href="/flight-oneway" className="cmn__btn cmn__base">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="travel__dicount__item">
              <Image src={discount4} alt="img" className="img-fluid" />
              <div className="content">
                <h4 className="cheap">Cheap Flight Deal</h4>
                <p className="winter">Winter holidays in Switzerland</p>
                <span className="tharthy pb__20">30% OFF</span>
                <Link href="/flight-oneway" className="cmn__btn cmn__base">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="travel__dicount__item">
              <Image src={discount5} alt="img" className="img-fluid" />
              <div className="content">
                <h4 className="cheap">Hot Flight Deal</h4>
                <p className="winter">Summer vacation in Hong Kong</p>
                <span className="tharthy pb__20">50% OFF</span>
                <Link href="/flight-oneway" className="cmn__btn cmn__green">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="more__btn text-center pt__40">
          <Link href="/flight-oneway" className="cmn__btn">
            <span>See All Offer</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelsDiscount;
