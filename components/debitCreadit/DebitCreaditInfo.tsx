import Image from "next/image";
import Link from "next/link";
import cr1 from "/public/img/payment/cr1.png";
import cr2 from "/public/img/payment/cr2.png";
import cr3 from "/public/img/payment/cr3.png";
import payplus from "/public/img/payment/payplus.png";

const DebitCreaditInfo = () => {
  return (
    <div className="personal__infobody">
      <div className="personal__info__box">
        <div className="per__ittle border__bottom pb__20 d-flex align-items-center">
          <h5>Credit or Debit Cards</h5>
          <Link
            href="URL:void(0)"
            className="edit d-flex align-items-center gap-2"
          >
            <span className="icon delete">
              <i className="material-symbols-outlined">delete</i>
            </span>
            <span className="fz-18 fw-600">Delete Card</span>
          </Link>
        </div>
        <div className="debit__creadit d-flex align-items-center">
          <div className="card__box">
            <Image src={cr3} alt="img" />
          </div>
          <div className="card__box">
            <Image src={cr1} alt="img" />
          </div>
          <div className="card__box">
            <Image src={cr2} alt="img" />
          </div>
          <Link href="/URL:void(0)" className="card__boxed">
            <Image src={payplus} alt="img" />
            <span>Add New Card</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DebitCreaditInfo;
