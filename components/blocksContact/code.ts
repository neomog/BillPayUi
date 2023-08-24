export const contactForm = `     <section className="contact__section pt-120 pb-120">
<div className="container">
   <div className="row justify-content-center wow fadeInDown">
      <div className="col-lg-6">
         <div className="section__header section__center pb__60">
            <h2>
            Get in touch with us.
            </h2>
            <p>
               Fill up the form and our team will get back to you within 24 hours
            </p>
         </div>
      </div>
   </div>
   <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-6">
         <div className="signup__boxes">
            <form action="#0" className="signup__form pt__40">
               <div className="row g-4 justify-content-center">
                  <div className="col-lg-6">
                     <div className="input__grp">
                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" placeholder="What's your name?"/>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="input__grp">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="What's your email?"/>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="input__grp">
                        <label htmlFor="numm">Phone</label>
                        <input type="text" id="numm" placeholder="(123) 480 - 3540"/>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="input__grp">
                        <label htmlFor="subtest">Service interested in</label>
                        <input type="text" id="subtest" placeholder="Ex. Auto Loan, Home Loan"/>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="input__grp">
                        <label htmlFor="comment">Message</label>
                        <textarea className="form-control" rows="3" id="comment" name="text" placeholder="Your message..."></textarea>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="input__grp mt-2 text-center">
                     <button type="submit" className="cmn__btn">
                           <span>
                              Send Message
                           </span>
                     </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</section>`;

export const contactInfo = `     <section className="contact__need pt-120 pb-120">
<div className="container">
   <div className="row justify-content-center wow fadeInDown">
      <div className="col-lg-6">
         <div className="section__header section__center pb__60">
            <h2>
               Need More Help?
            </h2>
            <p>
               Queries, complaints and feedback. We will be happy to serve you
            </p>
         </div>
      </div>
   </div>
   <div className="row g-4 justify-content-center">
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
         <div className="contact__need__item">
            <div className="icon d-flex align-items-center justify-content-center">
               <img src="/img/signup/phone.png" alt="img"/>
            </div>
            <h5>
               Call Now
            </h5>
            <Link href="/javascript:void(0)">
               <span className="fz-18 mb-1 fw-400 lato dtext d-block">
                  (907) 555-0101
               </span>
               <span className="fz-18 fw-400 lato dtext d-block">
                  (252) 555-0126
               </span>
            </Link>
         </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
         <div className="contact__need__item">
            <div className="icon d-flex align-items-center justify-content-center">
               <img src="/img/signup/email.png" alt="img"/>
            </div>
            <h5>
               Email Address
            </h5>
            <Link href="/javascript:void(0)">
               <span className="fz-18 mb-1 fw-400 lato dtext d-block">
                  sara.cruz@example.com
               </span>
               <span className="fz-18 fw-400 lato dtext d-block">
                  bill.sanders@example.com
               </span>
            </Link>
         </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
         <div className="contact__need__item">
            <div className="icon d-flex align-items-center justify-content-center">
               <img src="/img/signup/map.png" alt="img"/>
            </div>
            <h5>
               Location
            </h5>
            <Link href="/javascript:void(0)">
               <span className="fz-18 mb-1 fw-400 lato dtext d-block">
                  Royal Ln. Mesa, New Jersey 45463
               </span>
               <span className="fz-18 fw-400 lato dtext d-block">
                  Thornridge Cir. Shiloh, Hawaii 81063
               </span>
            </Link>
         </div>
      </div>
   </div>
</div>
</section>`;
