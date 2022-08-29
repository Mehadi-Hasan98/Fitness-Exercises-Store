import React from 'react';

const Review = () => {
    return (
        <div>
            <h2 className='text-center text-white text-3xl font-mono font-semibold'>What Our Client Says!!</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:ml-16 ml-9 mb-12 mt-12 gap-4 font-mono'>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Jonathan alex</h2>
    <p>They are a good team. Everybody can trust them. Their store is amazing!</p>
    <div className="card-actions justify-end">
      <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=70" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Jackson kyut</h2>
    <p>I am their retailer customer. I love to business with them. My opinion is OK.</p>
    <div className="card-actions justify-end">
      <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bravo smith</h2>
    <p>They have a good inventory management system. They have huge stock of products. You can negotiate with them.</p>
    <div className="card-actions justify-end">
      <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Review;