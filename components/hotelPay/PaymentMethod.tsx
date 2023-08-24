import Image from "next/image";
import Link from "next/link";
import fastpay from "/public/img/payment/fastpay.png";
import mastercard from "/public/img/payment/mastercard.png";
import payoneer from "/public/img/payment/payoneer.png";
import paypals from "/public/img/payment/paypals.png";
import visas from "/public/img/payment/visas.png";

const PaymentMethod = () => {
  return (
    <>
      <h4 className="mb-4">Payment Methods</h4>
      <div className="card__text gap-3 mb__20 d-flex align-items-center justify-content-between">
        <span className="dtext xs-16 fw-400 fz-24 lato">
          Credit Card / Debit Card
        </span>
        <div className="payment__cards d-flex align-items-center gap-2">
          <Link href="/URL:void(0)">
            <Image src={paypals} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={visas} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={fastpay} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)">
            <Image src={payoneer} alt="payment-card" />
          </Link>
          <Link href="/URL:void(0)" className="master">
            <Image src={mastercard} alt="payment-card" />
          </Link>
        </div>
      </div>
      <div className="checkout__single-form">
        <p className="payment"></p>
        <div className="row g-3">
          <div className="col-lg-12">
            <div className="input-single">
              <label htmlFor="userCardNumber">Card number</label>
              <input
                type="number"
                name="user-card-number"
                id="userCardNumber"
                placeholder="2456 1665 5155 5151"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <label htmlFor="userCardDate">Expiry date</label>
              <input type="text" id="userCardDate" placeholder="DD/MM/YY" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <label htmlFor="userCvc">Espiry date</label>
              <input
                type="text"
                maxLength={3}
                name="user-card-cvc"
                id="userCvc"
                required
                placeholder="DD/MM/YY"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-single">
              <label htmlFor="userCardName">CVC / CVV</label>
              <input
                type="text"
                name="user-card-name"
                id="userCardName"
                placeholder="3 digits"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-single">
              <label htmlFor="userCardNamecard">Nmae on card</label>
              <input
                type="text"
                name="user-card-namecard"
                id="userCardNamecard"
                placeholder="J. smith"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-esingl input-check payment__save">
        <input
          className="form-check-input"
          type="checkbox"
          id="saveForNextcard"
        />
        <label htmlFor="saveForNextcard">Save for my next payment</label>
      </div>
      <div className="text-center mt-4">
        <Link href="/successful" className="cmn__btn">
          <span>Payment Now</span>
        </Link>
      </div>
    </>
  );
};

export default PaymentMethod;
