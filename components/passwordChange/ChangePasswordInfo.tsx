const ChangePasswordInfo = () => {
  return (
    <div className="personal__favorit">
      <div className="personal__info__boxtwo">
        <div className="per__ittle d-flex align-items-center">
          <h5>Change Password</h5>
        </div>
        <form className="change__password">
          <div className="form__grp mb__20">
            <label htmlFor="present">Present Password</label>
            <input
              type="text"
              id="present"
              placeholder="Present Password"
              required
            />
          </div>
          <div className="form__grp mb__20">
            <label htmlFor="new">New Password</label>
            <input type="text" id="new" placeholder="New Password" required />
          </div>
          <div className="form__grp mb__40">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="text"
              id="confirm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form__grp">
            <button type="submit" className="cmn__btn">
              <span>Update Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordInfo;
