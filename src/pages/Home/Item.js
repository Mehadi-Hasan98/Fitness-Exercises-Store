import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Item = ({item}) => {
    const {_id, name, price, img, description, quantity, supplier} = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }
    return (
        
        <div className="md:ml-10">
            <div className="card card-compact bg-base-200 w-80 shadow-xl mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-100 ...">
            <figure>
  <img src={img}/>
</figure>
<div className="card-body font-mono">
  <h2 className="card-title">Name : {name}</h2>
  <h2 className="card-title">Price : ${price}</h2>
  <p>Description : {description}</p>
  <p>Quantity : {quantity}</p>
  <p>Supplier Name : {supplier}</p>
  <div className="card-actions justify-end">
    <button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={()=> navigateToItemDetail(_id)}>Update</button>
  </div>
</div>
</div>
        </div>
    );
};

export default Item;