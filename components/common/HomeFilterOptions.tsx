"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import broadband from "/public/img/svg/broadband.svg";
import card from "/public/img/svg/card.svg";
import eletricity from "/public/img/svg/eletricity.svg";
import gas from "/public/img/svg/gas.svg";
import landphone from "/public/img/svg/landphone.svg";
import phone from "/public/img/svg/phone.svg";
import tv from "/public/img/svg/tv.svg";
import water from "/public/img/svg/water.svg";

const data = [
  {
    id: 1,
    href: "/dashboard/data",
    iconSrc: phone,
    iconAlt: "icon",
    text: "Data",
  },
  {
    id: 2,
    href: "/dashboard/airtime",
    iconSrc: card,
    iconAlt: "icon",
    text: "Airtime",
  },
  {
    id: 3,
    href: "/dashboard/broadband",
    iconSrc: broadband,
    iconAlt: "icon",
    text: "Broadband",
  },
  {
    id: 4,
    href: "/dashboard/education",
    iconSrc: landphone,
    iconAlt: "icon",
    text: "Education",
  },
  {
    id: 5,
    href: "/dashboard/cabletv",
    iconSrc: tv,
    iconAlt: "icon",
    text: "CableTv",
  },
  {
    id: 6,
    href: "/dashboard/electricity",
    iconSrc: eletricity,
    iconAlt: "icon",
    text: "Electricity",
  },
  {
    id: 7,
    href: "/dashboard/gas",
    iconSrc: gas,
    iconAlt: "icon",
    text: "Gas",
  },
  {
    id: 8,
    href: "/dashboard/water",
    iconSrc: water,
    iconAlt: "icon",
    text: "Water",
  },
];

const HomeFilterOptions = () => {
  const pathName = usePathname();

  return (
    <div className="fasilities__inner d-flex align-items-center">
      {data.map(({ id, href, iconSrc, iconAlt, text }) => (
        <Link
          key={id}
          href={href}
          className={`fasilities__item align-items-center d-flex ${
            pathName === href && "active"
          }`}
        >
          <span className="icon">
            <Image src={iconSrc} alt={iconAlt} />
          </span>
          <span className="fz-18 pratext d-block">{text}</span>
        </Link>
      ))}
    </div>
  );
};

export default HomeFilterOptions;
