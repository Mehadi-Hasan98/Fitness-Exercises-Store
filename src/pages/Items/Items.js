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
      <h2 className="text-3xl text-white text-center font-mono mt-14 font-bold">Our Products</h2>

      <div className="md:mr-10 gap-16 mt-8 mb-10">
      <div className="card-body pl-9 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
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
      <Link to="/additem"><button className="py-2 mb-14 px-4 bg-rose-500 text-white font-bold font-mono rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Item</button></Link>
      </div>
    </div>
  );
};

export default Items;
