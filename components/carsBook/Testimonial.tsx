import Image from "next/image";
import Link from "next/link";
import CarTestimonialSlider from "../slider/CarTestimonialSlider";
import quote from "/public/img/cars/quote.png";

const Testimonial = () => {
  return (
    <section className="cars__testimonial__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center justify-content-between">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            {/* Car Testimonial Slider Here */}
            <CarTestimonialSlider />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInDown">
            <div className="section__header">
              <h2>What do clients tell us?</h2>
              <p className="pb__40">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&#39;t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators...
              </p>
              <Link href="/car-grid" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="car__quote">
        <Image src={quote} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Testimonial;
