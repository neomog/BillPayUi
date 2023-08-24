const ComplaintBox = () => {
  return (
    <section className="conplaint__service hidd">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="complaint__content row justify-content-center align-items-center">
              <div className="complaint__content__box">
                <div className="section__header pb__40">
                  <h2>You can make any complaint our service</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour...
                  </p>
                </div>
                <form>
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="Your email" />
                  <textarea
                    cols={30}
                    rows={3}
                    placeholder="Your complaint"
                  ></textarea>
                </form>
                <div className="agree__chek pb__40">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I Agree support terms & condition
                  </label>
                </div>
                <button type="submit" className="cmn__btn">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="conplaint__thumb"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintBox;
