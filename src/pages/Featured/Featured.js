import React from "react";

const Featured = () => {
  return (
    <div>
      <h2 className="text-3xl text-zinc-100 text-center font-mono font-bold mt-32">
        Daily Fitness Tips
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-16 mx-10 gap-10 mb-32 font-mono">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=650"
              alt="Album"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Make exercise a daily habit - 8 tips</h2>
            <p>1. Piece your workout together.</p>
            <p>2. Exercise with a friend</p>
            <p>3. Keep it brisk</p>
            <p>4. Move your feet before you eat</p>
            <p>5. Try a pedometer</p>
            <p>6. Turn off the TV, computer and smart phone</p>
            <p>7. Turn sit time into fit time</p>
            <p>8. Sign up for a class</p>
            
            <div className="card-actions justify-end">
              <a href="https://www.hsph.harvard.edu/nutritionsource/2013/11/04/making-exercise-a-daily-habit-10-tips/"> <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more..</button></a>
             
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=650"
              alt="Album"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Helpful tips for Fitness and Nutrition</h2>
            <p>1. Stay Hydrated</p>
            <p>2. Find a workout buddy</p>
            <p>3. Stock your Fridge with healthy foods</p>
            <p>4. Relieve those Achy Muscles</p>
            <p>5. Curb your sweet Tooth</p>
            <p>6. Wear Comfortable Sneakers</p>
            <p>7. Pick your perfect tunes</p>
            <p>8. Don't stress over a cheat day</p>
            <div className="card-actions justify-end">
              <a href="https://www.health.com/weight-loss/30-simple-diet-and-fitness-tips"> <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See more..</button></a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
