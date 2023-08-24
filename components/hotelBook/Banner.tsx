import Link from "next/link";

const Banner = () => {
  return (
    <section className="hotel__booksection">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="hotel__content">
              <h1 className="wow fadeInDown" data-wow-duration="2s">
                Great discounts on hotels around the world
              </h1>
              <p className="wow fadeInUp" data-wow-duration="2s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration...
              </p>
              <div className="cmn__grp">
                <Link href="/hotel-list" className="cmn__btn">
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
    </section>
  );
};

export default Banner;
