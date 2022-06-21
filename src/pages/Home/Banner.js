import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <img src= "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=490&q=80" style={{"height": "450px", "width" : "290px"}} className="max-w-sm rounded-lg mr-10 shadow-2xl" alt=''/>
          <div className='font-mono'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;