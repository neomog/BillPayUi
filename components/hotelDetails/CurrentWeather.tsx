import Image from "next/image";
import friday_icon from "/public/img/details/friday-icon.png";
import colud1 from "/public/img/svg/colud1.svg";
import coludleft from "/public/img/svg/coludleft.svg";

const CurrentWeather = () => {
  return (
    <div className="d-flex weather__wrapping align-items-end">
      <div className="could__left">
        <div className="could__icon d-flex mb__10 align-items-center justify-content-center mb__10">
          <Image src={coludleft} alt="svg" />
        </div>
        <span className="fz-24 gratext lato fw-400 mb__10">23°C</span>
        <span className="fz-16 d-block mb-1 fw-400 lato dtext">
          Humindity: 91%
        </span>
        <span className="fz-16 fw-400 lato dtext">Humindity: 91%</span>
      </div>
      <div className="firday">
        <Image src={friday_icon} alt="img" />
      </div>
      <div className="sun__degree">
        <div className="d-flex align-items-center gap-3">
          <span className="fz-16 d-block dtext lato">Sun</span>
          <Image src={colud1} className="d-block" alt="img" />
          <span className="fz-16 d-block dtext lato">22°C</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="fz-16 d-block dtext lato">Mon</span>
          <Image src={colud1} className="d-block" alt="img" />
          <span className="fz-16 d-block dtext lato">25°C</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="fz-16 d-block dtext lato">Tue</span>
          <Image src={colud1} className="d-block" alt="img" />
          <span className="fz-16 d-block dtext lato">23°C</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="fz-16 d-block dtext lato">Wed</span>
          <Image src={colud1} className="d-block" alt="img" />
          <span className="fz-16 d-block dtext lato">24°C</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
