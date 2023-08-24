import Image from "next/image";
import Link from "next/link";
import fastpay from "/public/img/payment/fastpay.png";
import mastercard from "/public/img/payment/mastercard.png";
import payoneer from "/public/img/payment/payoneer.png";
import paypals from "/public/img/payment/paypals.png";
import visas from "/public/img/payment/visas.png";
import info_cancel from "/public/img/svg/info-cancel.svg";

const InvoiceDetails = () => {
  return (
    <div className="hotel__confirm__invocie">
      <h5 className="fw-600 lato mb__20 text-center">Invoice Details</h5>
      <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
        <span className="fz-18 fw-600 lato dtext d-block">Product</span>
        <span className="fz-18 fw-600 lato dtext d-block">Total</span>
      </div>
      <ul className="price__cost mb__30">
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Room Price</span>
          <span className="fz-18 fw-400 lato dtext">$442</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Extra Guests Cost</span>
          <span className="fz-18 fw-400 lato dtext">$0</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Extra Service</span>
          <span className="fz-18 fw-400 lato dtext">$15</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Total cost</span>
          <span className="fz-18 fw-400 lato dtext">$457</span>
        </li>
      </ul>
      <form
        action="#0"
        className="d-flex mb__30 align-items-center justify-content-between"
      >
        <input type="text" placeholder="Promo Code" required />
        <button className="cmn__btn" type="submit">
          <span>Apply</span>
        </button>
      </form>
      <div className="direct__transfer">
        <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
          <div className="radio__left d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked
            />
            <label className="form-check-label">
              <span className="fz-16 lato fw-400 dtext">
                Direct bank transfer
              </span>
            </label>
          </div>
        </div>
        <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
          <div className="radio__left d-flex align-items-center gap-2">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">
              <span className="fz-16 lato fw-400 dtext">Check payments</span>
            </label>
          </div>
        </div>
        <p className="textbg fz-16 fw-400">
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
        <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
          <div className="radio__left d-flex align-items-center gap-2">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">
              <span className="fz-16 lato fw-400 dtext">PayPal</span>
            </label>
          </div>
        </div>
      </div>
      <div className="have__condition mt__30 mb__30">
        <div className="radio__left d-flex align-items-center gap-2">
          <input className="form-check-input" type="checkbox" defaultChecked />
          <label className="form-check-label">
            <span className="fz-16 lato fw-400 dtext">
              I have read and agree to the website terms and conditions
            </span>
          </label>
        </div>
      </div>
      <div className="payment text-center mb__30">
        <Link href="/bus-payment" className="cmn__btn">
          <span>Payment Now</span>
        </Link>
      </div>
      <div className="payment__cards mb__20 d-flex align-items-center gap-2">
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
      <div className="full__refund d-flex justify-content-center align-items-center gap-2">
        <Image src={info_cancel} alt="img" />
        Full refund, 3-day concellation
      </div>
    </div>
  );
};

export default InvoiceDetails;
