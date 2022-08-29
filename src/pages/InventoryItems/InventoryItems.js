import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useManageInventory from '../Hooks/useManageInventory';

const InventoryItems = ({item}) => {
    const [items, setItems] = useManageInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE',

            })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                
            })
            toast('Item deleted successfully');
        }
    }
    const { name, price, img, description, quantity, supplier } = item;
    return (
        <div className="md:ml-10">
            <div className="card card-compact bg-base-300 w-80 shadow-2xl">
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
    <button onClick={()=> handleDelete(item._id)}  className="py-2 px-6 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</button>
  </div>
</div>
</div>
<ToastContainer/>
        </div>
    );
};

export default InventoryItems;