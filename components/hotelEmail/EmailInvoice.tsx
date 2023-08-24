import Image from "next/image";
import Link from "next/link";
import pringting from "/public/img/svg/pringting.svg";

const EmailInvoice = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="hotel__emailinvoice invoice__wrapper hotel__invoice">
              <div className="invoice__textwrapper mb__10">
                <div className="invoice__leftbox">
                  <h3>Rechargio</h3>
                </div>
                <div className="invoice__righttbox mt-2">
                  <Image src={pringting} alt="img" />
                </div>
              </div>
              <div className="reservation__contetn pb__30 mb__30">
                <span className="dtext fz-16 fw-400 lato d-block mb__10">
                  Hey Thrresa Webb,
                </span>
                <div className="input-esingl input-check d-flex align-items-center gap-2 payment__save mb__15">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="saveForNextcard"
                    defaultChecked
                  />
                  <label
                    htmlFor="saveForNextcard"
                    className="gratext fz-18 fw-600 lato"
                  >
                    Thank you! Your reservation has been confirmed.
                  </label>
                </div>
                <p className="fz-16 fw-400 lato dtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy...
                </p>
              </div>
              <ul className="hotelinvocie__bookngid d-flex mb__30 justify-content-between">
                <li>
                  <span className="bookinid__item d-block mb__15">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Guest Name:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">
                      Theresa Webb
                    </span>
                  </span>
                  <span className="bookinid__item">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Hotel Details:
                    </span>
                    <span className="pratext fz-16 fw-400 lato dtext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="bookinid__item d-block mb__15">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Booking ID:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">1646464946</span>
                  </span>
                  <span className="bookinid__item d-block mb__15">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Booking Date:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">23/12/2023</span>
                  </span>
                  <span className="bookinid__item">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Payment Mode:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">Credit Card</span>
                  </span>
                </li>
                <li>
                  <span className="bookinid__item d-block mb__15">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Check In:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">22/12/2023</span>
                  </span>
                  <span className="bookinid__item d-block mb__15">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Check Out:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">23/12/2023</span>
                  </span>
                  <span className="bookinid__item">
                    <span className="d-block mb-1 dtext fw-600 fz-18 lato">
                      Rooms:
                    </span>
                    <span className="fz-16 fw-400 lato dtext">1</span>
                  </span>
                </li>
              </ul>
              <div className="invoice__scrool">
                <table className="hotel__invoicetable mb__30">
                  <thead>
                    <tr className="headfoot bgwhite">
                      <th>Description</th>
                      <th>Price</th>
                      <th>Vat%</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Room Charges</td>
                      <td>$442</td>
                      <td>5%</td>
                      <td>$452</td>
                    </tr>
                    <tr className="bgwhite">
                      <td>Extra Guests Cost</td>
                      <td>$0</td>
                      <td>0%</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td>Room Charges</td>
                      <td>$15</td>
                      <td>2%</td>
                      <td>$20</td>
                    </tr>
                    <tr className="headfoot bgwhite">
                      <th>Total</th>
                      <th>0</th>
                      <th>0</th>
                      <th>$472</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="d-flex bbottom pb__30 justify-content-center mb__30 align-items-center fz-16 lato dtext gap-2">
                <span className="fz-18 fw-600 lato dtext">Please Note:</span>
                Additional supplements are not added to this total.
              </p>
              <p className="note mt__30 text-center">
                Any Questions? Get in touch with our 24x7 Customer Care team
              </p>
              <div className="text-center">
                <Link href="/contact" className="cmn__btn">
                  <span>Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailInvoice;
