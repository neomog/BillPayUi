import PaymentMethodInfo from "@/components/common/PaymentMethodInfo";
import SelectCard from "@/components/common/SelectCard";

const TrainPaymentMain = () => {
  return (
    <section className="payment__section pt__60 pb-120">
      <div className="container">
        <form action="#" method="post">
          <div className="row g-4">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="checkout__radio">
                {/* Select Card here */}
                <SelectCard />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="checkout__single-wrapper">
                <div className="checkout__single checkout__single__bg">
                  {/* Payment Form Here */}
                  <PaymentMethodInfo />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TrainPaymentMain;
