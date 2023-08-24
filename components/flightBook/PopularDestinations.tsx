import FlightBrachSlider from "../slider/FlightBrachSlider";

const PopularDestinations = () => {
  return (
    <section className="hotel__bookslider1 pb-120 overflow-x-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header pb__60">
              <h2>Popular Destinations</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Brach Slider Here */}
      <FlightBrachSlider />
    </section>
  );
};

export default PopularDestinations;
