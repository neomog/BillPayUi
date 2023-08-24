import Image from "next/image";
import Link from "next/link";
import trainthumb from "/public/img/train/trainthumb.png";

const Banner = () => {
  return (
    <section className="hotel__booksection train__booksection">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-8">
            <div className="hotel__content">
              <h1 className="wow fadeInDown" data-wow-duration="2s">
                Discover traveling the world by train
              </h1>
              <p className="wow fadeInUp max-636" data-wow-duration="2s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration...
              </p>
              <div className="cmn__grp">
                <Link href="/train-list" className="cmn__btn">
                  <span>Explore deals</span>
                </Link>
                <Link href="/about" className="cmn__btn outline__btn">
                  <span>About us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trainshpe">
        <Image src={trainthumb} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Banner;
