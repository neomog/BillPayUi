import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import ata5g from "/public/img/payment/ata5g.png";

const choose = [
  { id: 1, name: "Choose a value" },
  { id: 2, name: "Choose one" },
  { id: 3, name: "Choose two" },
  { id: 4, name: "Choose three" },
  { id: 5, name: "Choose four" },
];
const code = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];
const code2 = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];
const code3 = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const Packages = () => {
  return (
    <>
      <div className="oparator__texts">
        {/* select here */}
        <Select data={choose} />
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T 10 USD PIN</span>
            </div>
            <p>Instant delicery to email</p>
            <span className="usd fz-16">USD 10.00</span>
            <div className="valu__btn">
              {/* select here */}
              <Select data={code} />
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T Prepaid Refill 10 USD</span>
            </div>
            <p>Instant delivery to phone</p>
            <span className="usd fz-16">USD 10.00</span>
            <div className="valu__btn">
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T Prepaid Refill 15 USD</span>
            </div>
            <p>Instant delivery to phone</p>
            <span className="usd fz-16">USD 15.00</span>
            <div className="valu__btn">
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T 15 USD PIN</span>
            </div>
            <p>Instant delivery to email</p>
            <span className="usd fz-16">USD 10.00</span>
            <div className="valu__btn">
              {/* select here */}
              <Select data={code2} />
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T 25 USD PIN</span>
            </div>
            <p>Instant delivery to email</p>
            <span className="usd fz-16">USD 25.00</span>
            <div className="valu__btn">
              {/* select here */}
              <Select data={code3} />
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="valu__items">
            <div className="valu__usd">
              <Image src={ata5g} alt="img" />
              <span className="fz-18 fw-500">AT&T Prepaid Refill 25 USD</span>
            </div>
            <p>Instant delivery to phone</p>
            <span className="usd fz-16">USD 25.00</span>
            <div className="valu__btn">
              <Link href="/order-summary" className="cmn__btn">
                <span>Choose</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
