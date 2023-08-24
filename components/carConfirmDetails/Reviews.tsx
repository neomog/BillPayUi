import Image from "next/image";
import Link from "next/link";
import bessies from "/public//img/blog/bessies.png";
import comm3 from "/public//img/blog/comm3.png";
import jeromes from "/public//img/blog/jeromes.png";
import commentImg from "/public/img/svg/comments.svg";
import flike from "/public/img/svg/flike.svg";
import sshare from "/public/img/svg/sshare.svg";
import star from "/public/img/svg/star.svg";

const comments = [
  {
    comment_id: 1,
    commenter_name: "Jerome Bell",
    commenter_image_url: jeromes,
    comment_text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...",
    comment_timestamp: "2 days ago",
  },
  {
    comment_id: 2,
    commenter_name: "Courtney Henry",
    commenter_image_url: bessies,
    comment_text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...",
    comment_timestamp: "2 days ago",
  },
  {
    comment_id: 3,
    commenter_name: "Bessie Cooper",
    commenter_image_url: comm3,
    comment_text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be...",
    comment_timestamp: "2 days ago",
  },
];

const Reviews = () => {
  return (
    <div className="comment__details__wrapper">
      <div className="d-flex pb__40 gap-4 align-items-center">
        <h4 className="dtext">Review</h4>
        <span className="d-flex fz-24 fw-400 lato dtext align-items-center gap-2">
          <Image src={star} className="review__star" alt="img" />
          4.9
        </span>
      </div>
      {comments.map((comment, i, arr) => {
        const {
          comment_id,
          commenter_name,
          comment_timestamp,
          commenter_image_url,
          comment_text,
        } = comment;
        return (
          <div
            key={comment_id}
            className={`comment__box__inner ${
              arr.length - 1 !== i ? "mb__15 nlfbottom" : ""
            } pb__25`}
          >
            <div className="man">
              <Image src={commenter_image_url} alt={commenter_name} />
            </div>
            <div className="comment__content">
              <h5>
                {commenter_name} <span>{comment_timestamp}</span>
              </h5>
              <p className="pb__20">{comment_text}</p>
              <div className="admin__commments">
                <Link href="/URL:void(0)">
                  <span className="icon">
                    <Image src={flike} alt="icon" />
                  </span>
                  <span className="text">18</span>
                </Link>
                <Link href="/URL:void(0)">
                  <span className="icon">
                    <Image src={commentImg} alt="icon" />
                  </span>
                  <span className="text">Reply</span>
                </Link>
                <Link href="/URL:void(0)">
                  <span className="icon">
                    <Image src={sshare} alt="icon" />
                  </span>
                  <span className="text">Share</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="view__more d-flex justify-content-center pt__40">
        <Link href="/URL:void(0)" className="cmn__btn">
          <span>View All Reviews</span>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
