import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import logo from "/public/img/logo/logo.png";
import ball from "/public/img/svg/ball.svg";
import facebook from "/public/img/svg/facebook.svg";
import instagram from "/public/img/svg/instagram.svg";
import twitter from "/public/img/svg/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer__section bgsection pt-120">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top pb-120">
            <div className="row gy-5 gx-5">
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <Link href="/" className="footer__logo">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                  <p className="pratext mb__20 fz-18">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry...
                  </p>

                  {/* Social Items Here */}
                  <Social
                    items={[
                      [facebook, ""],
                      [instagram, ""],
                      [twitter, ""],
                      [ball, ""],
                    ]}
                  />
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Quick Links</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/" className="link fz-18 pratext">
                      Home
                    </Link>
                    <Link href="/about" className="link fz-18 pratext">
                      About
                    </Link>
                    <Link href="/" className="link fz-18 pratext">
                      Rechage & Bill Payment
                    </Link>
                    <Link
                      href="/booking-landing1"
                      className="link fz-18 pratext"
                    >
                      Booking
                    </Link>
                    <Link href="/contact" className="link fz-18 pratext">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.7s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Address</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/URL:void(0)" className="link fz-18 pratext">
                      <span className="d-block">(480) 555-0103</span>
                      <span>(406) 555-0120</span>
                    </Link>
                    <Link href="/URL:void(0)" className="link fz-18 pratext">
                      <span className="d-block">deanna.curtis@example.com</span>
                      <span>debra.holt@example.com</span>
                    </Link>
                    <Link href="/URL:void(0)" className="link fz-18 pratext">
                      285 Great North Road, Grey Lynn, Auckland 1021
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.9s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Newsletter</h4>
                  </div>
                  <div className="widget__link">
                    <p className="fz-18 pratext mb__30">
                      Subscribe our newsletter to get our latest update & news
                    </p>
                    <form
                      action="javacript:void(0)"
                      className="d-flex justify-content-between"
                    >
                      <input type="email" placeholder="Your mail address" />
                      <button type="submit" className="cmn__btn">
                        <span>
                          <i className="material-symbols-outlined">
                            rocket_launch
                          </i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex">
            <p className="fz-18 pratext">
              Copyright &copy;2023{" "}
              <Link href="/" className="base">
                Rechargio.
              </Link>{" "}
              All Rights Reserved
            </p>
            <ul className="footer__bottom__link">
              <li>
                <Link href="/help-support">Support</Link>
              </li>
              <li>
                <Link href="/help-support">Terms of Use</Link>
              </li>
              <li>
                <Link href="/help">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
