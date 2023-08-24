const ImportantInformation = () => {
  return (
    <>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab1"
            data-bs-toggle="pill"
            data-bs-target="#pills-home1"
            type="button"
            role="tab"
            aria-controls="pills-home1"
            aria-selected="true"
          >
            Excess
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab2"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile2"
            type="button"
            role="tab"
            aria-controls="pills-profile2"
            aria-selected="false"
          >
            Mileage Allowance
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab3"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact3"
            type="button"
            role="tab"
            aria-controls="pills-contact3"
            aria-selected="false"
          >
            Age Requirements
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab4"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact4"
            type="button"
            role="tab"
            aria-controls="pills-contact4"
            aria-selected="false"
          >
            Need at Pick-up
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab5"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact5"
            type="button"
            role="tab"
            aria-controls="pills-contact5"
            aria-selected="false"
          >
            Payment Methods
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home1"
          role="tabpanel"
          aria-labelledby="pills-home-tab1"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text.
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile2"
          role="tabpanel"
          aria-labelledby="pills-profile-tab2"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text. available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don&#39;t look
          even slightly believable. If you are going to use a passage of Lorem
          Ipsum, you need to be sure there isn&#39;t anything embarrassing
          hidden in the middle of text.
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact3"
          role="tabpanel"
          aria-labelledby="pills-contact-tab3"
        >
          Majority have suffered alteration in some form, by injected humour, or
          randomised words which don&#39;t look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn&#39;t anything embarrassing hidden in the middle of text. There
          are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don&#39;t look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn&#39;t anything embarrassing hidden in the middle of text.
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact4"
          role="tabpanel"
          aria-labelledby="pills-contact-tab4"
        >
          Alteration in some form, by injected humour, or randomised words which
          don&#39;t look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn&#39;t anything
          embarrassing hidden in the middle of text. There are many variations
          of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don&#39;t look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn&#39;t anything
          embarrassing hidden in the middle of text.
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact5"
          role="tabpanel"
          aria-labelledby="pills-contact-tab5"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text.
        </div>
      </div>
    </>
  );
};

export default ImportantInformation;
