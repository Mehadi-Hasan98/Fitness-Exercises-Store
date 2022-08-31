import React from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import useToken from "../Hooks/useToken";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  

  const [token] = useToken(user);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-700 font-bold">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if(user || gUser){
    navigate('/');
  }
  if(token) {
    navigate(from, { replace: true });
  }

      const onSubmit = async (data) => {
      await signInWithEmailAndPassword(data.email, data.password);
      navigate(from, { replace: true });
      };

     
      
  return (
    <div className="flex h-screen justify-center items-center mt-10 mb-14">
    <div className="card w-96 shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold font-mono text-zinc-600">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-zinc-600">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
             
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-zinc-600">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {signInError}
          <br/>
          <input
            className="py-2 w-full bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          <small className="text-zinc-600">
            New to IronFit ?{" "}
            <Link className="text-zinc-600" to="/register">
              Create New Account
            </Link>
          </small>
        </p>
        <p className="text-zinc-600"> Forget Password?<button className="btn btn-link text-zinc-600 pe-auto text-decoration-none"  onClick={async (data) => {
          await sendPasswordResetEmail(data.email);
          toast('Sent email');
          
        }}>Reset Password</button>
      </p>
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
         Continue with Google
        </button>
      </div>
    </div>
    <ToastContainer/>
  </div>
  );
};

export default Login;
