import Image from "next/image";
import Link from "next/link";
import samble1 from "/public/img/room/samble1.jpg";
import samble2 from "/public/img/room/samble2.jpg";
import shapeflower from "/public/img/room/shapeflower.png";

const RestaurantService = () => {
  return (
    <section className="room__samble">
      <div className="container-fluid p-0">
        <div className="row g-0 flex-row-reverse">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="samble__content">
              <div className="content__box">
                <div className="section__header">
                  <h2>Restaurant Service</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable. If you are going to
                    use
                  </p>
                  <Link href="/hotel-list" className="cmn__btn">
                    <span>Explore deals</span>
                  </Link>
                </div>
              </div>
              <div className="shapesamble">
                <Image src={shapeflower} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="samble__thumb">
              <Image src={samble1} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="samble__content">
              <div className="content__box">
                <div className="section__header">
                  <h2>Restaurant Service</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable. If you are going to
                    use
                  </p>
                  <Link href="/hotel-list" className="cmn__btn">
                    <span>Explore deals</span>
                  </Link>
                </div>
              </div>
              <div className="shapesamble">
                <Image src={shapeflower} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="samble__thumb">
              <Image src={samble2} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantService;
