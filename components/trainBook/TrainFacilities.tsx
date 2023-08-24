import facilitiesData from "@/data/facilitiesData";
import FacilitieCard from "../cards/FacilitieCard";

const TrainFacilities = () => {
  return (
    <section className="hotel__facilities pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-7 wow fadeInDown">
            <div className="section__header section__center pb__60">
              <h2>Train Facilities</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="flight__facilites__wrap">
          <div className="row g-4 justify-content-center">
            {facilitiesData.map((itm) => (
              // Facilitie Card
              <FacilitieCard key={itm.id} data={itm} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainFacilities;
