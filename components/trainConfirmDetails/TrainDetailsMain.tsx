import ConfirmationDetails from "../common/ConfirmationDetails";
import InvoiceDetails from "../common/InvoiceDetails";

const TrainDetailsMain = () => {
  return (
    <section className="flight__onewaysectio pt__60 pb__60">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {/* Confirmation Details here */}
            <ConfirmationDetails title="Confirm Trains Details" />
          </div>
          <div className="col-xl-4 col-lg-4">
            {/* Invoice Details Here */}
            <InvoiceDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainDetailsMain;
