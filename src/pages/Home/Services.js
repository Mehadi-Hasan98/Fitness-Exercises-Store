import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import Item from "./Item";

const Services = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  if(!loading){
    <Loading/>
  }
  else{
    setLoading(false);
  }

  useEffect( () => {
    fetch('http://localhost:5000/item')
    .then(res=> res.json()
    .then(data=> setItems(data)))
  }, [])
  return (
    <>
        <h2 className="text-3xl text-white font-mono font-bold text-center mt-32">
        Manage Items
        </h2>
        {/* className="grid sm:grid-cols-1 lg:grid-cols-3 md:ml-10 ml-5 gap-16 mt-16 mb-40" */}
        <div className="card-body grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mr-6">
          
  {
    items.slice(0, 6).map(item => <Item
    key={item._id}
    item={item}
    >

    </Item>)
  }
  <div className='mb-10 ml-14 mt-8'>
      <Link to="/items"><button class="py-2 px-16 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Manage Inventories </button></Link>
      </div>
</div>
    </>
  );
};

export default Services;









{/* <div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    alt="Shoes"
  />
</figure>
<div className="card-body">
  <h2 className="card-title">Name : Powerline Half Rack</h2>
  <h2 className="card-title">Price : $20</h2>
  <p>Description :</p>
  <p>Quantity : 1000</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div>
<div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Shoes"
  />
</figure>
<div className="card-body">
<h2 className="card-title">Name : Stationary Bycycle</h2>
  <h2 className="card-title">Price : $200</h2>
  <p>Description :</p>
  <p>Quantity : 200</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div>
<div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1620188526357-ff08e03da266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Shoes"
  />
</figure>
<div className="card-body">
<h2 className="card-title">Name : Barbell</h2>
  <h2 className="card-title">Price : $150</h2>
  <p>Description :</p>
  <p>Quantity : 500</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div>
<div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1540558870477-e8c59bf88421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Shoes"
  />
</figure>
<div className="card-body">
<h2 className="card-title">Name : Treadmill</h2>
  <h2 className="card-title">Price : $300</h2>
  <p>Description :</p>
  <p>Quantity : 200</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div>
<div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Shoes"
  />
</figure>
<div className="card-body">
<h2 className="card-title">Name : Rubber ball</h2>
  <h2 className="card-title">Price : $20</h2>
  <p>Description :</p>
  <p>Quantity : 600</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div>
<div className="card card-compact bg-base-300 w-80 shadow-2xl">
<figure>
  <img
    src="https://images.unsplash.com/photo-1632077804406-188472f1a810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Shoes"
  />
</figure>
<div className="card-body">
<h2 className="card-title">Name : Dumbbell</h2>
  <h2 className="card-title">Price : $15</h2>
  <p>Description :</p>
  <p>Quantity : 1000</p>
  <p>Supplier Name : JK Group</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Update</button>
  </div>
</div>
</div> */}
