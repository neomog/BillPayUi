import BookingOfferThreeSlider from "../slider/BookingOfferThreeSlider";

const BookingOffers = () => {
  return (
    <section className="specilabooking__slider pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header text-center pb__60">
              <h2>Special Booking offers for you</h2>
              <p className="max600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hurray__booking__three owl-theme owl-carousel overflow-x-hidden">
        {/* Booking Offer Three Slider Here */}
        <BookingOfferThreeSlider />
      </div>
    </section>
  );
};

export default BookingOffers;
