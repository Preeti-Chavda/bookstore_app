import React from 'react'
import { useForm } from "react-hook-form";
import Navbar from './Navbar';




const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
    
  return (
    
    <>
    <Navbar />
    
    
    <div className="flex h-screen items-center justify-center boder shadow-md">
    <div className='w-[600px]' >
          <div className="modal-box">
        <div className='container'>
        <h3 className="font-bold text-lg">Contact Us</h3>
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* name */}
                <div>
                <span>Name</span><br/>
                <input type="text" placeholder='Enter Full Name' className="w-80 px-3 py-1 border rounded-md outline-none"  
                 {...register("name", { required: true })}/><br/>
                 {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* email */}
                <div>
                <span>Email</span><br/>
                <input type="email" placeholder='Enter Your Email' className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}  /><br/>
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                </div>

                {/* message */}
                <div>
                <span>Message</span><br/>
                <input type="message" placeholder='Enter Your Message'  className="w-80 px-3 py-1 border rounded-md outline-none" 
                {...register("message", { required: true })} /><br/>
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                </div>

                {/* <button> */}
                <div className="flex justify-around-center mt-6">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" >Submit</button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Contact