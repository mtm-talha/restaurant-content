const Slider = () => {
  return (
    // <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <div className="row">
    //         <div className="col slider-box">
    //           <img
    //             src="/assets/Atlantis_Dubai.png"
    //             className="d-block"
    //             alt="Image 1"
    //           />
    //           <h2>Atlantis Dubai</h2>
    //         </div>
    //         <div className="col slider-box">
    //           <img
    //             src="/assets/Burj_Alarab.png"
    //             className="d-block"
    //             alt="Image 2"
    //           />
    //           <h2>Burj Alarab</h2>
    //         </div>
    //         <div className="col slider-box">
    //           <img
    //             src="/assets/DIFC.png"
    //             className="d-block"
    //             alt="Image 3"
    //           />
    //           <h2>DIFC</h2>
    //         </div>
    //         <div className="col slider-box">
    //           <img
    //             src="/assets/Dubai_Marina.png"
    //             className="d-block"
    //             alt="Image 4"
    //           />
    //           <h2>Dubai Marina</h2>
    //         </div>
    //         {/* <div className="col image text-center position-relative">
    //           <img
    //             src="/assets/Palm_Jumeirah.png"
    //             className="d-block"
    //             alt="Image 4"
    //           />
    //           <h2>Palm Jumeirah</h2>
    //         </div> */}
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <div className="row">
    //         <div className="col image text-center position-relative">
    //           <img
    //             src="/assets/Dubai_Marina.png"
    //             className="d-block w-100"
    //             alt="Image 4"
    //           />
    //           <h2>Dubai Marina</h2>
    //         </div>
    //         <div className="col image text-center position-relative">
    //           <img
    //             src="/assets/Palm_Jumeirah.png"
    //             className="d-block w-100"
    //             alt="Image 4"
    //           />
    //           <h2>Palm Jumeirah</h2>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Add more carousel-item elements for additional sets of images */}
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#myCarousel"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#myCarousel"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    <>
    <div className="container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/banner.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Slider;
