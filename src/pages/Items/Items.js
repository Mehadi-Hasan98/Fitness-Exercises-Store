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
      <h2 className="text-3xl text-zinc-800 text-center font-mono mt-14 font-bold">Our Products</h2>

      <div className="md:mr-10 gap-16 mt-8 mb-10">
      <div className="card-body pl-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
           {
            items.slice(0, 15).map(item => <InventoryItems
            key={item._id}
            item={item}
            >

            </InventoryItems>)
           }
          </div>
      </div>
      <div class="btn-group mx-20">
  <button class="btn btn-active">1</button>
  <button class="btn">2</button>
  <button class="btn">3</button>
  <button class="btn">4</button>
</div>
<br/>
      <div className="text-center">
      <Link to="/additem"><button className="py-2 mb-14 px-4 bg-cyan-700 text-white font-bold font-mono rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Item</button></Link>
      </div>
    </div>
  );
};

export default Items;
