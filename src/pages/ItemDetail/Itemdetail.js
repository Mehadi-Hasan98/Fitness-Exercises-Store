import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Itemdetail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState([]);
    useEffect( ()=> {
        const url = `items.json/${itemId}`;
  
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data))
    }, [itemId]);

    return (
        <>
        <div class="card w-96 bg-base-100 shadow-2xl mt-10 mb-10 mx-auto">
        <figure><img src={item.img}alt="Item" /></figure>
        <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <button class="btn btn-accent mb-10">Delivered</button>
      </div>

      <div className='text-center mt-10 mb-10 py-4'>
        <input className='py-2 text-center rounded-lg' type="number" name="" placeholder="Enter Your Number" ></input>
        <button class="py-2 ml-4 px-4 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Restock</button>
      </div>
      <div className='text-center mb-10'>
      <Link to="/items"><button class="py-2 px-4 bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Manage Inventories</button></Link>
      </div>
        
        </>

    );
};

export default Itemdetail;