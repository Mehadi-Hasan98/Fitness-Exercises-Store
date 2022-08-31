
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

import auth from '../../firebase.init';
import InventoryItems from '../InventoryItems/InventoryItems';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () =>{

        const getItems = async() =>{
            const email = user.email;
            const url = `https://hidden-refuge-89046.herokuapp.com/myitems?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
       getItems();
    },[user]);


    return (
        <div>
            <h2 className='text-center text-3xl font-mono font-bold text-zinc-800 mt-12 mb-8'>My Items</h2>

            <div className="card-body grid sm:grid-cols-1 lg:grid-cols-3 gap-6 pl-5 mr-6 mb-20">

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