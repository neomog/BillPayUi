import ConfirmBus from "./ConfirmBus";
import InvoiceDetails from "./InvoiceDetails";

const ConfermationMain = () => {
  return (
    <section className="hotel__details overflow-hidden pt__60 pb__60">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            {/* Confirm Bus Here */}
            <ConfirmBus />
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

export default ConfermationMain;
