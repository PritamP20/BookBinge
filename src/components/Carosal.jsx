import React from 'react';

const Carosal = () => {
  const imageHeight = '700px'; // Set a fixed height for the images

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="hi.avif"
            className="d-block w-100"
            style={{ height: imageHeight }}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="bi.jpg"
            className="d-block w-100"
            style={{ height: imageHeight }}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="hi.avif"
            className="d-block w-100"
            style={{ height: imageHeight }}
            alt="Slide 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carosal;
