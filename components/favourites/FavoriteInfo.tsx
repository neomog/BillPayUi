import Image from "next/image";
import Link from "next/link";
import ata5g from "/public/img/payment/ata5g.png";
import met from "/public/img/payment/met.png";
import sprint from "/public/img/payment/sprint.png";
import verizon from "/public/img/payment/verizon.png";
import edits from "/public/img/svg/edits.svg";

const FavoriteInfo = () => {
  return (
    <div className="personal__favorites">
      <div className="personal__info__box">
        <div className="per__ittle d-flex align-items-center">
          <h5>Your Saved Connections</h5>
        </div>
        <div className="table__system">
          <table className="table1">
            <thead>
              <tr>
                <th>Oparetor</th>
                <th>Transaction</th>
                <th>Number</th>
                <th>Purchase</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="oparetor">
                    <Image src={verizon} alt="img" />
                  </span>
                </td>
                <td>Mobile Recharge</td>
                <td>(406) 555-0120</td>
                <td>
                  <Link href="/payment" className="purchase">
                    <span>Recharge Now</span>
                  </Link>
                </td>
                <td>
                  <Link href="/URL:void(0)" className="edit">
                    <Image src={edits} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="oparetor">
                    <Image src={met} alt="img" />
                  </span>
                </td>
                <td>Electric Bill</td>
                <td>4600</td>
                <td>
                  <Link href="/payment" className="purchase">
                    <span>Payment</span>
                  </Link>
                </td>
                <td>
                  <Link href="/URL:void(0)" className="edit">
                    <Image src={edits} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="oparetor">
                    <Image src={sprint} alt="img" />
                  </span>
                </td>
                <td>Gas Bill</td>
                <td>8829</td>
                <td>
                  <Link href="/payment" className="purchase">
                    <span>Payment</span>
                  </Link>
                </td>
                <td>
                  <Link href="/URL:void(0)" className="edit">
                    <Image src={edits} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="oparetor">
                    <Image src={ata5g} alt="img" />
                  </span>
                </td>
                <td>Flight Booking</td>
                <td>9151</td>
                <td>
                  <Link href="/payment" className="purchase">
                    <span>Payment</span>
                  </Link>
                </td>
                <td>
                  <Link href="/URL:void(0)" className="edit">
                    <Image src={edits} alt="img" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FavoriteInfo;
