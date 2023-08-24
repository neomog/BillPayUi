export const confermationMain1 = `     <section className="hotel__details overflow-hidden pt__60 pb__60">
<div className="container">
   <div className="row g-4">
      <div className="col-xl-8 col-lg-8">
         <div className="hotel__confrim__body">
            <h3 className="xs-28 dtext mb__30 fw-700">
               Confirm Hotel
            </h3>
            <div className="skyp__hotels__wrap mb__40">
               <div className="d-flex thumb__content gap-4 align-items-center">
                  <div className="left__thumb gap-2 d-flex align-items-center">
                     <img src="/img/details/condetails1.jpg" className="w-100" alt="img"/>
                     <img src="/img/details/condetails2.jpg" className="w-100" alt="img"/>
                  </div>
                  <div className="skyp__right__content">
                     <div className="d-flex mb__15 align-items-center justify-content-between">
                        <h4 className="dtext xs-28">
                           Skyp Hotel
                        </h4>
                        <span className="d-flex fz-18 fw-400 lato dtext align-items-center gap-3">
                           <img src="/img/svg/star.svg" alt="star"/>
                           40.7
                        </span>
                     </div>
                     <div className="fz-18 mb__15 fw-400 lato dtext d-flex align-items-center gap-2">
                        <img src="/img/svg/mlocation.svg" alt="img"/>
                        Paris, France
                     </div>
                     <div className="confirms__icons mb__15 d-flex align-items-center gap-2">
                        <span className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/facilities-bussen.svg" alt="svg"/>
                        </span>
                        <span className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/wifis.svg" alt="svg"/>
                        </span>
                        <span className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/bedss.svg" alt="svg"/>
                        </span>
                        <span className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/gum.svg" alt="svg"/>
                        </span>
                     </div>
                     <div className="d-flex align-items-center gap-2 justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                           <span className="icon d-flex align-items-center justify-content-center">
                              <img src="/img/svg/singlebess.svg" alt="svg"/>
                           </span>
                           <span className="fz-18 fw-400 lato textfive">
                              Single bed room
                           </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                           <span className="icon d-flex align-items-center justify-content-center">
                              <img src="/img/svg/person.svg" alt="svg"/>
                           </span>
                           <span className="fz-18 fw-400 lato textfive">
                              2 Guests
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="dating__body update__skypinfo mb__40">
               <div className="dating__body__box align-items-end gap-2 justify-content-between">
                  <div className="date__grpp">
                     <span className="dtext mb-2 d-block fz-18 fw-500 lato">
                        Check In
                     </span>
                     <div className="dating__item dating__hidden">
                        <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                           <input className="form-control" type="text" placeholder="20/12/2023" readonly/>
                           <span className="calendaricon">
                              <i className="material-symbols-outlined">
                                 calendar_month
                              </i>
                           </span>
                           <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                        </div>
                     </div>
                  </div>
                  <div className="date__grpp">
                     <span className="dtext mb-2 d-block fz-18 fw-500 lato">
                        Check Out
                     </span>
                     <div className="dating__item dating__hidden">
                        <div id="datepicker2" className="input-group date" data-date-format="dd-mm-yyyy">
                           <input className="form-control" type="text" placeholder="20/12/2023" readonly/>
                           <span className="calendaricon">
                              <i className="material-symbols-outlined">
                                 calendar_month
                              </i>
                           </span>
                           <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                        </div>
                     </div>
                  </div>
                  <div className="date__grpp">
                     <span className="dtext mb-2 d-block fz-18 fw-500 lato">
                        Rooms & Guests
                     </span>
                     <div className="dating__item dating__inetial select__border">
                        <select name="room">
                           <option value="1">
                              1 Room/ 1 People
                           </option>
                           <option value="2">
                              One Room
                           </option>
                           <option value="3">
                              One People
                           </option>
                        </select>
                     </div>
                  </div>
                  <div className="date__grpp">
                     <Link href="/javascript:void(0)" className="cmn__btn">
                        <span>
                           Update Info
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="house__rules mb__30">
               <h4 className="mb__20 dtext">
                  House Rules
               </h4>
               <ul className="house__list d-flex align-items-center flex-wrap">
                  <li>
                     Check-in: 12:00 pm - 10:00 am
                  </li>
                  <li>
                     No smokin
                  </li>
                  <li>
                     No pets allowed
                  </li>
                  <li>
                     Checkout: 09:00 am 
                  </li>
                  <li>
                     Drug addiction not allowed
                  </li>
                  <li>
                     No parties or events
                  </li>
               </ul>
            </div>
            <div className="cancellation__two">
            <div className="d-flex mb__15 align-items-center gap-3">
                  <div className="icons d-flex align-items-center justify-content-center">
                     <img src="/img/svg/info-cancel.svg" alt="svg"/>
                  </div>
                  <h5 className="dtext fw-700">
                     Cancellation
                  </h5>
            </div>
            <p className="fz-16 fw-400 lato dtext">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            </div>
         </div>
      </div>
      <div className="col-xl-4 col-lg-4">
         <div className="hotel__confirm__invocie">
            <h5 className="fw-600 lato mb__20 text-center">
               Invoice Details
            </h5>
            <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext d-block">
                  Product
               </span>
               <span className="fz-18 fw-600 lato dtext d-block">
                  Total
               </span>
            </div>
            <ul className="price__cost mb__30">
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Room Price
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $442
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Guests Cost
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Service
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $15
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Total cost
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $457
                  </span>
               </li>
            </ul>
            <form action="#0" className="d-flex mb__30 align-items-center justify-content-between">
               <input type="text" placeholder="Promo Code"/>
               <button className="cmn__btn" type="submit">
                  <span>
                     Apply
                  </span>
               </button>
            </form>
            <div className="direct__transfer">
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper19" checked/>
                     <label className="form-check-label" htmlFor="proper19">
                        <span className="fz-16 lato fw-400 dtext">
                           Direct bank transfer
                        </span>
                     </label>
                  </div>
               </div>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper2"/>
                     <label className="form-check-label" htmlFor="proper2">
                        <span className="fz-16 lato fw-400 dtext">
                           Check payments
                        </span>
                     </label>
                  </div>
               </div>
               <p className="textbg fz-16 fw-400">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
               </p>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper303"/>
                     <label className="form-check-label" htmlFor="proper303">
                        <span className="fz-16 lato fw-400 dtext">
                           PayPal
                        </span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="have__condition mt__30 mb__30">
               <div className="radio__left d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="proper503" checked/>
                  <label className="form-check-label" htmlFor="proper503">
                     <span className="fz-16 lato fw-400 dtext">
                        I have read and agree to the website terms and conditions
                     </span>
                  </label>
               </div>
            </div>
            <div className="payment text-center mb__30">
               <Link href="/hotel-payment.html" className="cmn__btn">
                  <span>
                     Payment Now
                  </span>
               </Link>
            </div>
            <div className="payment__cards mb__20 d-flex align-items-center gap-2">
               <Link href="/URL:void(0)">
                  <img src="/img/payment/paypals.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/visas.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/fastpay.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/payoneer.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)" className="master">
                  <img src="/img/payment/mastercard.png" alt="payment-card"/>
               </Link>
            </div>
            <div className="full__refund d-flex justify-content-center align-items-center gap-2">
               <img src="/img/svg/info-cancel.svg" alt="img"/>
               Full refund, 3-day concellation
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const flightDetailsMain = `      <section className="flight__onewaysectio pt__60 pb__60">
<div className="container">
   <div className="row g-4 justify-content-center">
      <div className="col-xxl-8 col-xl-8 col-lg-8">
         <div className="flight__oneway__confirmdetails shadow bgwhite">
            <h3 className="dtext mb__40 xs-28">
               Flight Details
            </h3>
            <div className="flight__oneway__item2 mb__30">
               <div className="flight__oneway__inner2">
                  <div className="table__two">
                     <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
                        <li className="fz-18 fw-500 lato dtext">Outbound <span className="gratext">Wed Dec 14, 2023</span> Economy</li>
                        <li className="fz-18 fw-500 lato dtext">Duration <span className="gratext">8h 30m</span></li>
                     </ul>
                     <div className="tabletwo__body d-flex justify-content-between w-100">
                        <div className="w-100">
                           <ul className="table__conponent align-items-center bbottom bgwhite d-flex justify-content-between">
                              <li>
                                 <span className="delta mb__10 d-block">
                                    <img src="/img/payment/deltas.jpg" alt="img"/>
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Delta Air Lines
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    80:10 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    NY, US
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    2h 10m
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    ( Non-Stop )
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    10:20 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Dubai
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flight__oneway__item2 mb__30">
               <div className="flight__oneway__inner2">
                  <div className="table__two">
                     <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
                        <li className="fz-18 fw-500 lato dtext">Return <span className="gratext">Wed Dec 14, 2023</span> Economy</li>
                        <li className="fz-18 fw-500 lato dtext">Duration <span className="gratext">7h 25m</span></li>
                     </ul>
                     <div className="tabletwo__body d-flex justify-content-between w-100">
                        <div className="w-100">
                           <ul className="table__conponent align-items-center bdash bgwhite d-flex justify-content-between">
                              <li>
                                 <span className="delta mb__10 d-block">
                                    <img src="/img/payment/deltas.jpg" alt="img"/>
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    American Air Lines
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    80:10 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    NY, US
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    2h 10m
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    ( Non-Stop )
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    10:20 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Dubai
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__protection">
               <div className="d-flex justify-content-between mb__10 align-items-center ">
                  <h5 className="dtext fw-700">
                     Baggage Information (per person)
                  </h5>
               </div>
               <div className="d-flex flex-wrap mb__30 align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Round Trip New York to Dubai
                  </span>
                  <span className="fz-18 fw-400 dtext lato">
                     Cabin: Coach
                  </span>
               </div>
            </div>
            <div className="bdash pb__30">
               <div className="row g-3">
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag1.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Personal Item
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Purse, small backpack, briefcase
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag2.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Carry-on bag
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Fits in overhead bin or under the seat
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag3.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Checked Bags
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Larges Bag Purse, small backpack
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/cross.svg" alt="check-svg"/>
                              </span>
                              Not Included
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__protection mt__30">
               <div className="d-flex flex-wrap justify-content-between mb__10 align-items-center ">
                  <h5 className="dtext fw-700">
                     Travel Protection
                  </h5>
                  <span className="fz-24 fw-400 lato gratext">$11.95</span>
               </div>
               <div className="d-flex flex-wrap mb__30 align-items-center justify-content-between">
                  <span className="fz-18 fw-600 lato dtext">
                     Reasons you might need travel protection
                  </span>
                  <span className="fz-16 fw-400 dtext lato">
                     per person
                  </span>
               </div>
            </div>
            <ul className="protection__list mb__15 d-flex align-items-center justify-content-between">
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Trip cancellation
               </li>
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Inclement weather
               </li>
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Travel dealy
               </li>
            </ul>
            <ul className="protection__list d-flex align-items-center justify-content-between">
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Trip cancellation
               </li>
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Inclement weather
               </li>
               <li className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="icon">
                     <img src="/img/svg/over-check.svg" alt="check-svg"/>
                  </span>
                  Travel dealy
               </li>
            </ul>
            <div className="input-esingl bdash pb__30 mt__30 input-check d-flex align-items-center gap-2 payment__save mb__15">
               <input className="form-check-input" type="checkbox" id="saveForNextcard00" checked/>
               <label htmlFor="saveForNextcard00" className="dtext fz-18 fw-400 lato"> <span className="gratext">Yes,</span> I want travel protection for my trip.</label>
            </div>
            <div className="travel__detailstext mt-4 mb__30">
               <h5 className="dtext mb__15">
                  Traveler Details
               </h5>
               <p className="dtext fz16 fw-400 lato">
                  Please enter the traveler's name and date of birth exactly as shown on the passport (for international flights) or valid government-issued photo ID (for domestic flights) to be used on this trip. Name changes are not permitted after booking.
               </p>
            </div>
            <div className="covid__restriction mb__30 d-flex align-items-center justify-content-between">
               <div className="icons d-flex align-items-center justify-content-center">
                  <img src="/img/svg/covid19.svg" alt="svg"/>
               </div>
               <p className="fz-16 fw-400 dtext lato">
                  Before booking your flight, please check the latest COVID-19 travel restrictions to world.
                  Please continuously check all COVID-19 related restrictions directly with airlines...
               </p>
               <Link href="/javascript:void(0)" className="cmn__btn">
                  <span>
                     See Restrictions
                  </span>
               </Link>
            </div>
            <div className="booking__landing__body">
               <div className="dating__body">
                  <div className="dating__body__box dating__flight mb__30">
                     <div className="row justify-content-center g-3">
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="First Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Last Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                                 <input className="form-control" type="text" placeholder="Depart Date" readonly/>
                                 <span className="calendaricon">
                                    <i className="material-symbols-outlined">
                                       calendar_month
                                    </i>
                                 </span>
                                 <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Adult
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Child
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Gender Select
                                 </option>
                                 <option value="2">
                                    1 st
                                 </option>
                                 <option value="3">
                                    2 nd
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Phone"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="input-esingl mt__30 input-check d-flex align-items-center gap-2 payment__save">
               <input className="form-check-input" type="checkbox" id="saveForNextcard01" checked/>
               <label htmlFor="saveForNextcard01" className="dtext fz-18 fw-400 lato">I consent to receive marketing emails from Rechargio</label>
            </div>
         </div>
      </div>
      <div className="col-xl-4 col-lg-4">
         <div className="hotel__confirm__invocie">
            <h5 className="fw-600 gratext lato mb__20 text-center">
               Invoice Details
            </h5>
            <div className="ticket__timeout mb__24">
               <p className="fz-16 fw-400 mb__10 lato dtext">
                  Book now before tickets run out!
               </p>
               <div className="d-flex gap-3 align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                     <img src="/img/svg/clocks.svg" alt="clock"/>
                  </div>
                  <div className="content">
                     <div className="d-flex align-items-center gap-2">
                        <span className="fz-24 lato fw-400 gratext">
                           29
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           :
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           01
                        </span>
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <span className="fz-16 fw-400 dtext">
                           Min
                        </span>
                        <span className="fz-16 fw-400 dtext">
                           Sec
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext d-block">
                  Product
               </span>
               <span className="fz-18 fw-600 lato dtext d-block">
                  Total
               </span>
            </div>
            <ul className="price__cost price__costtwo mb__15">
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Base Fare
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $442
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel Protection
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Tax
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Service
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $15
                  </span>
               </li>
               <li className="d-flex pricelast__items align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Hot Deals
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     -$0
                  </span>
               </li>
            </ul>
            <form action="#0" className="d-flex mb__30 align-items-center justify-content-between">
               <input type="text" placeholder="Promo Code"/>
               <button className="cmn__btn" type="submit">
                  <span>
                     Apply
                  </span>
               </button>
            </form>
            <div className="d-flex mb__30 ttoal__cost pricelast__items align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext">
                  Total
               </span>
               <span className="fz-18 fw-600 lato dtext">
                  $475
               </span>
            </div>
            <div className="direct__transfer">
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper11" checked/>
                     <label className="form-check-label" htmlFor="proper11">
                        <span className="fz-16 lato fw-400 dtext">
                           Direct bank transfer
                        </span>
                     </label>
                  </div>
               </div>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper203"/>
                     <label className="form-check-label" htmlFor="proper203">
                        <span className="fz-16 lato fw-400 dtext">
                           Check payments
                        </span>
                     </label>
                  </div>
               </div>
               <p className="textbg fz-16 fw-400">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
               </p>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper305"/>
                     <label className="form-check-label" htmlFor="proper305">
                        <span className="fz-16 lato fw-400 dtext">
                           PayPal
                        </span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="have__condition mt__30 mb__30">
               <div className="radio__left d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="proper505" checked/>
                  <label className="form-check-label" htmlFor="proper505">
                     <span className="fz-16 lato fw-400 dtext">
                        I have read and agree to the website terms and conditions
                     </span>
                  </label>
               </div>
            </div>
            <div className="payment text-center mb__30">
               <Link href="/flight-payment.html" className="cmn__btn">
                  <span>
                     Payment Now
                  </span>
               </Link>
            </div>
            <div className="payment__cards mb__20 d-flex align-items-center gap-2">
               <Link href="/URL:void(0)">
                  <img src="/img/payment/paypals.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/visas.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/fastpay.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/payoneer.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)" className="master">
                  <img src="/img/payment/mastercard.png" alt="payment-card"/>
               </Link>
            </div>
            <div className="full__refund d-flex justify-content-center align-items-center gap-2">
               <img src="/img/svg/info-cancel.svg" alt="img"/>
               Full refund, 3-day concellation
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const trainDetailsMain = `       <section className="flight__onewaysectio pt__60 pb__60">
<div className="container">
   <div className="row g-4 justify-content-center">
      <div className="col-xxl-8 col-xl-8 col-lg-8">
         <div className="flight__oneway__confirmdetails shadow bgwhite">
            <h3 className="dtext mb__40 xs-28">
               Confirm Trains Details
            </h3>
            <div className="flight__oneway__item2 bdash pb__30 mb__30">
               <div className="flight__oneway__inner2">
                  <div className="table__two">
                     <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
                        <li className="fz-18 fw-500 d-block lato dtext">New York TO Dubai</li>
                        <li className="fz-18 fw-500 d-block lato dtext d-flex g-2">22-12-23 Sat (Duration <span className="gratext d-block">8h 30m)</span></li>
                     </ul>
                     <div className="tabletwo__body d-flex justify-content-between w-100">
                        <div className="w-100">
                           <ul className="table__conponent align-items-center tablebg d-flex justify-content-between">
                              <li>
                                 <span className="delta mb__10 d-block">
                                    <img src="/img/payment/deltas.jpg" alt="img"/>
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Delta Express
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    14:10 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    NY, US
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    2h 10m
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    (13+Stops )
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    10:20 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Dubai
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                 Seat No: 1
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Coach : A
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__protection">
               <div className="d-flex justify-content-between mb__10 align-items-center ">
                  <h5 className="dtext fw-700">
                     Baggage Information
                  </h5>
               </div>
               <div className="d-flex flex-wrap mb__30 align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel New York to Dubai
                  </span>
                  <span className="fz-18 fw-400 dtext lato">
                     Coach: A
                  </span>
               </div>
            </div>
            <div className="bdash pb__30">
               <div className="row g-3">
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag1.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Personal Item
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Purse, small backpack, briefcase
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag2.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Carry-on bag
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Fits in overhead bin or under the seat
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag3.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Checked Bags
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Larges Bag Purse, small backpack
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/cross.svg" alt="check-svg"/>
                              </span>
                              Not Included
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__detailstext mt-4 mb__30">
               <h5 className="dtext mb__15">
                  Traveler Details
               </h5>
               <p className="dtext fz16 fw-400 lato">
                  Please enter the traveler's name and date of birth exactly as shown on the passport (for international flights) or valid government-issued photo ID (for domestic flights) to be used on this trip. Name changes are not permitted after booking.
               </p>
            </div>
            <div className="covid__restriction mb__30 d-flex align-items-center justify-content-between">
               <div className="icons d-flex align-items-center justify-content-center">
                  <img src="/img/svg/covid19.svg" alt="svg"/>
               </div>
               <p className="fz-16 fw-400 dtext lato">
                  Before booking your flight, please check the latest COVID-19 travel restrictions to world.
                  Please continuously check all COVID-19 related restrictions directly with airlines...
               </p>
               <Link href="/javascript:void(0)" className="cmn__btn">
                  <span>
                     See Restrictions
                  </span>
               </Link>
            </div>
            <div className="booking__landing__body">
               <div className="dating__body">
                  <div className="dating__body__box dating__flight mb__30">
                     <div className="row justify-content-center g-3">
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="First Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Last Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                                 <input className="form-control" type="text" placeholder="Depart Date" readonly/>
                                 <span className="calendaricon">
                                    <i className="material-symbols-outlined">
                                       calendar_month
                                    </i>
                                 </span>
                                 <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Adult
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Child
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Gender Select
                                 </option>
                                 <option value="2">
                                    1 st
                                 </option>
                                 <option value="3">
                                    2 nd
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Phone"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="input-esingl mt__30 input-check d-flex align-items-center gap-2 payment__save">
               <input className="form-check-input" type="checkbox" id="saveForNextcard4" checked/>
               <label htmlFor="saveForNextcard4" className="dtext fz-18 fw-400 lato">I consent to receive marketing emails from Rechargio</label>
            </div>
         </div>
        
      </div>
      <div className="col-xl-4 col-lg-4">
         <div className="hotel__confirm__invocie">
            <h5 className="fw-600 gratext lato mb__20 text-center">
               Invoice Details
            </h5>
            <div className="ticket__timeout mb__24">
               <p className="fz-16 fw-400 mb__10 lato dtext">
                  Book now before tickets run out!
               </p>
               <div className="d-flex gap-3 align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                     <img src="/img/svg/clocks.svg" alt="clock"/>
                  </div>
                  <div className="content">
                     <div className="d-flex align-items-center gap-2">
                        <span className="fz-24 lato fw-400 gratext">
                           29
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           :
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           01
                        </span>
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <span className="fz-16 fw-400 dtext">
                           Min
                        </span>
                        <span className="fz-16 fw-400 dtext">
                           Sec
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext d-block">
                  Product
               </span>
               <span className="fz-18 fw-600 lato dtext d-block">
                  Total
               </span>
            </div>
            <ul className="price__cost price__costtwo mb__15">
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Base Fare
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $442
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel Protection
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Tax
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Service
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $15
                  </span>
               </li>
               <li className="d-flex pricelast__items align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Hot Deals
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     -$0
                  </span>
               </li>
            </ul>
            <form action="3" className="d-flex mb__30 align-items-center justify-content-between">
               <input type="text" placeholder="Promo Code"/>
               <button className="cmn__btn" type="submit">
                  <span>
                     Apply
                  </span>
               </button>
            </form>
            <div className="d-flex mb__30 ttoal__cost pricelast__items align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext">
                  Total
               </span>
               <span className="fz-18 fw-600 lato dtext">
                  $475
               </span>
            </div>
            <div className="direct__transfer">
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper13" checked/>
                     <label className="form-check-label" htmlFor="proper13">
                        <span className="fz-16 lato fw-400 dtext">
                           Direct bank transfer
                        </span>
                     </label>
                  </div>
               </div>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper205"/>
                     <label className="form-check-label" htmlFor="proper205">
                        <span className="fz-16 lato fw-400 dtext">
                           Check payments
                        </span>
                     </label>
                  </div>
               </div>
               <p className="textbg fz-16 fw-400">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
               </p>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper307"/>
                     <label className="form-check-label" htmlFor="proper307">
                        <span className="fz-16 lato fw-400 dtext">
                           PayPal
                        </span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="have__condition mt__30 mb__30">
               <div className="radio__left d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="proper507" checked/>
                  <label className="form-check-label" htmlFor="proper507">
                     <span className="fz-16 lato fw-400 dtext">
                        I have read and agree to the website terms and conditions
                     </span>
                  </label>
               </div>
            </div>
            <div className="payment text-center mb__30">
               <Link href="/train-payment.html" className="cmn__btn">
                  <span>
                     Payment Now
                  </span>
               </Link>
            </div>
            <div className="payment__cards mb__20 d-flex align-items-center gap-2">
               <Link href="/URL:void(0)">
                  <img src="/img/payment/paypals.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/visas.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/fastpay.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/payoneer.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)" className="master">
                  <img src="/img/payment/mastercard.png" alt="payment-card"/>
               </Link>
            </div>
            <div className="full__refund d-flex justify-content-center align-items-center gap-2">
               <img src="/img/svg/info-cancel.svg" alt="img"/>
               Full refund, 3-day concellation
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const busDetailsMain = `        <section className="flight__onewaysectio pt__60 pb__60">
<div className="container">
   <div className="row g-4 justify-content-center">
      <div className="col-xxl-8 col-xl-8 col-lg-8">
         <div className="flight__oneway__confirmdetails shadow bgwhite">
            <h3 className="dtext mb__40 xs-28">
               Confirm Bus Details
            </h3>
            <div className="flight__oneway__item2 bdash pb__30 mb__30">
               <div className="flight__oneway__inner2">
                  <div className="table__two">
                     <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
                        <li className="fz-18 fw-500 d-block lato dtext">New York TO les vignes</li>
                        <li className="fz-18 fw-500 d-block lato dtext d-flex g-2">22-12-23 Sat (Duration <span className="gratext d-block">2h 30m)</span></li>
                     </ul>
                     <div className="tabletwo__body d-flex justify-content-between w-100">
                        <div className="w-100">
                           <ul className="table__conponent align-items-center tablebg d-flex justify-content-between">
                              <li>
                                 <span className="delta mb__10 d-block">
                                    <img src="/img/payment/deltas.jpg" alt="img"/>
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    Delta Express
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    8:10 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    New York
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    2h 10m
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    (5+Stops)
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                    10:20 am
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    les Vignes
                                 </span>
                              </li>
                              <li>
                                 <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                                 Seat No: 1
                                 </span>
                                 <span className="fz-16 fw-400 lato">
                                    AC_Sleeper
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__protection">
               <div className="d-flex justify-content-between mb__10 align-items-center ">
                  <h5 className="dtext fw-700">
                     Baggage Information
                  </h5>
               </div>
               <div className="d-flex flex-wrap mb__30 align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel New York to les VVignes
                  </span>
                  <span className="fz-18 fw-400 dtext lato">
                     Coach: AC_Sleeper
                  </span>
               </div>
            </div>
            <div className="bdash pb__30">
               <div className="row g-3">
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag1.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Personal Item
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Purse, small backpack, briefcase
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag2.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Carry-on bag
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Fits in overhead bin or under the seat
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/over-check.svg" alt="check-svg"/>
                              </span>
                              Included
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="baggage__info d-flex gap-3">
                        <div className="icon d-flex align-items-center justify-content-center">
                           <img src="/img/svg/pbag3.svg" alt="bag"/>
                        </div>
                        <div className="content">
                           <span className="fz-18 d-block mb-1 fw-600 lato ">
                              Checked Bags
                           </span>
                           <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                              Larges Bag Purse, small backpack
                           </span>
                           <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                              <span className="sicon">
                                 <img src="/img/svg/cross.svg" alt="check-svg"/>
                              </span>
                              Not Included
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="travel__detailstext mt-4 mb__30">
               <h5 className="dtext mb__15">
                  Traveler Details
               </h5>
               <p className="dtext fz16 fw-400 lato">
                  Please enter the traveler's name and date of birth exactly as shown on the passport (for international flights) or valid government-issued photo ID (for domestic flights) to be used on this trip. Name changes are not permitted after booking.
               </p>
            </div>
            <div className="covid__restriction mb__30 d-flex align-items-center justify-content-between">
               <div className="icons d-flex align-items-center justify-content-center">
                  <img src="/img/svg/covid19.svg" alt="svg"/>
               </div>
               <p className="fz-16 fw-400 dtext lato">
                  Before booking your flight, please check the latest COVID-19 travel restrictions to world.
                  Please continuously check all COVID-19 related restrictions directly with airlines...
               </p>
               <Link href="/javascript:void(0)" className="cmn__btn">
                  <span>
                     See Restrictions
                  </span>
               </Link>
            </div>
            <div className="booking__landing__body">
               <div className="dating__body">
                  <div className="dating__body__box dating__flight mb__30">
                     <div className="row justify-content-center g-3">
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="First Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Last Name"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                                 <input className="form-control" type="text" placeholder="Depart Date" readonly/>
                                 <span className="calendaricon">
                                    <i className="material-symbols-outlined">
                                       calendar_month
                                    </i>
                                 </span>
                                 <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Adult
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Child
                                 </option>
                                 <option value="2">
                                    1
                                 </option>
                                 <option value="3">
                                    2
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item select__border">
                              <select name="room">
                                 <option value="1">
                                    Gender Select
                                 </option>
                                 <option value="2">
                                    1 st
                                 </option>
                                 <option value="3">
                                    2 nd
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="dating__item dating__hidden">
                              <input type="text" placeholder="Phone"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="input-esingl mt__30 input-check d-flex align-items-center gap-2 payment__save">
               <input className="form-check-input" type="checkbox" id="saveForNextcard66" checked/>
               <label htmlFor="saveForNextcard66" className="dtext fz-18 fw-400 lato">I consent to receive marketing emails from Rechargio</label>
            </div>
         </div>
      </div>
      <div className="col-xl-4 col-lg-4">
         <div className="hotel__confirm__invocie">
            <h5 className="fw-600 gratext lato mb__20 text-center">
               Invoice Details
            </h5>
            <div className="ticket__timeout mb__24">
               <p className="fz-16 fw-400 mb__10 lato dtext">
                  Book now before tickets run out!
               </p>
               <div className="d-flex gap-3 align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                     <img src="/img/svg/clocks.svg" alt="clock"/>
                  </div>
                  <div className="content">
                     <div className="d-flex align-items-center gap-2">
                        <span className="fz-24 lato fw-400 gratext">
                           29
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           :
                        </span>
                        <span className="fz-24 lato fw-400 gratext">
                           01
                        </span>
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <span className="fz-16 fw-400 dtext">
                           Min
                        </span>
                        <span className="fz-16 fw-400 dtext">
                           Sec
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex product__total pb__15 mb__15 align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext d-block">
                  Product
               </span>
               <span className="fz-18 fw-600 lato dtext d-block">
                  Total
               </span>
            </div>
            <ul className="price__cost price__costtwo mb__15">
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Base Fare
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $442
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel Protection
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Tax
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Service
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $15
                  </span>
               </li>
               <li className="d-flex pricelast__items align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Hot Deals
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     -$0
                  </span>
               </li>
            </ul>
            <form action="#0" className="d-flex mb__30 align-items-center justify-content-between">
               <input type="text" placeholder="Promo Code"/>
               <button className="cmn__btn" type="submit">
                  <span>
                     Apply
                  </span>
               </button>
            </form>
            <div className="d-flex mb__30 ttoal__cost pricelast__items align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext">
                  Total
               </span>
               <span className="fz-18 fw-600 lato dtext">
                  $475
               </span>
            </div>
            <div className="direct__transfer">
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper15" checked/>
                     <label className="form-check-label" htmlFor="proper15">
                        <span className="fz-16 lato fw-400 dtext">
                           Direct bank transfer
                        </span>
                     </label>
                  </div>
               </div>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper207"/>
                     <label className="form-check-label" htmlFor="proper207">
                        <span className="fz-16 lato fw-400 dtext">
                           Check payments
                        </span>
                     </label>
                  </div>
               </div>
               <p className="textbg fz-16 fw-400">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
               </p>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper309"/>
                     <label className="form-check-label" htmlFor="proper309">
                        <span className="fz-16 lato fw-400 dtext">
                           PayPal
                        </span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="have__condition mt__30 mb__30">
               <div className="radio__left d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="proper509" checked/>
                  <label className="form-check-label" htmlFor="proper509">
                     <span className="fz-16 lato fw-400 dtext">
                        I have read and agree to the website terms and conditions
                     </span>
                  </label>
               </div>
            </div>
            <div className="payment text-center mb__30">
               <Link href="/bus-payment.html" className="cmn__btn">
                  <span>
                     Payment Now
                  </span>
               </Link>
            </div>
            <div className="payment__cards mb__20 d-flex align-items-center gap-2">
               <Link href="/URL:void(0)">
                  <img src="/img/payment/paypals.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/visas.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/fastpay.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/payoneer.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)" className="master">
                  <img src="/img/payment/mastercard.png" alt="payment-card"/>
               </Link>
            </div>
            <div className="full__refund d-flex justify-content-center align-items-center gap-2">
               <img src="/img/svg/info-cancel.svg" alt="img"/>
               Full refund, 3-day concellation
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const confermationMain = `        <section className="flight__onewaysectio pt__60 pb__60">
<div className="container">
   <div className="row g-4 justify-content-center">
      <div className="col-xxl-8 col-xl-8 col-lg-8">
         <div className="car__driverdetails mb__40">
            <h5 className="dtext border__bottom pb__24">
               Driver Details
            </h5>
            <form action="#0" className="signup__form pt__40">
               <div className="row g-4 justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" placeholder="Enter First Name"/>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="emaill">Last Name</label>
                        <input type="email" id="emaill" placeholder="Enter Last Name"/>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="driver">Driver Age</label>
                        <input type="text" id="driver" placeholder="30-60"/>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="eemain3">Email</label>
                        <input type="text" id="eemain3" placeholder="Enter Email"/>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="eemain4">Mobile Number</label>
                        <input type="text" id="eemain4" placeholder="Enter Mobile Number"/>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className="input__grp">
                        <label htmlFor="drinoe">Driving License No</label>
                        <input type="text" id="drinoe" placeholder="Enter Mobile Number"/>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="input__grp">
                        <label htmlFor="comment">Description / Address</label>
                        <textarea className="form-control" rows="3" id="comment" name="text" placeholder="About your self..."></textarea>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         <div className="impotant__excess mb__40">
            <h5 className="dtext border__bottom pb__20 mb__20">
               Important Information
            </h5>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
               <li className="nav-item" role="presentation">
               <button className="nav-link active" id="pills-home-tab1" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true">
                  Excess
               </button>
               </li>
               <li className="nav-item" role="presentation">
               <button className="nav-link" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">
                  Mileage Allowance
               </button>
               </li>
               <li className="nav-item" role="presentation">
               <button className="nav-link" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact3" aria-selected="false">
                  Age Requirements
               </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab4" data-bs-toggle="pill" data-bs-target="#pills-contact4" type="button" role="tab" aria-controls="pills-contact4" aria-selected="false">
                     Need at Pick-up
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab5" data-bs-toggle="pill" data-bs-target="#pills-contact5" type="button" role="tab" aria-controls="pills-contact5" aria-selected="false">
                     Payment Methods
                  </button>
               </li>
            </ul>
            <div className="tab-content" id="pills-tabContentts">
               <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
               </div>
               <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
               </div>
               <div className="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact-tab3">
                  Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
               </div>
               <div className="tab-pane fade" id="pills-contact4" role="tabpanel" aria-labelledby="pills-contact-tab4">
                  Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
               </div>
               <div className="tab-pane fade" id="pills-contact5" role="tabpanel" aria-labelledby="pills-contact-tab5">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
               </div>
            </div>
         </div>
         <div className="cancellationtwo mb__40">
            <span className="dtext fz-18 d-block fw-600 lato mb__10">
               Cancellation Policy
            </span>
            <p className="fz-16 fw-400 lato dtext">
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
         </div>
         <div className="cancellation">
            <h4 className="dtext mb__15">
               Safety precautions
            </h4>
            <p className="fz-16 fw-400 lato dtext">
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
         </div>
         <div className="comment__details__wrapper">
            <div className="d-flex pb__40 gap-4 align-items-center">
               <h4 className="dtext">
                  Review 
               </h4>
               <span className="d-flex fz-24 fw-400 lato dtext align-items-center gap-2">
                  <img src="/img/svg/star.svg" className="review__star" alt="img"/>
                  4.9
               </span>
            </div>
            <div className="comment__box__inner nlfbottom pb__20 mb__15">
               <div className="man">
                  <img src="/img/blog/jeromes.png" alt="img"/>
               </div>
               <div className="comment__content">
                  <h5>
                     Jerome Bell <span>2 days ago</span>
                  </h5>
                  <p className="pb__20">
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...
                  </p>
                  <div className="admin__commments">
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/flike.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           18
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/comments.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Reply
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/sshare.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Share
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="comment__box__inner nlfbottom pb__20 mt__15">
               <div className="man">
                  <img src="/img/blog/bessies.png" alt="img"/>
               </div>
               <div className="comment__content">
                  <h5>
                     Courtney Henry <span>2 days ago</span>
                  </h5>
                  <p className="pb__20">
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...
                  </p>
                  <div className="admin__commments mb__15">
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/flike.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           18
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/comments.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Reply
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/sshare.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Share
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="comment__box__inner mt__15">
               <div className="man">
                  <img src="/img/blog/comm3.png" alt="img"/>
               </div>
               <div className="comment__content">
                  <h5>
                     Bessie Cooper <span>2 days ago</span>
                  </h5>
                  <p className="pb__20">
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...
                  </p>
                  <div className="admin__commments mb__15">
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/flike.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           18
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/comments.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Reply
                        </span>
                     </Link>
                     <Link href="/URL:void(0)">
                        <span className="icon">
                           <img src="/img/svg/sshare.svg" alt="icon"/>
                        </span>
                        <span className="text">
                           Share
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="view__more d-flex justify-content-center pt__40">
               <Link href="/javascript:void(0)" className="cmn__btn">
                  <span>
                     View All Reviews
                  </span>
               </Link>
            </div>
         </div>
         <form action="#0" className="write__comment">
            <h4 className="xs-28">
               Write a review
            </h4>
            <input type="text" placeholder="Enter Your Name..."/>
            <input type="email" placeholder="Enter Your Email..."/>
            <textarea name="writecommnet" cols="30" rows="5" placeholder="Write a comment..."></textarea>
            <button type="submit" className="cmn__btn">
               <span>
                  Submit Now
               </span>
            </button>
         </form>
      </div>
      <div className="col-xl-4 col-lg-4">
         <div className="hotel__confirm__invocie car__confirmdetails__right">
            <h5 className="fw-600 gratext lato mb__20 text-center">
               Invoice Details
            </h5>
            <div className="carferrari__item flex-wrap d-flex align-items-center">
               <Link href="/URL:void(0)" className="thumb">
                  <img src="/img/details/farrari-invocie.jpg" alt="cars"/>
               </Link>
               <div className="carferrari__content">
                  <div className="d-flex carferari__box justify-content-center">
                     <div className="farrari__left">
                        <div className="d-flex mb__20 align-items-center gap-4">
                           <Link href="/URL:void(0)">
                              <h5 className="dtext">
                                 Ferrari M324
                              </h5>
                           </Link>
                           <span className="suv fz-16 fw-400 lato d-block gratext">
                              <span className="gratext">
                                 Suv
                              </span>
                           </span>
                        </div>
                     </div>
                  </div>
                  <ul className="ferrari__pats mb__20 justify-content-between d-flex align-items-center">
                     <li className="d-grid justify-content-center text-center">
                        <span className="icon mb__10">
                           <img src="/img/svg/person.svg" alt="icon"/>
                        </span>
                        <span className="dtext fz-16 fw-400 lato d-block">
                           5
                        </span>
                     </li>
                     <li className="d-grid justify-content-center text-center">
                        <span className="icon mb__10">
                           <img src="/img/svg/lock.svg" alt="icon"/>
                        </span>
                        <span className="dtext fz-16 fw-400 lato d-block">
                           3
                        </span>
                     </li>
                     <li className="d-grid justify-content-center text-center">
                        <span className="icon mb__10">
                           <img src="/img/svg/setting.svg" alt="icon"/>
                        </span>
                        <span className="dtext fz-16 fw-400 lato d-block">
                           Auto
                        </span>
                     </li>
                     <li className="d-grid justify-content-center text-center">
                        <span className="icon mb__10">
                           <img src="/img/svg/acs.svg" alt="icon"/>
                        </span>
                        <span className="dtext fz-16 fw-400 lato d-block">
                           A/C
                        </span>
                     </li>
                  </ul>
                  <ul className="ferrari__list pb__20 d-flex">
                     <li className="fz-16 fw-400 pratext lato">
                        Free Cancellation
                     </li>
                     <li className="fz-16 fw-400 pratext lato">
                        Price Guarantee
                     </li>
                     <li className="fz-16 fw-400 pratext lato">
                        Instantly Confirmed
                     </li>
                     <li className="fz-16 fw-400 pratext lato">
                        Third Party Liability
                     </li>
                  </ul>
               </div>
            </div>
            <div className="pickupdetails pb__20 mt__20">
               <div className="pickbox mb__20">
                  <span className="fz-18 fw-600 dtext lato mb-1 d-block">
                     Pick-up:
                  </span>
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
               <span className="fz-18 fw-600 lato dtext d-block">
                  Product
               </span>
               <span className="fz-18 fw-600 lato dtext d-block">
                  Total
               </span>
            </div>
            <ul className="price__cost price__costtwo mb__15">
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Base Fare
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $442
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Travel Protection
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Tax
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $0
                  </span>
               </li>
               <li className="d-flex align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Extra Service
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     $15
                  </span>
               </li>
               <li className="d-flex pricelast__items align-items-center justify-content-between">
                  <span className="fz-18 fw-400 lato dtext">
                     Hot Deals
                  </span>
                  <span className="fz-18 fw-400 lato dtext">
                     -$0
                  </span>
               </li>
            </ul>
            <form action="#0" className="d-flex mb__30 align-items-center justify-content-between">
               <input type="text" placeholder="Promo Code"/>
               <button className="cmn__btn" type="submit">
                  <span>
                     Apply
                  </span>
               </button>
            </form>
            <div className="d-flex mb__30 ttoal__cost pricelast__items align-items-center justify-content-between">
               <span className="fz-18 fw-600 lato dtext">
                  Total
               </span>
               <span className="fz-18 fw-600 lato dtext">
                  $475
               </span>
            </div>
            <div className="direct__transfer">
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper17" checked/>
                     <label className="form-check-label" htmlFor="proper17">
                        <span className="fz-16 lato fw-400 dtext">
                           Direct bank transfer
                        </span>
                     </label>
                  </div>
               </div>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper209"/>
                     <label className="form-check-label" htmlFor="proper209">
                        <span className="fz-16 lato fw-400 dtext">
                           Check payments
                        </span>
                     </label>
                  </div>
               </div>
               <p className="textbg fz-16 fw-400">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
               </p>
               <div className="type__radio mb__10 d-flex align-items-center justify-content-between">
                  <div className="radio__left d-flex align-items-center gap-2">
                     <input className="form-check-input" type="checkbox" id="proper301011"/>
                     <label className="form-check-label" htmlFor="proper301011">
                        <span className="fz-16 lato fw-400 dtext">
                           PayPal
                        </span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="have__condition mt__30 mb__30">
               <div className="radio__left d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="proper5011" checked/>
                  <label className="form-check-label" htmlFor="proper5011">
                     <span className="fz-16 lato fw-400 dtext">
                        I have read and agree to the website terms and conditions
                     </span>
                  </label>
               </div>
            </div>
            <div className="payment text-center mb__30">
               <Link href="/car-payment.html" className="cmn__btn">
                  <span>
                     Payment Now
                  </span>
               </Link>
            </div>
            <div className="payment__cards mb__20 d-flex align-items-center gap-2">
               <Link href="/URL:void(0)">
                  <img src="/img/payment/paypals.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/visas.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/fastpay.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)">
                  <img src="/img/payment/payoneer.png" alt="payment-card"/>
               </Link>
               <Link href="/URL:void(0)" className="master">
                  <img src="/img/payment/mastercard.png" alt="payment-card"/>
               </Link>
            </div>
            <div className="full__refund d-flex justify-content-center align-items-center gap-2">
               <img src="/img/svg/info-cancel.svg" alt="img"/>
               Full refund, 3-day concellation
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;
