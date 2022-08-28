import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Itemdetail = () => {
    const {itemId} = useParams();


    const [item, setItem] = useState([]);
    useEffect( ()=> {
        const url = `http://localhost:5000/item/${itemId}`;
  
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data))
    }, [itemId]);
  
    return (
        <>
        <div class="card w-96 bg-base-100 shadow-2xl mt-10 mb-10 mx-auto font-mono">
        <figure><img src={item.img}alt="Item" /></figure>
        <div class="card-body">
        <h2 className="card-title">Name : {item.name}</h2>
  <h2 className="card-title">Price : {item.price}</h2>
  <p>Description : {item.description}</p>
  <p>Quantity : {item.quantity}</p>
  <p>Supplier Name : {item.supplier}</p>
        </div>
        <button class="py-2 mx-auto px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4">Delivered</button>
      </div>

      <div className='text-center mt-10 mb-10 py-4 font-mono'>
        <input className='py-2 text-center rounded-lg' type="number" name="" placeholder="Enter Your Number" ></input>
        <button class="py-2 ml-4 px-4 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Restock</button>
      </div>
      <div className='text-center mb-10'>
      <Link to="/items"><button class="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Manage Inventories</button></Link>
      </div>
        
        </>

    );
};

export default Itemdetail;