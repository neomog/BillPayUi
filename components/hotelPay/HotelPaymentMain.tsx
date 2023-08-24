import SelectCard from "../common/SelectCard";
import BillingAddress from "../payment/BillingAddress";
import PaymentMethod from "./PaymentMethod";

const HotelPaymentMain = () => {
  return (
    <section className="payment__section pt__60 pb-120">
      <div className="container">
        <form action="#" method="post">
          <div className="row g-4">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="checkout__radio">
                {/* Select Card Here */}
                <SelectCard />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="checkout__single-wrapper">
                <div className="checkout__single">
                  {/* Billing Address Here */}
                  <BillingAddress />
                </div>
                <div className="checkout__single checkout__single__bg">
                  {/* Payment Method Here */}
                  <PaymentMethod />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HotelPaymentMain;
