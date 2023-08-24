import Image from "next/image";
import airConditionerSvg from "/public/img/svg/airconditioner.svg";
import bathubSvg from "/public/img/svg/bathub.svg";
import cableSvg from "/public/img/svg/cable.svg";
import coffeeSvg from "/public/img/svg/coffee.svg";
import disabledAccessSvg from "/public/img/svg/disabled-access.svg";
import hairdryerSvg from "/public/img/svg/hairdryer.svg";
import ironingSvg from "/public/img/svg/ironing.svg";
import lobbySvg from "/public/img/svg/lobby.svg";
import rentCarSvg from "/public/img/svg/rentcar.svg";
import singleBedSvg from "/public/img/svg/singlebess.svg";
import teaCoffeeSvg from "/public/img/svg/teacoffe.svg";
import wifiSvg from "/public/img/svg/wifis.svg";

const amenities = [
  {
    id: 1,
    icon: coffeeSvg,
    text: "Breakfast",
  },
  {
    id: 2,
    icon: cableSvg,
    text: "Cable TV",
  },
  {
    id: 3,
    icon: ironingSvg,
    text: "Ironing service",
  },
  {
    id: 4,
    icon: bathubSvg,
    text: "Bathtub",
  },
  {
    id: 5,
    icon: lobbySvg,
    text: "Lobby bar",
  },
  {
    id: 6,
    icon: disabledAccessSvg,
    text: "Disabled access",
  },
  {
    id: 7,
    icon: rentCarSvg,
    text: "Rent a car",
  },
  {
    id: 8,
    icon: hairdryerSvg,
    text: "Hair Dryer",
  },
  {
    id: 9,
    icon: singleBedSvg,
    text: "Single bed",
  },
  {
    id: 10,
    icon: teaCoffeeSvg,
    text: "Tea/Coffee",
  },
  {
    id: 11,
    icon: airConditionerSvg,
    text: "Air Conditioner",
  },
  {
    id: 12,
    icon: wifiSvg,
    text: "High Speed WIFI",
  },
];

const Amenities = () => {
  return (
    <ul className="amenities__listdetails d-flex align-items-center flex-wrap">
      {amenities.map(({ id, icon, text }) => (
        <li key={id} className="d-flex align-items-center gap-2">
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={icon} alt="svg" />
          </span>
          <span className="fz-18 fw-400 lato dtext">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Amenities;
