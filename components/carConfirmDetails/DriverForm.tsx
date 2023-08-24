const DriverForm = () => {
  return (
    <form className="signup__form pt__40">
      <div className="row g-4 justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter First Name"
              required
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="emaill">Last Name</label>
            <input
              type="email"
              id="emaill"
              placeholder="Enter Last Name"
              required
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="driver">Driver Age</label>
            <input type="text" id="driver" placeholder="30-60" required />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="eemain1">Email</label>
            <input
              type="text"
              id="eemain1"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="eemain2">Mobile Number</label>
            <input
              type="text"
              id="eemain2"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="input__grp">
            <label htmlFor="drinoe">Driving License No</label>
            <input
              type="text"
              id="drinoe"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="input__grp">
            <label htmlFor="comment">Description / Address</label>
            <textarea
              className="form-control"
              rows={3}
              id="comment"
              name="text"
              placeholder="About your self..."
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DriverForm;
