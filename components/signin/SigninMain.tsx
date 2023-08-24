"use client";
import Image from "next/image";
import Link from "next/link";
import signup from "/public/img/signup/signup.png";
import {useState} from "react";
import axios from "axios";
import PushNotification from "@/components/notification/PushNotification";

const SigninMain = () => {

  const [formData, setFormData] = useState({
    process: "login",
    password: "",
    email: ""
  });

  const [loadingloading, setLoading] = useState(false);
  const [errorerror, setError] = useState("");
  const [message, setMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
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
          "http://localhost:5000",
          formData
      );
      setMessage(response?.data?.data?.server_message);
      setResponseStatus(response?.data?.data?.status);
      if (responseStatus) {
        localStorage.setItem('isLoggedIn', 'true');
        // navigate('/login');
        setTimeout(() => {
          window.location.href = '/';
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
              <h4>Sign in to Rechargio</h4>
              <p className="head__pra mb__30">
                Sign in to your account and make recharges. payments and
                bookings faster
              </p>
              <form onSubmit={handleSubmit} className="signup__form">
                <div className="row g-4">
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
                  <Link href="/URL:void(0)" className="forgot">
                    Forgot Password?
                  </Link>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <button type="submit" className="cmn__btn">
                        <span>Sign In</span>
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

export default SigninMain;
