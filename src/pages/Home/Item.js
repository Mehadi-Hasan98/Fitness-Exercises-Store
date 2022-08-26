import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Item = ({item}) => {
    const {id, name, price, img, description, quantity, supplier} = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }
    return (
        
        <div className="md:ml-10 ml-5">
            <div className="card card-compact bg-base-300 w-80 shadow-2xl">
            <figure>
  <img src={img}/>
</figure>
<div className="card-body">
  <h2 className="card-title">Name : {name}</h2>
  <h2 className="card-title">Price : {price}</h2>
  <p>Description : {description}</p>
  <p>Quantity : {quantity}</p>
  <p>Supplier Name : {supplier}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary" onClick={()=> navigateToItemDetail(id)}>Update</button>
  </div>
</div>
</div>
        </div>
    );
};

export default Item;