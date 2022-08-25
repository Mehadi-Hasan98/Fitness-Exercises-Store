import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-mono mt-16">
        Welcome to our daily Blogs
      </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-16 gap-4 mb-16 md:ml-16 ml-5">
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Read More</button>
            </div>
          </div>
        </div>        
        </div>
    </div>
  );
};

export default Blogs;
