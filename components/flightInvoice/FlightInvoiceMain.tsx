import Image from "next/image";
import Link from "next/link";
import qr from "/public/img/details/qr.jpg";
import reapp from "/public/img/details/reapp.png";

const FlightInvoiceMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers invoice__wrapper">
              <div className="invoice__textwrapper mb__40">
                <div className="invoice__leftbox">
                  <h3 className="upper dtext">Invoice</h3>
                  <div className="invoice__leftnumber">
                    <span className="bage">Account number</span>
                    <span className="counting">325 546 744</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Invoice Date</span>
                    <span className="counting">07/11/2023</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Payment Method</span>
                    <span className="counting">Credit Card</span>
                  </div>
                </div>
                <div className="invoice__righttbox">
                  <span className="hirename">Invoice To :</span>
                  <h5 className="name">Mr. Jonson Hawk</h5>
                  <div className="invoice__leftnumber">
                    <span className="bage">Phone</span>
                    <span className="counting">(684) 555-0102</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Email</span>
                    <span className="counting">nvt.isst.nute@gmail.com</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Web</span>
                    <span className="counting">https://www.ifeng.com/</span>
                  </div>
                </div>
              </div>
              <div className="order__summary__wrapper mb__40">
                <div className="over__responsive">
                  <h5 className="summary__title">Booking Summary</h5>
                  <div className="order__table__fluid order__table__flight">
                    <div className="order__table__items bg__add">
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Flight Details
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Operrator
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Receive amount
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Amount
                      </span>
                    </div>
                    <div className="order__table__items">
                      <span>Delta 71613 -</span>
                      <span>$980.00</span>
                      <span>0</span>
                      <span>$980.00</span>
                    </div>
                    <div className="order__table__itemsflight pb__15">
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Dubai To New York
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Travel Date - Sun,
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        22 dec 22, 02:50
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        hrs
                      </span>
                    </div>
                    <div className="order__table__items">
                      <span>Delta 71613 -</span>
                      <span>$980.00</span>
                      <span>0</span>
                      <span>$980.00</span>
                    </div>
                    <div className="order__table__itemsflight pb__15">
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Dubai To New York
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Travel Date - Sun,
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        22 dec 22, 02:50
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        hrs
                      </span>
                    </div>
                  </div>
                  <div className="order__table__box">
                    <div className="order__graph">
                      <ul>
                        <li>
                          <span>Sub Total:</span>
                          <span className="bg">$4531.00</span>
                        </li>
                        <li>
                          <span>Promotional Code:</span>
                          <span className="bg">0</span>
                        </li>
                        <li>
                          <span>Total:</span>
                          <span className="bg">$4531.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transaction__dating mb__40 d-flex align-items-center">
                <Image src={reapp} className="reapp img-fluid" alt="img" />
                <ul className="tran__date">
                  <li className="d-flex align-items-center">
                    <span className="blodtext fz-18 fw-600 lato dtext">
                      Transaction Date
                    </span>
                    <span className="fz-16 lato fw-400 dtext">11-12-22</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="blodtext fz-18 fw-600 lato dtext">
                      Gateway
                    </span>
                    <span className="fz-16 lato fw-400 dtext">Credit Card</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="blodtext fz-18 fw-600 lato dtext">
                      Transaction ID
                    </span>
                    <span className="fz-16 lato fw-400 dtext">321 565 788</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="blodtext fz-18 fw-600 lato dtext">
                      Amount :
                    </span>
                    <span className="fz-16 lato fw-400 dtext">$1583.20</span>
                  </li>
                </ul>
                <Image src={qr} className="qu__code img-fluid" alt="qr-code" />
              </div>
              <p className="note">
                Note : This is computer generated receipt and does not require
                physical signature.
              </p>
              <div className="print__point__btn d-flex align-items-center gap-3">
                <Link href="/URL:void(0)" className="cmn__btn">
                  <span>
                    <i className="material-symbols-outlined">print</i>
                  </span>
                  <span className="print">Print</span>
                </Link>
                <Link href="/URL:void(0)" className="cmn__btn">
                  <span>
                    <i className="material-symbols-outlined">download</i>
                  </span>
                  <span className="print">Download</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightInvoiceMain;
