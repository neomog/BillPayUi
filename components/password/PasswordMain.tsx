import Image from "next/image";
import Link from "next/link";
import signup from "/public/img/signup/signup.png";

const PasswordMain = () => {
  return (
    <section className="signup__section bluar__shape">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>Set Up Your Password</h4>
              <p className="head__pra">
                Your security is our top priority. You&#39;ll need this to log
                into your account
              </p>
              <form action="#0" className="signup__form password__box pt__40">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label htmlFor="password-field" className="form-label">
                        Choose Password
                      </label>
                      <div className="form-group">
                        <input
                          id="password-field"
                          type="password"
                          className="form-control"
                          placeholder="Enter Your Password"
                          name="password"
                          required
                        />
                        <span
                          id="#password-field"
                          className="fa fa-fw field-icon toggle-password"
                        >
                          <i className="material-symbols-outlined">
                            visibility
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label htmlFor="password-field" className="form-label">
                        Confirm Password
                      </label>
                      <div className="form-group">
                        <input
                          id="toggle-password2"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          required
                        />
                        <span
                          id="#toggle-password2"
                          className="fa fa-fw field-icon toggle-password2"
                        >
                          <i className="material-symbols-outlined">
                            visibility
                          </i>
                        </span>
                      </div>
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

export default PasswordMain;
