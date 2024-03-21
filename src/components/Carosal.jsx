import React from 'react'

const Carosal = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://kitabay.com/cdn/shop/files/1_c54567a4-f6fa-43ba-b8bb-8d9b89cca4f7.jpg?v=1707769526&width=1500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://kitabay.com/cdn/shop/files/4_c3460ede-9625-402a-be95-84baa0d894ab.jpg?v=1707769526&width=1500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://kitabay.com/cdn/shop/files/2_b99a8c29-a1b8-4792-b4b2-33d6a855f101.jpg?v=1707769525&width=1500" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosal
