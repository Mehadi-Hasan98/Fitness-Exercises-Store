import React from "react";

const Featured = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-mono font-bold mt-16">
        Our Latest Products
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-16 mx-10 gap-10 mb-20">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=300&h=400"
              alt="Album"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=300&h=400"
              alt="Album"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
