import Image from "next/image";
import customer from "/public/img/customer/customer.png";
import customerbottom from "/public/img/customer/customerbottom.png";
import customertop from "/public/img/customer/customertop.png";
import signeture from "/public/img/customer/signeture.png";
import wilson from "/public/img/customer/wilson.png";

const OurService = () => {
  return (
    <section className="customer__seection bgsection pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between flex-row-reverse">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
            <div className="customer__content">
              <div className="section__header pb__40 wow fadeInDown">
                <h2>We provide best service to all our customers</h2>
                <p className="hoteltext">
                  Our Hotel has been present for over 20 years
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&#39;t
                  anything embarrassing...
                </p>
              </div>
              <div className="customer wow fadeInUp">
                <div className="thumb">
                  <Image src={wilson} alt="img" className="img-fluid" />
                </div>
                <div className="content">
                  <h5>Jenny Wilson</h5>
                  <span>CEO</span>
                </div>
              </div>
              <div className="signeture fadeInDown">
                <Image src={signeture} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-5">
            <div className="customer__thumb">
              <Image src={customer} alt="img" className="h-100" />
              <div className="rounttop wow fadeInDown" data-wow-duration="2s">
                <Image src={customertop} alt="img" className="h-100" />
              </div>
              <div className="rountbottom wow fadeInUp" data-wow-duration="2s">
                <Image src={customerbottom} alt="img" className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
