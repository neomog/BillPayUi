import Image from "next/image";
import Link from "next/link";
import secure100 from "/public/img/train/secure100.png";
import suppor24 from "/public/img/train/suppor24.png";
import trainticket from "/public/img/train/trainticket.png";
import truspay from "/public/img/train/truspay.png";
import unoffer from "/public/img/train/unoffer.png";

const items = [
  {
    id: 1,
    thumb: unoffer,
    text: "Unlimited Offers",
  },
  {
    id: 2,
    thumb: suppor24,
    text: "24X7 Support",
  },
  {
    id: 3,
    thumb: secure100,
    text: "100% Secure",
  },
  {
    id: 4,
    thumb: truspay,
    text: "Trust pay",
  },
];

const Support = () => {
  return (
    <section className="train__ticket">
      <div className="container">
        <div className="row flex-row-reverse align-items-center justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="train__ticket__content">
              <div className="section__header mb__30">
                <h2>Different Types of Train Ticket Booking</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <ul className="offer__list pb__40">
                {items.map(({ id, thumb, text }) => (
                  <li key={id}>
                    <span className="thumb">
                      <Image src={thumb} alt="img" />
                    </span>
                    <span className="text">{text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/train-list" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="trainticket__thumb">
              <Image src={trainticket} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
