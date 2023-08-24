export const orderMain = `  <section className="order__section pt__60 pb__60">
<div className="container">
   <div className="row justify-content-center">
      <div className="col-xxl-8 col-xl-10 col-lg-12">
         <div className="order__wrappers">
            <div className="order__boxes">
               <div className="available__balance pb__40">
               <div className="balance">
                     <img src="/img/payment/balance.png" alt="img"/>
                     <span className="title fz-24 fw-700">
                        Availble Balance
                     </span>
               </div>
                  <span className="fz-24 fw-700">
                     $4531.00
                  </span>
               </div>
               <ul className="order__button mb__40">
                  <li>
                     <Link href="/order.html" className="cmn__order active">
                        <span>
                           Order
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/order-summary.html" className="cmn__order ">
                        <span>
                           Summary
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/payment.html" className="cmn__order">
                        <span>
                           Payment
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/successful.html" className="cmn__order">
                        <span>
                           Done
                        </span>
                     </Link>
                  </li>
               </ul>
               <span className="mobiletext fz-18 fw-500 pb__20">
                  Enter the receiver mobile number
               </span>
               <form action="javascript:void(0)" className="mb__40">
                  <div className="flag__select">
                     <span className="flag">
                        <img src="/img/payment/bang.png" alt="img"/>
                     </span>
                     <select name="flegs">
                        <option value="1">
                           +88
                        </option>
                        <option value="2">
                           +99
                        </option>
                        <option value="3">
                           +159
                        </option>
                     </select>
                  </div>
                  <input type="text" placeholder="Enter the receiver mobile number">
                  <button type="submit" className="cmn__btn">
                     <span>
                        <i className="material-symbols-outlined">
                           rocket_launch
                        </i>
                  </span>
                  </button>
               </form>
               <div className="oparator__texts">
                  <select name="opera">
                     <option value="1">
                        Operator Detected
                     </option>
                     <option value="2">
                     Grameenphone
                     </option>
                     <option value="3">
                        Robi
                     </option>
                     <option value="3">
                        Banglalink
                     </option>
                     <option value="3">
                        Artel
                     </option>
                  </select>
               </div>
               <ul className="main__operator">
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa1">
                     <label className="form-check-label" for="opa1">
                        <img src="/img/payment/met.png" alt="card"/>
                     </label>
                  </li>
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa2">
                     <label className="form-check-label" for="opa2">
                        <img src="/img/payment/verizon.png" alt="card"/>
                     </label>
                  </li>
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa3">
                     <label className="form-check-label" for="opa3">
                        <img src="/img/payment/ata5g.png" alt="card"/>
                     </label>
                  </li>
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa4">
                     <label className="form-check-label" for="opa4">
                        <img src="/img/payment/bsnl.png" alt="card"/>
                     </label>
                  </li>
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa5">
                     <label className="form-check-label" for="opa5">
                        <img src="/img/payment/easygo.png" alt="card"/>
                     </label>
                  </li>
                  <li>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="opa6">
                     <label className="form-check-label" for="opa6">
                        <img src="/img/payment/sprint.png" alt="card"/>
                     </label>
                  </li>
               </ul>
            </div>
            <div className="choose__valu">
               <div className="oparator__texts">
                  <select name="opera">
                     <option value="1">
                        Choose a value
                     </option>
                     <option value="2">
                        Choose one
                     </option>
                     <option value="3">
                        Choose two
                     </option>
                     <option value="3">
                        Choose three
                     </option>
                     <option value="3">
                        Choose four
                     </option>
                  </select>
               </div>
               <div className="row g-4">
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T 10 USD PIN
                           </span>
                        </div>
                        <p>
                           Instant delicery to email
                        </p>
                        <span className="usd fz-16">
                           USD 10.00
                        </span>
                        <div className="valu__btn">
                        <select name="sel">
                              <option value="1">
                                 1
                              </option>
                              <option value="2">
                                 2
                              </option>
                              <option value="3">
                                 3
                              </option>
                              <option value="4">
                                 4
                              </option>
                        </select>
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T Prepaid Refill 10 USD
                           </span>
                        </div>
                        <p>
                           Instant delivery to phone
                        </p>
                        <span className="usd fz-16">
                           USD 10.00
                        </span>
                        <div className="valu__btn">
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T Prepaid Refill 15 USD
                           </span>
                        </div>
                        <p>
                           Instant delivery to phone
                        </p>
                        <span className="usd fz-16">
                           USD 15.00
                        </span>
                        <div className="valu__btn">
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T 15 USD PIN
                           </span>
                        </div>
                        <p>
                           Instant delivery to email
                        </p>
                        <span className="usd fz-16">
                           USD 10.00
                        </span>
                        <div className="valu__btn">
                        <select name="sel">
                              <option value="1">
                                 1
                              </option>
                              <option value="2">
                                 2
                              </option>
                              <option value="3">
                                 3
                              </option>
                              <option value="4">
                                 4
                              </option>
                        </select>
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T 25 USD PIN
                           </span>
                        </div>
                        <p>
                           Instant delivery to email
                        </p>
                        <span className="usd fz-16">
                           USD 25.00
                        </span>
                        <div className="valu__btn">
                        <select name="sel">
                              <option value="1">
                                 1
                              </option>
                              <option value="2">
                                 2
                              </option>
                              <option value="3">
                                 3
                              </option>
                              <option value="4">
                                 4
                              </option>
                        </select>
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="valu__items">
                        <div className="valu__usd">
                           <img src="/img/payment/ata5g.png" alt="img"/>
                           <span className="fz-18 fw-500">
                              AT&T Prepaid Refill 25 USD
                           </span>
                        </div>
                        <p>
                           Instant delivery to phone
                        </p>
                        <span className="usd fz-16">
                           USD 25.00
                        </span>
                        <div className="valu__btn">
                           <Link href="/order-summary.html" className="cmn__btn">
                              <span>
                                 Choose
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="pagination justify-content-center pt__40">
                  <Link href="/javascript:void(0)">
                     <span>
                        <i className="material-symbols-outlined">
                        navigate_before
                     </i>
                     </span>
                  </Link>
                  <Link href="/javascript:void(0)">
                     1
                  </Link>
                  <Link href="/javascript:void(0)">
                     2
                  </Link>
                  <Link href="/javascript:void(0)">
                     3
                  </Link>
                  <Link href="/javascript:void(0)">
                     ....
                  </Link>
                  <Link href="/javascript:void(0)">
                     30
                  </Link>
                  <Link href="/javascript:void(0)">
                     <span>
                        <i className="material-symbols-outlined">
                        chevron_right
                     </i>
                     </span>
                  </Link>
               </div>
            </div>
            <div className="probtn text-center pt__40">
               <Link href="/order-summary.html" className="cmn__btn">
                  <span>
                     Proceesd to checkout
                  </span>
               </Link>
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const orderSummeryMain = `    <section className="order__section pt__60 pb__60">
<div className="container">
   <div className="row justify-content-center">
      <div className="col-xxl-8 col-xl-10 col-lg-12">
         <div className="order__wrappers">
            <div className="order__boxes order__boxestwo">
               <div className="available__balance pb__40">
               <div className="balance">
                     <img src="/img/payment/balance.png" alt="img"/>
                     <span className="title fz-24 fw-700">
                        Availble Balance
                     </span>
               </div>
                  <span className="fz-24 fw-700">
                     $4531.00
                  </span>
               </div>
               <ul className="order__button mb__40">
                  <li>
                     <Link href="/order.html" className="cmn__order">
                        <span>
                           Order
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/order-summary.html" className="cmn__order active">
                        <span>
                           Summary
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/payment.html" className="cmn__order">
                        <span>
                           Payment
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link href="/successful.html" className="cmn__order">
                        <span>
                           Done
                        </span>
                     </Link>
                  </li>
               </ul>
               <div className="order__summary__wrapper mb__30">
               <div className="over__responsive">
                  <h5 className="summary__title">Order Summary</h5>
                  <div className="order__table__fluid">
                     <div className="order__table__items bg__add">
                        <span>
                           Recipient No
                        </span>
                        <span>
                           Operrator
                        </span>
                        <span>
                           Receive amount
                        </span>
                        <span>
                           Amount
                        </span>
                     </div>
                     <div className="order__table__items">
                        <span>
                           (406) 555-0120
                        </span>
                        <span>
                           AT & T
                        </span>
                        <span>
                           $4531.00
                        </span>
                        <span>
                           $4531.00
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
               <div className="recharge__numberbtn">
                  <Link href="/javascript:void(0)" className="addanother">
                     <span className="plus">
                        <i className="material-symbols-outlined">
                           add
                        </i>
                     </span>
                     <span className="text fz-18 fw-600">
                        Add another number Recharge
                     </span>
                  </Link>
                  <Link href="/javascript:void(0)" className="addanother">
                     <span className="plus">
                        <i className="material-symbols-outlined">
                           add
                        </i>
                     </span>
                     <span className="text fz-18 fw-600">
                        Add Promo Code
                     </span>
                  </Link>
               </div>
               <div className="probtn text-center pt__40">
                  <Link href="/payment.html" className="cmn__btn">
                     <span>
                        Make Payment
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;

export const paymentMain = `    <section className="payment__section pt__60 pb-120">
<div className="container">
   <form action="#" method="post">
      <div className="row g-4">
         <div className="col-md-12 col-lg-4 col-xl-3">
            <div className="checkout__radio">
                  <p className="primary-text fz-24 fw-400">Select any one</p>
                  <div className="checkout__radio-wrapper">
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="cCard" name="pay-method" value="Credit/Debit Cards" >
                        <label for="cCard">Credit/Debit Cards</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="paypal" name="pay-method" value="PayPal">
                        <label for="paypal">PayPal</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="payoneer" name="pay-method" value="Payoneer">
                        <label for="payoneer">Payoneer</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="visa" name="pay-method" value="Visa">
                        <label for="visa">Visa</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="mastercard" name="pay-method" value="Mastercard">
                        <label for="mastercard">Mastercard</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="fastPay" name="pay-method" value="Fastpay">
                        <label for="fastPay">Fastpay</label>
                     </div>
                  </div>
            </div>
         </div>
         <div className="col-md-12 col-lg-8 col-xl-9">
            <div className="checkout__single-wrapper">
                  <div className="checkout__single">
                     <div className="available__balance pb__40">
                        <div className="balance">
                              <img src="/img/payment/balance.png" alt="img"/>
                              <span className="title fz-24 fw-700">
                                 Availble Balance
                              </span>
                        </div>
                        <span className="fz-24 fw-700">
                           $4531.00
                        </span>
                     </div>
                     <ul className="order__button mb__40">
                        <li>
                           <Link href="/order.html" className="cmn__order">
                              <span>
                                 Order
                              </span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/order-summary.html" className="cmn__order">
                              <span>
                                 Summary
                              </span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/payment.html" className="cmn__order active">
                              <span>
                                 Payment
                              </span>
                           </Link>
                        </li>
                        <li>
                           <Link href="/successful.html" className="cmn__order">
                              <span>
                                 Done
                              </span>
                           </Link>
                        </li>
                     </ul>
                     <h4 className="billing fw-400">Billing address</h4>
                     <div className="transactionid d-flex align-items-center">
                        <span className="tran fz-18 fw-500">
                           Transaction ID: 25246584
                        </span>
                        <span className="tran fz-18 fw-500">
                           Total Payable Amount: $457
                        </span>
                     </div>
                     <div className="checkout__single-form">
                        <div className="row g-4">
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <input type="text" name="user-first-name" id="userFirstName" required placeholder="First Name">
                              </div>
                           </div>
                              <div className="col-lg-6">
                              <div className="input-single">
                                 <input type="text" name="user-last-name" id="userLastName" required placeholder="Last Name">
                              </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="input-single">
                                    <input type="email" name="user-check-email" id="userCheckEmail" required placeholder="Email">
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="input-single">
                                    <select className="country-select">
                                       <option value="usa">USA</option>
                                       <option value="aus">Aus</option>
                                       <option value="uk">UK</option>
                                       <option value="ned">NED</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="input-single">
                                    <textarea name="user-address" rows="5" id="userAddress" placeholder="Address"></textarea>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div className="checkout__single checkout__single__bg">
                     <h4 className="mb-4">Payment Methods</h4>
                     <div className="checkout__single-form">
                        <p className="payment"></p>
                        <div className="row g-3">
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label for="userCardNumber">Card number</label>
                                 <input type="number" name="user-card-number" id="userCardNumber" placeholder="2456 1665 5155 5151">
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label for="userCardDate">Expiry date</label>
                                 <input type="text" id="userCardDate" placeholder="DD/MM/YY">
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label for="userCvc">Espiry date</label>
                                 <input type="text" maxlength="3" name="user-card-cvc" id="userCvc" required placeholder="DD/MM/YY">
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label for="userCardName">CVC / CVV</label>
                                 <input type="text" name="user-card-name" id="userCardName" placeholder="3 digits">
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label for="userCardNamecard">Nmae on card</label>
                                 <input type="text" name="user-card-namecard" id="userCardNamecard" placeholder="J. smith">
                           </div>
                           </div>
                        </div>
                     </div>
                     <div className="input-esingl input-check payment__save">
                        <input className="form-check-input" type="checkbox" id="saveForNextcard">
                        <label for="saveForNextcard">Save for my next payment</label>
                     </div>
                     <div className="text-center mt-4">
                        <Link href="/successful.html" className="cmn__btn">
                           <span>
                              Payment Now
                           </span>
                        </Link>
                     </div>
                  </div>
            </div>
         </div>
      </div>
</form>
</div>
</section>`;

export const successful = `    <section className="order__section successful__section pb__60">
<div className="container">
   <div className="row justify-content-center">
      <div className="col-xxl-8 col-xl-10 col-lg-12">
         <div className="payment__success__inner">
            <div className="available__balance pb__40">
               <div className="balance">
                  <img src="/img/payment/balance.png" alt="img"/>
                  <span className="title fz-24 fw-700">
                     Availble Balance
                  </span>
               </div>
               <span className="fz-24 fw-700">
                  $4531.00
               </span>
            </div>
            <ul className="order__button mb__40">
               <li>
                  <Link href="/order.html" className="cmn__order">
                     <span>
                        Order
                     </span>
                  </Link>
               </li>
               <li>
                  <Link href="/order-summary.html" className="cmn__order">
                     <span>
                        Summary
                     </span>
                  </Link>
               </li>
               <li>
                  <Link href="/payment.html" className="cmn__order">
                     <span>
                        Payment
                     </span>
                  </Link>
               </li>
               <li>
                  <Link href="/successful.html" className="cmn__order active">
                     <span>
                        Done
                     </span>
                  </Link>
               </li>
            </ul>
            <div className="payment__success__header">
               <div className="icon">
                  <i className="material-symbols-outlined">
                     done
                  </i>
               </div>
               <h3>Payment Successful</h3>
               <p className="primary-text">We are processing the same and you will be notified via email.</p>
            </div>
            <div className="payment__success__body">
               <ul>
                  <li>
                     <span>Transactions ID</span>
                     <span className="textbo">CDFF123476359</span>
                  </li>
                  <li>
                     <span>Date</span>
                     <span className="textbo">22-12-2022</span>
                  </li>
                  <li>
                     <span>Mode of Payment</span>
                     <span className="textbo">Credit Card</span>
                  </li>
                  <li>
                     <span>Transaction Status</span>
                     <span className="textbo">Success</span>
                  </li>
                  <li>
                     <span>Customer Name</span>
                     <span className="textbo">Wade Warren</span>
                  </li>
                  <li>
                     <span>Mobile No</span>
                     <span className="textbo">(406) 555-0120</span>
                  </li>
                  <li>
                     <span>Subject</span>
                     <span className="textbo">White Gloves</span>
                  </li>
                  <li>
                     <span>Payment Amount</span>
                     <span className="textbo">$235.00</span>
                  </li>
               </ul>
            </div>
            <div className="payment__success__footer">
               <div className="payment-success__footer-inner">
                  <Link href="/javascript:void(0)">
                  <span className="icon">
                     <i className="material-symbols-outlined">
                        download
                     </i>
                  </span>
                  <span>
                        Download
                  </span>
                  </Link>
                  <Link href="/javascript:void(0)">
                     <span className="icon">
                        <i className="material-symbols-outlined">
                           print
                        </i>
                     </span>
                     <span>
                        Print Receipt
                     </span>
                  </Link>
                  <Link href="/hotel-email.html">
                     <span className="icon">
                        <i className="material-symbols-outlined">
                           drafts
                        </i> 
                     </span>
                     <span>
                        Email Receipt
                     </span>
                  </Link>
               </div>
               <div className="dbutton">
                  <Link href="/index.html" className="cmn__btn"><span> Make another Booking</span></Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>`;
