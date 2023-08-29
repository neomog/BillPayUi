import { useState } from "react";
// import { useClient } from 'react-server-dom-webpack';
import Image from "next/image";
import Link from "next/link";
import signup from "/public/img/signup/signup.png";

// dependencies
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// components
import PushNotification from "@/components/notification/PushNotification";
import {env} from "@headlessui/react/dist/utils/env";

const SignupMain = () => {
// Use the `useClient` function
//   useClient();
  const [formData, setFormData] = useState({
    process: "register",
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    password: "",
    email: ""
  });
  const [loadingloading, setLoading] = useState(false);
  const [errorerror, setError] = useState("");
  const [message, setMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  const [color, setColor] = useState("");
  // const navigate = useNavigate();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
          `${process.env.BASE_URL}`,
          formData
      );
      setMessage(response?.data?.data?.server_message);
      setResponseStatus(response?.data?.data?.status);
      if (responseStatus) {
        // navigate('/login');
        setTimeout(() => {
          window.location.href = '/signin';
        }, 1000);
      }
      console.log("Success:", response.data.data);
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <section className="signup__section bluar__shape">
        <div className="container">
          {
            message !== "" ?
                <PushNotification message={message} color={responseStatus ? 'success' : 'primary'}/>
                : <div></div>
          }
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="signup__boxes">
                <h4>Let&#39;s Get Started!</h4>
                <p className="head__pra">
                  Please Enter your Email Address to Start your Online Application
                </p>
                <form onSubmit={handleSubmit} action="#0" className="signup__form pt__40">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="input__grp">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Jone"
                            value={formData.firstName}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input__grp">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Fisher"
                            value={formData.lastName}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input__grp">
                        <label htmlFor="lname">User Name</label>
                        <input
                            type="text"
                            id="userName"
                            placeholder="Fishyy"
                            value={formData.userName}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input__grp">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="09036425748"
                            value={formData.phoneNumber}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input__grp">
                        <label htmlFor="email">Enter Your Email ID</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email ID here"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input__grp">
                        <label htmlFor="code">Enter Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleFormChange}
                            required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input__grp">
                        <p className="tag__pra">
                          By clicking submit, you agree to{" "}
                          <Link href="/URL:void(0)">Terms of Use</Link>,{" "}
                          <Link href="/URL:void(0)">Privacy Policy</Link>,{" "}
                          <Link href="/URL:void(0)">E-sign</Link> &{" "}
                          <Link href="/URL:void(0)">
                            communication Authorization
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input__grp mt-2">
                        <button type="submit" className="cmn__btn">
                          <span>Signup</span>
                        </button>
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

export default SignupMain;
