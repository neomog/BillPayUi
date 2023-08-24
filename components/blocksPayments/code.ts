export const paymentMain = `      <section className="payment__section pt__60 pb-120">
<div className="container">
   <form action="#" method="post">
      <div className="row g-4">
         <div className="col-md-12 col-lg-4 col-xl-3">
            <div className="checkout__radio">
                  <p className="primary-text fz-24 fw-400">Select any one</p>
                  <div className="checkout__radio-wrapper">
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="cCard2" name="pay-method" value="Credit/Debit Cards" />
                        <label htmlFor="cCard2">Credit/Debit Cards</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="paypal3" name="pay-method" value="PayPal"/>
                        <label htmlFor="paypal3">PayPal</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="payoneer2" name="pay-method" value="Payoneer"/>
                        <label htmlFor="payoneer2">Payoneer</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="visa3" name="pay-method" value="Visa"/>
                        <label htmlFor="visa3">Visa</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="mastercard3" name="pay-method" value="Mastercard"/>
                        <label htmlFor="mastercard3">Mastercard</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="fastPay3" name="pay-method" value="Fastpay"/>
                        <label htmlFor="fastPay3">Fastpay</label>
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
                                 <input type="text" name="user-first-name" id="userFirstName2" required placeholder="First Name"/>
                              </div>
                           </div>
                              <div className="col-lg-6">
                              <div className="input-single">
                                 <input type="text" name="user-last-name" id="userLastName4" required placeholder="Last Name"/>
                              </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="input-single">
                                    <input type="email" name="user-check-email" id="userCheckEmail1a" required placeholder="Email"/>
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
                                    <textarea name="user-address" rows="5" id="userAddress4" placeholder="Address"></textarea>
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
                                 <label htmlFor="userCardNumber1">Card number</label>
                                 <input type="number" name="user-card-number" id="userCardNumber1" placeholder="2456 1665 5155 5151"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCardDate2">Expiry date</label>
                                 <input type="text" id="userCardDate2" placeholder="DD/MM/YY"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCvc2">Espiry date</label>
                                 <input type="text" maxlength="3" name="user-card-cvc" id="userCvc2" required placeholder="DD/MM/YY"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardName3">CVC / CVV</label>
                                 <input type="text" name="user-card-name" id="userCardName3" placeholder="3 digits"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardNamecard4">Nmae on card</label>
                                 <input type="text" name="user-card-namecard" id="userCardNamecard4" placeholder="J. smith"/>
                           </div>
                           </div>
                        </div>
                     </div>
                     <div className="input-esingl input-check payment__save">
                        <input className="form-check-input" type="checkbox" id="saveForNextcard3"/>
                        <label htmlFor="saveForNextcard3">Save for my next payment</label>
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

export const hotelPaymentMain = `      <section className="payment__section pt__60 pb-120">
<div className="container">
   <form action="#" method="post">
      <div className="row g-4">
         <div className="col-md-12 col-lg-4 col-xl-3">
            <div className="checkout__radio">
                  <p className="primary-text fz-24 fw-400">Select any one</p>
                  <div className="checkout__radio-wrapper">
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="cCard4" name="pay-method" value="Credit/Debit Cards" />
                        <label htmlFor="cCard4">Credit/Debit Cards</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="paypal5" name="pay-method" value="PayPal"/>
                        <label htmlFor="paypal5">PayPal</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="payoneer4" name="pay-method" value="Payoneer"/>
                        <label htmlFor="payoneer4">Payoneer</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="visa5" name="pay-method" value="Visa"/>
                        <label htmlFor="visa5">Visa</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="mastercard6" name="pay-method" value="Mastercard"/>
                        <label htmlFor="mastercard6">Mastercard</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="fastPay5" name="pay-method" value="Fastpay"/>
                        <label htmlFor="fastPay5">Fastpay</label>
                     </div>
                  </div>
            </div>
         </div>
         <div className="col-md-12 col-lg-8 col-xl-9">
            <div className="checkout__single-wrapper">
                  <div className="checkout__single">
                     <h4 className="billing fw-700">Billing address</h4>
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
                                 <input type="text" name="user-first-name" id="userFirstName4" required placeholder="First Name"/>
                              </div>
                           </div>
                              <div className="col-lg-6">
                              <div className="input-single">
                                 <input type="text" name="user-last-name" id="userLastName2" required placeholder="Last Name"/>
                              </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="input-single">
                                    <input type="email" name="user-check-email" id="userCheckEmail4" required placeholder="Email"/>
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
                                    <textarea name="user-address" rows="5" id="userAddress2" placeholder="Address"></textarea>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div className="checkout__single checkout__single__bg">
                     <h4 className="mb-4">Payment Methods</h4>
                     <div className="card__text gap-3 mb__20 d-flex align-items-center justify-content-between">
                        <span className="dtext xs-16 fw-400 fz-24 lato">
                           Credit Card / Debit Card
                        </span>
                        <div className="payment__cards d-flex align-items-center gap-2">
                           <Link href="/javacript:void(0)">
                              <img src="/img/payment/paypals.png" alt="payment-card"/>
                           </Link>
                           <Link href="/javacript:void(0)">
                              <img src="/img/payment/visas.png" alt="payment-card"/>
                           </Link>
                           <Link href="/javacript:void(0)">
                              <img src="/img/payment/fastpay.png" alt="payment-card"/>
                           </Link>
                           <Link href="/javacript:void(0)">
                              <img src="/img/payment/payoneer.png" alt="payment-card"/>
                           </Link>
                           <Link href="/javacript:void(0)" className="master">
                              <img src="/img/payment/mastercard.png" alt="payment-card"/>
                           </Link>
                        </div>
                     </div>
                     <div className="checkout__single-form">
                        <p className="payment"></p>
                        <div className="row g-3">
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardNumber3">Card number</label>
                                 <input type="number" name="user-card-number" id="userCardNumber3" placeholder="2456 1665 5155 5151"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCardDate4">Expiry date</label>
                                 <input type="text" id="userCardDate4" placeholder="DD/MM/YY"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCvc4">Espiry date</label>
                                 <input type="text" maxlength="3" name="user-card-cvc" id="userCvc4" required placeholder="DD/MM/YY"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardName6">CVC / CVV</label>
                                 <input type="text" name="user-card-name" id="userCardName6" placeholder="3 digits"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardNamecard7">Nmae on card</label>
                                 <input type="text" name="user-card-namecard" id="userCardNamecard7" placeholder="J. smith"/>
                           </div>
                           </div>
                        </div>
                     </div>
                     <div className="input-esingl input-check payment__save">
                        <input className="form-check-input" type="checkbox" id="saveForNextcard6"/>
                        <label htmlFor="saveForNextcard6">Save for my next payment</label>
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

export const trainPaymentMain = `        <section className="payment__section pt__60 pb-120">
<div className="container">
   <form action="#" method="post">
      <div className="row g-4">
         <div className="col-md-12 col-lg-4 col-xl-3">
            <div className="checkout__radio">
                  <p className="primary-text fz-24 fw-400">Select any one</p>
                  <div className="checkout__radio-wrapper">
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="cCard6" name="pay-method" value="Credit/Debit Cards" />
                        <label htmlFor="cCard6">Credit/Debit Cards</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="paypal7" name="pay-method" value="PayPal"/>
                        <label htmlFor="paypal7">PayPal</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="payoneer6" name="pay-method" value="Payoneer"/>
                        <label htmlFor="payoneer6">Payoneer</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="visa7" name="pay-method" value="Visa"/>
                        <label htmlFor="visa7">Visa</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="mastercard8" name="pay-method" value="Mastercard"/>
                        <label htmlFor="mastercard8">Mastercard</label>
                     </div>
                     <div className="checkout__radio-single">
                        <input type="radio" className="form-check-input" id="fastPay7" name="pay-method" value="Fastpay"/>
                        <label htmlFor="fastPay7">Fastpay</label>
                     </div>
                  </div>
            </div>
         </div>
         <div className="col-md-12 col-lg-8 col-xl-9">
            <div className="checkout__single-wrapper">
                  <div className="checkout__single checkout__single__bg">
                     <h4 className="mb__10">Payment Methods</h4>
                     <div className="transactionid d-flex align-items-center">
                        <span className="tran fz-18 fw-500">
                           Transaction ID: 25246584
                        </span>
                        <span className="tran fz-18 fw-500">
                           Total Payable Amount: $457
                        </span>
                     </div>
                     <div className="card__text gap-3 mb__20 d-flex align-items-center justify-content-between">
                        <span className="dtext xs-16 fw-400 fz-24 lato">
                           Credit Card / Debit Card
                        </span>
                     </div>
                     <div className="checkout__single-form">
                        <p className="payment"></p>
                        <div className="row g-3">
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardNumber6">Card number</label>
                                 <input type="number" name="user-card-number" id="userCardNumber6" placeholder="2456 1665 5155 5151"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCardDate6">Expiry date</label>
                                 <input type="text" id="userCardDate6" placeholder="DD/MM/YY"/>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="input-single">
                                 <label htmlFor="userCardName10">CVC / CVV</label>
                                 <input type="text" name="user-card-name" id="userCardName10" placeholder="3 digits"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="input-single">
                                 <label htmlFor="userCardNamecard11">Nmae on card</label>
                                 <input type="text" name="user-card-namecard" id="userCardNamecard11" placeholder="J. smith"/>
                           </div>
                           </div>
                        </div>
                     </div>
                     <div className="input-esingl input-check payment__save">
                        <input className="form-check-input" type="checkbox" id="saveForNextcard8"/>
                        <label htmlFor="saveForNextcard8">Save for my next payment</label>
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
