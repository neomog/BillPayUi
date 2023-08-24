import Image from "next/image";
import Link from "next/link";
import bus from "/public/img/bus/bus.png";

const Banner = () => {
  return (
    <section className="hotel__booksection bus__booksection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-7">
            <div className="hotel__content">
              <h1 className="wow fadeInDown" data-wow-duration="2s">
                Looking for great deals on bus tickets
              </h1>
              <p className="wow fadeInUp max-636" data-wow-duration="2s">
                Choose us for online bus ticket booking & enjoy a hassle-free
                bus travel as we have the largest inventory of buses...
              </p>
              <div className="cmn__grp">
                <Link href="/bus-list" className="cmn__btn">
                  <span>Explore deals</span>
                </Link>
                <Link href="/about" className="cmn__btn outline__btn">
                  <span>About us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-5">
            <div className="busbanner wow fadeInRight" data-wow-duration="3s">
              <Image src={bus} alt="img" className="h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
