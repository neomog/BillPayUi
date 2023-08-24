import Image from "next/image";
import Link from "next/link";
import croom1 from "/public/img/details/croom1.jpg";
import croom2 from "/public/img/details/croom2.jpg";
import croom3 from "/public/img/details/croom3.jpg";
import croom4 from "/public/img/details/croom4.jpg";
import singlebess from "/public/img/svg/singlebess.svg";
import zoominnout from "/public/img/svg/zoominnout.svg";

const hotelData = [
  {
    id: 1,
    imageSrc: croom1,
    title: "Bitast Hotel",
    bedType: "Single size bed",
    roomSize: "4.66x4.66",
    price: "$312",
    discountedPrice: "$332",
  },
  {
    id: 2,
    imageSrc: croom2,
    title: "Dual Bed Room",
    bedType: "Single size bed",
    roomSize: "4.66x4.66",
    price: "$312",
    discountedPrice: "$332",
  },
  {
    id: 3,
    imageSrc: croom3,
    title: "Deluxe Room",
    bedType: "Dual size bed",
    roomSize: "66.66x4.66",
    price: "$312",
    discountedPrice: "$332",
  },
  {
    id: 4,
    imageSrc: croom4,
    title: "Luxury Room",
    bedType: "Single size bed",
    roomSize: "5.66x4.66",
    price: "$312",
    discountedPrice: "$332",
  },
];

const ChooseRoom = () => {
  return (
    <div className="row g-4 justify-content-center">
      {hotelData.map(
        ({
          id,
          imageSrc,
          title,
          bedType,
          roomSize,
          price,
          discountedPrice,
        }) => (
          <div key={id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="bits__hotel bits__hotels__details d-grid align-items-center gap-3">
              <div className="thumb thumb2">
                <Link href="/URL:void(0)">
                  <Image src={imageSrc} className="w-100" alt="img" />
                </Link>
              </div>
              <div className="content content__space">
                <div className="title gap-3 d-flex justify-content-between mb__10">
                  <h5>{title}</h5>
                </div>
                <div className="d-flex flex-wrap mb__15 align-items-center gap-4">
                  <span className="dubay gap-2 d-flex align-items-center fz-16 fw-400 lato dtext">
                    <span className="singlebed">
                      <Image src={singlebess} alt="img" />
                    </span>
                    {bedType}
                  </span>
                  <span className="dubay gap-2 d-flex align-items-center fz-16 fw-400 lato dtext">
                    <span className="singlebed">
                      <Image src={zoominnout} alt="img" />
                    </span>
                    {roomSize}
                  </span>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-4">
                  <div className="price__off mb__10 d-flex gap-3">
                    <span className="fz-18 fw-500 lato dtext">
                      {discountedPrice}
                    </span>
                    <span className="linetrogh fz-16 mt-1 fw-500 lato">
                      {price}
                    </span>
                    <span className="fz-16 fw-500 lato base d-block">
                      20% OFF
                    </span>
                  </div>
                  <span className="fz-18 d-block fw400 mb__20 lato textfive">
                    1 Room/night
                  </span>
                </div>
                <div className="d-grid mt-3 justify-content-start">
                  <Link href="/hotel-details-confirm" className="cmn__btn">
                    <span>Select Room</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ChooseRoom;
