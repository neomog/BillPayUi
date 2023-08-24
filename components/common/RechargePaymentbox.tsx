"use client";

import Link from "next/link";
import Select from "../select/Select";
import {useState, useEffect} from "react";


// dependencies
import axios from "axios";
import PushNotification from "@/components/notification/PushNotification";

const operator = [
  { id: 1, name: "Select Your Operator" },
  { id: 2, name: "MTN" },
  { id: 3, name: "GLO" },
  { id: 4, name: "AIRTEL" },
  { id: 5, name: "9MOBILE" },
];

const offers = [
  { id: 1, name: "Select offers" },
  { id: 2, name: "1st Offers" },
  { id: 3, name: "2nd Offers" },
  { id: 4, name: "3rd Offers" },
];

const RechargePaymentbox = ({ title }: { title: string }) => {

  const [formData, setFormData] = useState({
    process: "airtime",
    optionCode: "",
    destinationNumber: "",
    amount: "",
    apiKey: "g9KZoJJXH6guvwQLr4j5JUKRmZ1yt6r92EWtv9APLfRNbm7KEZybr4jV5eySWXllUDSWB8rN10mTeGunjB96V5dKAVyZhT83ZgkhQE1tdQnLY0GVVH2a7dBi4mn0UDnG"
  });

  useEffect(() => {
    // console.log("UseEffect Works", formData);
  }, [formData]);

  const [loadingloading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  // const navigate = useNavigate();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // gets the value of selected operator from the child component
  const handleOperatorSelect = (selectedOperator: { id: number; name: string }) => {
    setFormData((prevData) => ({ ...prevData, optionCode: selectedOperator.name }));
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
        // navigate('/login');
        // setTimeout(() => {
        //   window.location.href = '/airtime';
        // }, 1000);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile__recharge text-center">
      {
        message !== "" ?
            <PushNotification message={message} color={responseStatus ? 'success' : 'primary'}/>
            : <div></div>
      }
      <h5>{title}</h5>
      <div className="prepaid__option">
        <div className="prepaid__check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pyradio2"
            defaultChecked
          />{" "}
          <label className="form-check-label" htmlFor="pyradio2">
            Prepaid
          </label>
        </div>
        <div className="prepaid__check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pyradio1"
          />{" "}
          <label className="form-check-label" htmlFor="pyradio1">
            Postpaid
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit} action="URL:void(0)" className="pb__40">
        <div className="row g-4">
          <div className="col-lg-6">
            <input type="text" id="destinationNumber" placeholder="Enter Mobile Number" value={formData.destinationNumber} onChange={handleFormChange} />
          </div>
          <div className="col-lg-6">
            {/* select here */}
            <Select data={operator} onSelect={handleOperatorSelect} />
          </div>
          {/*<div className="col-lg-6">*/}
            {/* select here */}
            {/*<Select data={offers} />*/}
          {/*</div>*/}
          <div className="col-lg-6">
            <input type="number" id="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleFormChange} />
          </div>
          <div className="col-lg-6">
            <button type="submit" className="cmn__btn col-lg-6">
              <span>Signup</span>
            </button>
          </div>
        </div>
      </form>
      {/*<Link href="/order" className="cmn__btn">*/}
      {/*  <span>Continue recharge</span>*/}
      {/*</Link>*/}
    </div>
  );
};

export default RechargePaymentbox;
