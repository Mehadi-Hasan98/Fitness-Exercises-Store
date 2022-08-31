import React from 'react';
import NoFound from '../../assets/images/NoFound.jpg';

const NotFound = () => {
    return (
        <div className='text-center mb-20 text-red-700 font-bold text-3xl'>
            <img style={{width: '1265px', height: '500px'}} src={NoFound}/>
            <h2 className='mt-6'>The page you are looking for is not found!!</h2>
            <h5>Error 404</h5> 
        </div>
    );
};

export default NotFound;