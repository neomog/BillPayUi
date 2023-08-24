import FlightTestimonialSlider from "../slider/FlightTestimonialSlider";

const FlightClients = () => {
  return (
    <section className="flight__section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>What does the client say?</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        {/* Flight Testimonial Slider */}
        <FlightTestimonialSlider />
      </div>
    </section>
  );
};

export default FlightClients;
