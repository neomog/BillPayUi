const ReviewForm = () => {
  return (
    <form className="write__comment">
      <h4 className="xs-28">Write a review</h4>
      <input type="text" placeholder="Enter Your Name..." />
      <input type="email" placeholder="Enter Your Email..." />
      <textarea
        name="writecommnet"
        cols={30}
        rows={5}
        placeholder="Write a comment..."
      ></textarea>
      <button type="submit" className="cmn__btn">
        <span>Submit Now</span>
      </button>
    </form>
  );
};

export default ReviewForm;
