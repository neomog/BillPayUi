import Image from "next/image";
import Link from "next/link";
import call from "/public/img/svg/call.svg";
import message from "/public/img/svg/message.svg";
import parker_map from "/public/img/svg/parker-map.svg";

const HotelInvoiceMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers invoice__wrapper hotel__invoice">
              <div className="invoice__textwrapper pb__30 mb__30">
                <div className="invoice__leftbox">
                  <h3>Rechargio</h3>
                </div>
                <div className="invoice__righttbox">
                  <h5 className="name fw-700 dtext">Invoice</h5>
                  <span className="hirename fz-16 fw-400 dtext lato">
                    Invoice Number - 91735
                  </span>
                </div>
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
                  <tbody>
                    <tr className="headfoot bgwhite">
                      <th>Description</th>
                      <th>Price</th>
                      <th>Vat%</th>
                      <th>Total</th>
                    </tr>
                  </tbody>
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
              <p className="d-flex mb__30 align-items-center fz-16 lato dtext gap-2">
                <span className="fz-18 fw-600 lato dtext">Please Note:</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum...
              </p>
              <ul className="hotel__contact__invoice d-flex align-items-center gap-3 justify-content-between">
                <li className="d-flex align-items-center gap-3">
                  <span className="icon d-flex align-items-center justify-content-center">
                    <Image src={call} alt="svg" />
                  </span>
                  <Link href="/URL:void(0)">
                    <span className="fz-16 fw-400 lato dtext d-block">
                      (406) 555-0120
                    </span>
                    <span className="fz-16 fw-400 lato dtext">
                      (704) 555-0127
                    </span>
                  </Link>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="icon d-flex align-items-center justify-content-center">
                    <Image src={message} alt="svg" />
                  </span>
                  <Link href="/URL:void(0)">
                    <span className="fz-16 fw-400 lato dtext d-block">
                      Tienltnd@gmail.com
                    </span>
                    <span className="fz-16 fw-400 lato dtext">
                      Debhot@gamil.com
                    </span>
                  </Link>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="icon d-flex align-items-center justify-content-center">
                    <Image src={parker_map} alt="svg" />
                  </span>
                  <Link href="/URL:void(0)">
                    <span className="fz-16 fw-400 lato dtext d-block">
                      Parker Rd.
                    </span>
                    <span className="fz-16 fw-400 lato dtext">Allentown</span>
                  </Link>
                </li>
              </ul>
              <p className="note mt__30">
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

export default HotelInvoiceMain;
