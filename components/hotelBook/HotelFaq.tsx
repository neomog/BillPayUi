import HotelFaqSlider from "../slider/HotelFaqSlider";

const HotelFaq = () => {
  return (
    <section className="question__section__three bgsection pt-120 pb-120">
      <div className="container-fluid px-2">
        <div className="row g-0 justify-content-center">
          <div className="offsetcustom-2 col-xxl-4 col-xl-5 col-lg-9">
            <div className="qustion__content hotel__qustioncontent">
              <div
                className="section__header pb__40 wow fadeInDown"
                data-wow-duration=""
              >
                <h2>If you got questions we have answer</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is e recharge?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How reliable is recharge com?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-duration="1.6s"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is recharge credit?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-9">
            {/* Hotel Faq Slider Here */}
            <HotelFaqSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelFaq;
