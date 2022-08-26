import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Itemdetail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState([]);
    useEffect( ()=> {
        const url = `http://localhost:3000/item/${itemId}`;
  
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data))
    }, [itemId]);

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-10 mb-10 mx-auto">
  <figure><img src={item.img}alt="Item" /></figure>
  <div class="card-body">
    <h2 class="card-title">{item.name}</h2>
    <p>{item.description}</p>
   
  </div>
</div>
<div>
    <button class="btn btn-accent mb-10">Delivered</button>
</div>
        </div>

    );
};

export default Itemdetail;