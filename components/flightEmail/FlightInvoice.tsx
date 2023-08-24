import Image from "next/image";
import Link from "next/link";
import deltas from "/public/img/payment/deltas.jpg";
import over_check from "/public/img/svg/over-check.svg";
import pringting from "/public/img/svg/pringting.svg";

const FlightInvoice = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="hotel__emailinvoice invoice__wrapper hotel__invoice">
              <div className="invoice__textwrapper mb__10">
                <div className="invoice__leftbox">
                  <h3 className="dtext xs-32">Rechargio</h3>
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
                  <Image src={over_check} className="overcheck" alt="img" />
                  <label className="gratext fz-18 fw-600 lato">
                    Thank you! Your reservation has been confirmed.
                  </label>
                </div>
                <p className="fz-16 fw-400 lato dtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy...
                </p>
              </div>
              <div className="booking__refer">
                <div className="d-flex mb-1 align-items-center gap-3">
                  <span className="fz-18 fw-600 lato dtext">
                    Booking Reference Number :
                  </span>
                  <span className="fz-16 lato dtext">325 546 744</span>
                </div>
                <div className="d-flex mb-1 align-items-center gap-3">
                  <span className="fz-18 fw-600 lato dtext">
                    Booking Status
                  </span>
                  <span className="fz-16 lato dtext">07/11/2019</span>
                </div>
                <p className="fz-16 fw-400 dtext lato">
                  Thank you for booking your travel itinerary with Rechargio.
                </p>
              </div>
              <div className="booking__number mt__30 mb__30 row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <span className="fz-18 mb-1 d-block fw-600 lato dtext">
                    Booking Date :
                  </span>
                  <span className="fz-16 fw-400 lato dtext">15-12-22</span>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <span className="fz-18 mb-1 d-block fw-600 lato dtext">
                    Booking No :
                  </span>
                  <span className="fz-16 fw-400 lato dtext">236 245 265</span>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <span className="fz-18 mb-1 d-block fw-600 lato dtext">
                    Payment :
                  </span>
                  <span className="fz-16 fw-400 lato dtext">Credit Card</span>
                </div>
              </div>
              <div className="passenger__infos">
                <h5 className="dtext fw-400 mb__20">Passenger Information</h5>
                <div className="p__inforbox mb__30">
                  <div className="tablebg">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Nmae
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Confirmation
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Seat
                      </span>
                    </div>
                  </div>
                  <div className="bgwhite">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Neil Mack
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        #215552221
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        12B
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="passenger__infos priceb mb__20">
                <h5 className="dtext fw-400 mb__20">Flight Details</h5>
                <div className="p__inforbox mb__30">
                  <div className="tablebg">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Flight
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Depart
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Arrive
                      </span>
                    </div>
                  </div>
                  <div className="row justify-content-center bgwhite">
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="d-block">
                        <Image src={deltas} alt="img" />
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Delta Air Lines
                      </span>
                    </div>
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        New York 20-12-22, Sat
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        01:50 PMTravel Time: 1h
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        30mCabin Class:
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        EconomySeat: 12B
                      </span>
                    </div>
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Dubai, 21-12-22, Sat 19:38
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        PMBooking Code: SPlane
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Type: 772
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="passenger__infos">
                <h5 className="dtext fw-400 mb__20">Passenger Information</h5>
                <div className="p__inforbox mb__30">
                  <div className="tablebg">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Nmae
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Confirmation
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Seat
                      </span>
                    </div>
                  </div>
                  <div className="bgwhite">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Neil Mack
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        #215552221
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        12B
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="passenger__infos ">
                <h5 className="dtext fw-400 mb__20">Flight Details</h5>
                <div className="p__inforbox mb__30">
                  <div className="tablebg">
                    <div className="p__inf d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Flight
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Depart
                      </span>
                      <span className="fz-18 fw-600 lato d-block dtext">
                        Arrive
                      </span>
                    </div>
                  </div>
                  <div className="row justify-content-center bgwhite">
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="d-block">
                        <Image src={deltas} alt="img" />
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Delta Air Lines
                      </span>
                    </div>
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        New York 20-12-22, Sat
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        01:50 PMTravel Time: 1h
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        30mCabin Class:
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        EconomySeat: 12B
                      </span>
                    </div>
                    <div className="tableitems pt__10 pb__10 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Dubai, 21-12-22, Sat 19:38
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        PMBooking Code: SPlane
                      </span>
                      <span className="fz-16 fw-400 lato d-block dtext">
                        Type: 772
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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

export default FlightInvoice;
