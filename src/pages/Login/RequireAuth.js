import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified)

    {
        return <div className='text-center mt-5'>
            <h3 className='text-gray-100 mt-16 text-2xl font-mono'>Your Email is not verified!!</h3>
            <h5 className='text-slate-100 mt-4 mb-4 font-mono'>Please verify your email address</h5>
            <button
            className='py-2 px-16 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono mb-20'
            onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
        }}
      >
        send Verification email again
      </button>
      <ToastContainer/>
        </div>
    }


    return children;
};

export default RequireAuth;