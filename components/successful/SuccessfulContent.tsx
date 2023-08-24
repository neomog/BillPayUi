import Link from "next/link";

const SuccessfulContent = () => {
  return (
    <>
      <div className="payment__success__header">
        <div className="icon">
          <i className="material-symbols-outlined">done</i>
        </div>
        <h3>Payment Successful</h3>
        <p className="primary-text">
          We are processing the same and you will be notified via email.
        </p>
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
          <Link href="/URL:void(0)">
            <span className="icon">
              <i className="material-symbols-outlined">download</i>
            </span>
            <span>Download</span>
          </Link>
          <Link href="/URL:void(0)">
            <span className="icon">
              <i className="material-symbols-outlined">print</i>
            </span>
            <span>Print Receipt</span>
          </Link>
          <Link href="/hotel-email">
            <span className="icon">
              <i className="material-symbols-outlined">drafts</i>
            </span>
            <span>Email Receipt</span>
          </Link>
        </div>
        <div className="dbutton">
          <Link href="/" className="cmn__btn">
            <span> Make another Booking</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessfulContent;
