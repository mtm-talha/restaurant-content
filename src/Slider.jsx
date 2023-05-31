const Slider = () => {
    return (
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col image text-center position-relative">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 1"
                />
                <h2>Heading 1</h2>
              </div>
              <div className="col image text-center position-relative">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 2"
                />
                <h2>Heading 1</h2>
              </div>
              <div className="col image text-center position-relative">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 3"
                />
                <h2>Heading 1</h2>
              </div>
              <div className="col image text-center position-relative">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 4"
                />
                <h2>Heading 1</h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 1"
                />
              </div>
              <div className="col">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 2"
                />
              </div>
              <div className="col">
                <img
                  src="/assets/1.jpg"
                  className="d-block w-100"
                  alt="Image 3"
                />
              </div>
              <div className="col">
                <img
                  src="/assets/1.jpg"
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
  