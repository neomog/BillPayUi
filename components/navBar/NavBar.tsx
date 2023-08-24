"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import favicon from "/public/img/logo/favicon.png";
import light_logo from "/public/img/logo/light-logo.png";
import logo from "/public/img/logo/logo.png";

const NavBar = ({
  clss,
  lightLogo,
}: {
  clss?: string;
  lightLogo?: boolean;
}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('false');

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section ${clss} ${
        windowHeight > 50 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-menu">
            <Link href="/" className="logo">
              {lightLogo ? (
                <Image src={light_logo} alt="logo" />
              ) : (
                <Image src={logo} alt="logo" />
              )}
            </Link>
            <Link href="/" className="small__logo d-xl-none">
              <Image src={favicon} alt="logo" />
            </Link>
          </div>
          <div className="menu__right__components d-flex align-items-center">
            <div className="sigup__grp d-flex d-lg-none gap-2">
              <Link href="/signin" className="cmn__btn outline__btn">
                <span>Signin</span>
              </Link>
              <Link href="/signup" className="cmn__btn">
                <span>Signup</span>
              </Link>
            </div>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className="main-menu">
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Recharge & Bill Payment</span>
              </Link>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Blog</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li className="subtwohober">
                  <Link href="/blog/list">Blog List</Link>
                </li>
                <li>
                  <Link href="/blog/grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="/blog/details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Pages</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">About</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/chat-us">Chat us</Link>
                    </li>
                    <li>
                      <Link href="/favourites">Favorites</Link>
                    </li>
                    <li>
                      <Link href="/help">Help page</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Support</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/help-support">Support</Link>
                    </li>
                    <li>
                      <Link href="/help-knowledge">Support Knowledge</Link>
                    </li>
                    <li>
                      <Link href="/help-knowledge-details">
                        Support Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-tutorial">Support Tutorial</Link>
                    </li>
                    <li>
                      <Link href="/submit-ticket">Submit Ticket</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">My Profile</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/personal-information">Personal info</Link>
                    </li>
                    <li>
                      <Link href="/login-security">Login Security</Link>
                    </li>
                    <li>
                      <Link href="/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link href="/transaction">Transaction</Link>
                    </li>
                    <li>
                      <Link href="/password-change">Change Password</Link>
                    </li>
                    <li>
                      <Link href="/notification">Notification</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Signup & Register</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/signup">Signup Register</Link>
                    </li>
                    <li>
                      <Link href="/password">Password Change</Link>
                    </li>
                    <li>
                      <Link href="/number-toreach">Signup Number</Link>
                    </li>
                    <li>
                      <Link href="/varified-number">Varified Number</Link>
                    </li>
                    <li>
                      <Link href="/signin">Sign in</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/faq">Faq Page</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/error">404</Link>
                </li>
              </ul>
            </li>

            <li className="sigup__grp d-lg-none d-flex align-items-center">
              <Link href="/signin" className="cmn__btn outline__btn">
                <h1>Signin</h1>
              </Link>
              <Link href="/signup" className="cmn__btn">
                <span>Signup</span>
              </Link>
            </li>
          </ul>
          {
            isLoggedIn === "false" ? (
                <div className="sigin__grp d-flex align-items-center">
                  <Link href="/signin" className="cmn__btn outline__btn">
                    <span>Signin</span>
                  </Link>
                  <Link href="/signup" className="cmn__btn">
                    <span>Signup</span>
                  </Link>
                </div>
            ) : (
                <div className="sigin__grp d-flex align-items-center">
                  <Link href="/signout" className="cmn__btn outline__btn">
                    <span>Signout</span>
                  </Link>
                </div>
            )
          }


        </div>
      </div>
    </header>
  );
};

export default NavBar;
