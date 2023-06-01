const Slider = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col image text-center position-relative">
              <img
                src="/assets/Atlantis_Dubai.png"
                className="d-block w-100"
                alt="Image 1"
              />
              <h2>Atlantis Dubai</h2>
            </div>
            <div className="col image text-center position-relative">
              <img
                src="/assets/Burj_Alarab.png"
                className="d-block w-100"
                alt="Image 2"
              />
              <h2>Burj Alarab</h2>
            </div>
            <div className="col image text-center position-relative">
              <img
                src="/assets/DIFC.png"
                className="d-block w-100"
                alt="Image 3"
              />
              <h2>DIFC</h2>
            </div>
            <div className="col image text-center position-relative">
              <img
                src="/assets/Dubai_Marina.png"
                className="d-block w-100"
                alt="Image 4"
              />
              <h2>Dubai Marina</h2>
            </div>
            <div className="col image text-center position-relative">
              <img
                src="/assets/Palm_Jumeirah.png"
                className="d-block w-100"
                alt="Image 4"
              />
              <h2>Palm Jumeirah</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col image text-center position-relative">
              <img
                src="/assets/Dubai_Marina.png"
                className="d-block w-100"
                alt="Image 4"
              />
              <h2>Dubai Marina</h2>
            </div>
            <div className="col image text-center position-relative">
              <img
                src="/assets/Palm_Jumeirah.png"
                className="d-block w-100"
                alt="Image 4"
              />
              <h2>Palm Jumeirah</h2>
            </div>
            <div className="col">
              <img
                src="/assets/Atlantis_Dubai.png"
                className="d-block w-100"
                alt="Image 1"
              />
            </div>
            <div className="col">
              <img
                src="/assets/Burj_Alarab.png"
                className="d-block w-100"
                alt="Image 2"
              />
            </div>
            <div className="col">
              <img
                src="/assets/DIFC.png"
                className="d-block w-100"
                alt="Image 3"
              />
            </div>
            <div className="col">
              <img
                src="/assets/Dubai_Marina.png"
                className="d-block w-100"
                alt="Image 4"
              />
            </div>
            <div className="col">
              <img
                src="/assets/Palm_Jumeirah.png"
                className="d-block w-100"
                alt="Image 4"
              />
            </div>
          </div>
        </div>
        {/* Add more carousel-item elements for additional sets of images */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
