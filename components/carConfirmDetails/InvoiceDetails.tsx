import Image from "next/image";
import Link from "next/link";
import farrari_invocie from "/public/img/details/farrari-invocie.jpg";
import fastpay from "/public/img/payment/fastpay.png";
import mastercard from "/public/img/payment/mastercard.png";
import payoneer from "/public/img/payment/payoneer.png";
import paypals from "/public/img/payment/paypals.png";
import visas from "/public/img/payment/visas.png";
import acs from "/public/img/svg/acs.svg";
import info_cancel from "/public/img/svg/info-cancel.svg";
import lock from "/public/img/svg/lock.svg";
import person from "/public/img/svg/person.svg";
import setting from "/public/img/svg/setting.svg";

const InvoiceDetails = () => {
  return (
    <div className="hotel__confirm__invocie car__confirmdetails__right">
      <h5 className="fw-600 gratext lato mb__20 text-center">
        Invoice Details
      </h5>
      <div className="carferrari__item flex-wrap d-flex align-items-center">
        <Link href="/URL:void(0)" className="thumb">
          <Image src={farrari_invocie} alt="cars" className="img-fluid" />
        </Link>
        <div className="carferrari__content">
          <div className="d-flex carferari__box justify-content-center">
            <div className="farrari__left">
              <div className="d-flex mb__20 align-items-center gap-4">
                <Link href="/URL:void(0)">
                  <h5 className="dtext">Ferrari M324</h5>
                </Link>
                <span className="suv fz-16 fw-400 lato d-block gratext">
                  <span className="gratext">Suv</span>
                </span>
              </div>
            </div>
          </div>
          <ul className="ferrari__pats mb__20 justify-content-between d-flex align-items-center">
            <li className="d-grid justify-content-center text-center">
              <span className="icon mb__10">
                <Image src={person} alt="icon" />
              </span>
              <span className="dtext fz-16 fw-400 lato d-block">5</span>
            </li>
            <li className="d-grid justify-content-center text-center">
              <span className="icon mb__10">
                <Image src={lock} alt="icon" />
              </span>
              <span className="dtext fz-16 fw-400 lato d-block">3</span>
            </li>
            <li className="d-grid justify-content-center text-center">
              <span className="icon mb__10">
                <Image src={setting} alt="icon" />
              </span>
              <span className="dtext fz-16 fw-400 lato d-block">Auto</span>
            </li>
            <li className="d-grid justify-content-center text-center">
              <span className="icon mb__10">
                <Image src={acs} alt="icon" />
              </span>
              <span className="dtext fz-16 fw-400 lato d-block">A/C</span>
            </li>
          </ul>
          <ul className="ferrari__list pb__20 d-flex">
            <li className="fz-16 fw-400 pratext lato">Free Cancellation</li>
            <li className="fz-16 fw-400 pratext lato">Price Guarantee</li>
            <li className="fz-16 fw-400 pratext lato">Instantly Confirmed</li>
            <li className="fz-16 fw-400 pratext lato">Third Party Liability</li>
          </ul>
        </div>
      </div>
      <div className="pickupdetails pb__20 mt__20">
        <div className="pickbox mb__20">
          <span className="fz-18 fw-600 dtext lato mb-1 d-block">Pick-up:</span>
          <span className="fz-16 dtext lato fw-400">
            December 14, 2022 at 08:00 AM , New York
          </span>
        </div>
        <div className="pickbox">
          <span className="fz-18 fw-600 dtext lato mb-1 d-block">
            Pick-off:
          </span>
          <span className="fz-16 dtext lato fw-400">
            December 21, 2022 at 08:00 AM, New York
          </span>
        </div>
      </div>
      <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
        <span className="fz-18 fw-600 lato dtext d-block">Product</span>
        <span className="fz-18 fw-600 lato dtext d-block">Total</span>
      </div>
      <ul className="price__cost price__costtwo mb__15">
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Base Fare</span>
          <span className="fz-18 fw-400 lato dtext">$442</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Travel Protection</span>
          <span className="fz-18 fw-400 lato dtext">$0</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Tax</span>
          <span className="fz-18 fw-400 lato dtext">$0</span>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Extra Service</span>
          <span className="fz-18 fw-400 lato dtext">$15</span>
        </li>
        <li className="d-flex pricelast__items align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">Hot Deals</span>
          <span className="fz-18 fw-400 lato dtext">-$0</span>
        </li>
      </ul>
      <form
        action="#0"
        className="d-flex mb__30 align-items-center justify-content-between"
      >
        <input type="text" placeholder="Promo Code" />
        <button className="cmn__btn" type="submit">
          <span>Apply</span>
        </button>
      </form>
      <div className="d-flex mb__30 ttoal__cost pricelast__items align-items-center justify-content-between">
        <span className="fz-18 fw-600 lato dtext">Total</span>
        <span className="fz-18 fw-600 lato dtext">$475</span>
      </div>
      <div className="direct__transfer">
        <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
          <div className="radio__left d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="proper1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="proper1">
              <span className="fz-16 lato fw-400 dtext">
                Direct bank transfer
              </span>
            </label>
          </div>
        </div>
        <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
          <div className="radio__left d-flex align-items-center gap-2">
            <input className="form-check-input" type="checkbox" id="proper2" />
            <label className="form-check-label" htmlFor="proper2">
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
            <input className="form-check-input" type="checkbox" id="proper3" />
            <label className="form-check-label" htmlFor="proper3">
              <span className="fz-16 lato fw-400 dtext">PayPal</span>
            </label>
          </div>
        </div>
      </div>
      <div className="have__condition mt__30 mb__30">
        <div className="radio__left d-flex align-items-center gap-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="proper5"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="proper5">
            <span className="fz-16 lato fw-400 dtext">
              I have read and agree to the website terms and conditions
            </span>
          </label>
        </div>
      </div>
      <div className="payment text-center mb__30">
        <Link href="/car-payment" className="cmn__btn">
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
