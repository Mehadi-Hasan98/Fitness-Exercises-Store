import React from 'react';


const Banner = () => {
    return (
      <div>
        <h2 className='text-center text-3xl text-mono font-semibold mt-16 mb-6'>Welcome to IronFit Official</h2>
        <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img style={{height : '700px'}} src="https://i.ibb.co/K2y718r/sam-moghadam-khamseh-0sa8-D74iod-I-unsplash-1.jpg" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a> 
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" class="carousel-item relative w-full">
        <img style={{height : '700px'}} src="https://i.ibb.co/CQxLPgd/george-pagan-iii-5-Kfpn0m0-OB4-unsplash-1.jpg" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a> 
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" class="carousel-item relative w-full">
        <img style={{height : '700px'}} src="https://i.ibb.co/hC6prQv/craig-lovelidge-ndr4vtte-VGw-unsplash-1.jpg" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a> 
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" class="carousel-item relative w-full">
        <img style={{height : '700px'}} src="https://i.ibb.co/qY6SGY3/danielle-cerullo-CQf-Nt66tt-ZM-unsplash-1.jpg" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a> 
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Banner;