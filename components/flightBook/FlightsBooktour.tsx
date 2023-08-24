import Image from "next/image";
import Link from "next/link";
import btourshape from "/public/img/flights/btourshape.png";
import ttourshape from "/public/img/flights/ttourshape.png";

const FlightsBooktour = () => {
  return (
    <section className="flight__tour  pb-120 pt-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xx-6 col-xl-6 col-lg-6"></div>
          <div className="col-xx-6 col-xl-6 col-lg-6">
            <div className="section__header">
              <h2>
                We provide the best destinations especially for you Book now
              </h2>
              <p className="pb__40">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&#39;t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators...
              </p>
              <Link href="/flight-round" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bshape1">
        <Image src={btourshape} alt="img" className="img-fluid" />
      </div>
      <div className="bshape2">
        <Image src={ttourshape} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default FlightsBooktour;
