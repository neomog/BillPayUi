import Image from "next/image";
import Link from "next/link";
import bullet1 from "/public/img/train/bullet1.jpg";
import ss1 from "/public/img/train/ss1.png";
import ss2 from "/public/img/train/ss2.png";

const TrainSolution = () => {
  return (
    <section className="flight__tour train__tour">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xx-6 col-xl-6 col-lg-6"></div>
          <div className="col-xx-6 col-xl-6 col-lg-6 col-md-8">
            <div className="train__tour__contetn">
              <div className="section__header">
                <h2>The best solution for traveling by train</h2>
                <p className="pb__40">
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use It is a long
                  established fact that a reader will be distracted by the
                  readable content...
                </p>
                <Link href="/flight-oneway" className="cmn__btn">
                  <span>Explore deals</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bshape1">
        <Image src={ss2} alt="img" />
      </div>
      <div className="bshape2">
        <Image src={ss1} alt="img" />
      </div>
      <div className="train__travelshape">
        <Image src={bullet1} alt="img" className="h-100" />
      </div>
    </section>
  );
};

export default TrainSolution;
