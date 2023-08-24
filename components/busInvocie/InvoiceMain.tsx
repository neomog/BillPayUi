import Link from "next/link";

const InvoiceMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers invoice__wrapper">
              <div className="invoice__textwrapper mb__30">
                <div className="invoice__leftbox">
                  <h3>Invoice</h3>
                  <div className="invoice__leftnumber">
                    <span className="bage">Account number</span>
                    <span className="counting">325 546 744</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Booking Date</span>
                    <span className="counting">07/11/2023</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Payment Method</span>
                    <span className="counting">Credit Card</span>
                  </div>
                </div>
                <div className="invoice__righttbox">
                  <span className="hirename">Passenger Details:</span>
                  <h5 className="name">Mr. Jonson Hawk</h5>
                  <div className="invoice__leftnumber">
                    <span className="bage">Age</span>
                    <span className="counting">31</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Phone</span>
                    <span className="counting">(684) 555-0102</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Email</span>
                    <span className="counting">nvt.isst.nute@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="invoice__journey mb__30">
                <h5 className="dtext border__bottom">Journey Details</h5>
                <div className="d-flex journey__invoicedata">
                  <ul className="jou__data">
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Transactions ID
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        CDFF123476359
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Train No & Name
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        Delta Express
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Booking Date
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        16-12-2022
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Class</span>
                      <span className="fz-18 fw-600 lato dtext">AC_Chair</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">From</span>
                      <span className="fz-18 fw-600 lato dtext">New York</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Departure</span>
                      <span className="fz-18 fw-600 lato dtext">10:20 pm</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Distance</span>
                      <span className="fz-18 fw-600 lato dtext">2856 Km</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Adult</span>
                      <span className="fz-18 fw-600 lato dtext">1</span>
                    </li>
                  </ul>
                  <ul className="jou__data jou__tadatwo">
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">PNR</span>
                      <span className="fz-18 fw-600 lato dtext">445216232</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Date of journey
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        22-12-2022
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Mode of payment
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        Credit Card
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Transaction
                      </span>
                      <span className="fz-18 fw-600 lato dtext">Success</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">To</span>
                      <span className="fz-18 fw-600 lato dtext">Dubai</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Child</span>
                      <span className="fz-18 fw-600 lato dtext">0</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Seats No</span>
                      <span className="fz-18 fw-600 lato dtext">A(1)</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Payment Amount
                      </span>
                      <span className="fz-18 fw-600 lato dtext">$114</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order__summary__wrapper mb__40">
                <div className="over__responsive">
                  <h5 className="summary__title">Booking Summary</h5>
                  <div className="order__table__fluid order__table__flight">
                    <div className="order__table__items bg__add">
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Bus Details
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Base Fare
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Taxes & Fee
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Amount
                      </span>
                    </div>
                    <div className="order__table__items">
                      <span>Delta 71613 -</span>
                      <span>$99.00</span>
                      <span>$13</span>
                      <span>$114.00</span>
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

export default InvoiceMain;
