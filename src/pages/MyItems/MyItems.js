import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import InventoryItems from '../InventoryItems/InventoryItems';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect( () =>{
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    },[user]);


    return (
        <div>
            <h2 className='text-center text-3xl font-mono font-bold text-white mt-12 mb-12'>My Items</h2>

            <div className="card-body grid sm:grid-cols-1 lg:grid-cols-3 gap-6 pl-5 mr-6">

                {
                    items.map(item => <InventoryItems
                    key={item._id}
                    item={item}
                    ></InventoryItems>)
                }

            </div>
        </div>
    );
};

export default MyItems;