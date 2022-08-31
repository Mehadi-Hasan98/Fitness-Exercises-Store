import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Itemdetail = () => {
  
    const {itemId} = useParams();

    const [newData, setNewData] = useState(false);
    const [stockNumber, setStockNumber] = useState({stock: ""});
  
  

    let name, value;
    const getUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setStockNumber({ ...stockNumber, [name]: value });
      e.preventDefault();
      
    };


    const [item, setItem] = useState({});
    useEffect( ()=> {
        const url = `https://hidden-refuge-89046.herokuapp.com/item/${itemId}`;
  
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data))
    }, []);

    // delivered button
    const handleDelivered = async (id, quantity) => {
      window.location.reload(false);
      const getQuantity = parseInt(quantity) - 1;
      toast('item delivered successfully');
      const newQuantity = {
        quantity: getQuantity.toString(),
        
      };
  
      // send data to the mongodb server and update
      const url = `https://hidden-refuge-89046.herokuapp.com/item/${id}`
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }
      });
    };

    // update data
    const handleUpdate = async (id, quantity) => {
      
      const {stock} = stockNumber;
      toast('Stock updated');
      console.log(stock)
      const getQuantity = parseInt(quantity) + parseInt(stock);
     
      const newQuantity = {
        quantity: getQuantity.toString(),
      };
      
  
      // send data to the monogodb server and update
      const url = `https://hidden-refuge-89046.herokuapp.com/item/${id}`
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }
        window.location.reload(false);
      });
     
    };
  
    return (
        <div>
        <div className="card w-80 mx-auto bg-base-100 shadow-2xl mt-16 mb-10 font-mono">
        <figure><img src={item.img}alt="Item" /></figure>
        <div className="card-body">
        <h2 className="card-title">Name:{item.name}</h2>
  <h2 className="card-title">Price : ${item.price}</h2>
  <p>Description : {item.description}</p>
  <p>Quantity : {item.quantity}</p>
  <p>Supplier Name : {item.supplier}</p>
        </div>
        <button onClick={() => handleDelivered(item._id, item.quantity)} className="py-2 mx-auto px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4">Delivered</button>
      </div>

      <div className='text-center mt-10 mb-10 py-4 font-mono'>
      <input className='rounded-lg py-2 px-4 outline' type="number" id='stock' name='stock' placeholder='Enter Quantity Number' value={stockNumber.stock} onChange={getUserData}/>
      
        <button onClick={() => handleUpdate(item._id, item.quantity)} className="py-2 ml-4 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Restock</button>
      </div>

      <div className='text-center mb-10'>
      <Link to="/items"><button className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Manage Inventories</button></Link>
      </div>
        <ToastContainer/>
        </div>

    );
};

export default Itemdetail;