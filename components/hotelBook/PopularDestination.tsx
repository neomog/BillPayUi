import PopularDestinationSlider from "../slider/PopularDestinationSlider";

const PopularDestination = () => {
  return (
    <section className="hotel__bookslider1 pb-120">
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
        <div className="row g-4 wow fadeInUp">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="hurray__hoteltabs">
              <div
                className="nav nav-tabshur"
                id="nav-tabeurope"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-home-tabeurope"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-homeeurope"
                  type="button"
                  role="tab"
                  aria-controls="nav-homeeurope"
                  aria-selected="true"
                >
                  01. Asia Pacific
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tabeurope"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profileeurope"
                  type="button"
                  role="tab"
                  aria-controls="nav-profileeurope"
                  aria-selected="false"
                >
                  02. The America
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tabeurope"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contacteurope"
                  type="button"
                  role="tab"
                  aria-controls="nav-contacteurope"
                  aria-selected="false"
                >
                  03. Europe
                </button>
                <button
                  className="nav-link"
                  id="nav-home-tabafrica"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-homeafrica"
                  type="button"
                  role="tab"
                  aria-controls="nav-homeafrica"
                  aria-selected="true"
                >
                  04. Middle East
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tabafrica"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profileafrica"
                  type="button"
                  role="tab"
                  aria-controls="nav-profileafrica"
                  aria-selected="false"
                >
                  05. Africa
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tabafrica"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contactafrica"
                  type="button"
                  role="tab"
                  aria-controls="nav-contactafrica"
                  aria-selected="false"
                >
                  06. Australia
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-homeeurope"
                role="tabpanel"
                aria-labelledby="nav-home-tabeurope"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
              <div
                className="tab-pane fade"
                id="nav-profileeurope"
                role="tabpanel"
                aria-labelledby="nav-profile-tabeurope"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
              <div
                className="tab-pane fade"
                id="nav-contacteurope"
                role="tabpanel"
                aria-labelledby="nav-contact-tabeurope"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
              <div
                className="tab-pane fade"
                id="nav-homeafrica"
                role="tabpanel"
                aria-labelledby="nav-home-tabafrica"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
              <div
                className="tab-pane fade"
                id="nav-profileafrica"
                role="tabpanel"
                aria-labelledby="nav-profile-tabafrica"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
              <div
                className="tab-pane fade"
                id="nav-contactafrica"
                role="tabpanel"
                aria-labelledby="nav-contact-tabafrica"
              >
                {/* Popular Destination Slider */}
                <PopularDestinationSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
