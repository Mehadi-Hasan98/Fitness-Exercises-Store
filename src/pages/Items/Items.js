import React, { useState } from "react";
import { Link } from "react-router-dom";
import useManageInventory from "../Hooks/useManageInventory";
import InventoryItems from "../InventoryItems/InventoryItems";
import Loading from "../Shared/Loading";

const Items = () => {

  const [items] = useManageInventory();
  const [loading, setLoading] = useState(true);
  if(!loading){
    <Loading/>
  }
  else{
    setLoading(false);
  }
  return (
    <div>
      <h2 className="text-3xl text-white text-center font-mono mt-16 font-bold">Our Products</h2>
      <div className="md:mr-8 gap-16 mt-12 mb-20">
        
      <div class="card-body grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
           {
            items.map(item => <InventoryItems
            key={item._id}
            item={item}
            >

            </InventoryItems>)
           }
          </div>
      </div>
      <div className="text-center">
      <Link to="/additem"><button class="py-2 mb-10 px-4 bg-rose-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Item</button></Link>
      </div>
    </div>
  );
};

export default Items;
