import GallerySlider from "../slider/GallerySlider";

const OurGallery = () => {
  return (
    <section className="hotel__gallery pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center wow fadeInDown">
          <div className="section__header section__center pb__60">
            <h2>Our gallery</h2>
            <p className="max600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Slider Here */}
      <GallerySlider />
    </section>
  );
};

export default OurGallery;
