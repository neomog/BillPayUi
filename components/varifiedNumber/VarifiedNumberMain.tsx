import Image from "next/image";
import Link from "next/link";
import signup from "/public/img/signup/signup.png";

const VarifiedNumberMain = () => {
  return (
    <section className="signup__section bluar__shape">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>Varified Your Phone Number</h4>
              <p className="head__pra mb__30">
                A 6 digit One Time Password (OTP) has been sent to your given
                email address which will expire in 15 minutes, after which you
                will need to resend the code.
              </p>
              <Link href="/URL:void" className="recent__code">
                Enter OTP Here
              </Link>
              <form action="#0" className="signup__form varified__number">
                <div className="row g-2">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="1" required />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="0" required />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="0" required />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="1" required />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="0" required />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="input__grp mt-3">
                      <input type="text" placeholder="1" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp mt-3">
                      <button type="submit" className="cmn__btn">
                        <span>Submit Now</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp mt-2">
                      <Link href="/URL:void(0)" className="back__btn">
                        <span className="icon">
                          <i className="material-symbols-outlined">
                            keyboard_backspace
                          </i>
                        </span>
                        <span>Back</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
              <Image src={signup} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VarifiedNumberMain;
