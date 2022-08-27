import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddItem = () => {

    const {
        register,
        handleSubmit,
      } = useForm();
      const [user] = useAuthState(auth);

      const onSubmit = (data) => {
       
      };
    return (
        <div className="flex h-screen justify-center items-center mt-10 mb-12">
    <div className="card w-96 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold font-mono text-white">Add New Item</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <input
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full max-w-xs"
              {...register("supplier", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
               
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
               
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Number is Required",
                },
                
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <input
              type="URL"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>
          <input className='input input-bordered w-full max-w-xs mb-3 mt-3' placeholder='Email' type="email" value={user.email} {...register("email")} />

         
          <br/>
          <input
            className="btn w-full max-w-xs text-white bg-rose-500 outline"
            type="submit"
            value="Add New Item"
          />
        </form>
      </div>
    </div>
  </div>
    );
};

export default AddItem;