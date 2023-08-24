import DriverForm from "./DriverForm";
import ImportantInformation from "./ImportantInformation";
import InvoiceDetails from "./InvoiceDetails";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

const ConfermationMain = () => {
  return (
    <section className="flight__onewaysectio pt__60 pb__60">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="car__driverdetails mb__40">
              <h5 className="dtext border__bottom pb__24">Driver Details</h5>

              {/* Driver Form Here */}
              <DriverForm />
            </div>
            <div className="impotant__excess mb__40">
              <h5 className="dtext border__bottom pb__20 mb__20">
                Important Information
              </h5>

              {/* Important Information Section */}
              <ImportantInformation />
            </div>
            <div className="cancellationtwo mb__40">
              <span className="dtext fz-18 d-block fw-600 lato mb__10">
                Cancellation Policy
              </span>
              <p className="fz-16 fw-400 lato dtext">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&#39;t anything embarrassing
                hidden in the middle of text.
              </p>
            </div>

            <div className="cancellation">
              <h4 className="dtext mb__15">Safety precautions</h4>
              <p className="fz-16 fw-400 lato dtext">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&#39;t anything embarrassing
                hidden in the middle of text.
              </p>
            </div>

            {/* Reviews Section Here */}
            <Reviews />

            {/* Review Form */}
            <ReviewForm />
          </div>
          <div className="col-xl-4 col-lg-4">
            {/* Invoice Details Section  */}
            <InvoiceDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfermationMain;
