import React from 'react';
import bgImage from '../image/bgImage.png'
import logo from '../image/logo.png'
import google from '../image/google 2.png'
import fb from '../image/facebook.png'
import { useForm } from "react-hook-form";

const FormContainer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='grid grid-cols-3 min-h-screen max-w-screen'>
                <div className=' col-span-2 bg-gradient-to-r from-[#443453] via-[#232323] to-[#252425]'>
                    <img src={bgImage} alt="bgimage" className='h-[58rem] mt-1 md:ml-24' />
                </div>
                <div className='absolute md:pl-[54rem]'>

                    <div className="bg-white p-8 shadow-lg shadow-gray-600 text-center rounded mt-8 md:h-[52rem] md:w-[40rem]">
                        <img
                            className="mx-auto md:mt-[3rem]"
                            src={logo}
                            alt="brandLogo"
                        />
                        <br />

                        <p className='text-3xl'>Explore The Best Tours... Hurry up!!</p>

                        <form onSubmit={handleSubmit(onSubmit)} className='px-8'>
                            <input
                                {...register('email', { required: true })}
                                className="border-2 border-solid border-black rounded my-8 w-full p-2"
                                type="email"
                                placeholder="Email Address"


                            />

                            {errors.email && (
                                <span className="text-red-500"> Email is required</span>
                            )}

                            <input
                                {...register('password', { required: true })}
                                className="border-2 border-solid border-black rounded my-2 w-full p-2"
                                type="password"
                                placeholder="Password"

                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    Password is required
                                </span>
                            )}

                            <small className="text-red-500 text-right block my-2">
                                Forgot Password?
                            </small>
                            <input
                                type="submit"
                                className="bg-[#3E489A] text-white  w-full py-2 rounded-lg cursor-pointer"
                                value="Login"
                            />

                        </form>

                        <div className='relative mt-6'>
                            <p>----------------- or -------------------</p>
                        </div>
                        <div>
                            <div className='flex gap-10 ml-6 md:ml-48 mt-8'>
                                <a href='https://www.google.com/' className='cursor-pointer'><img src={fb} alt="google" /></a>
                                <a href='https://www.google.com/' className='cursor-pointer'><img src={google} alt="google" /></a>
                            </div>

                            <p className="text-sm mt-10">
                                Don't have an account?{" "}
                                <button className="text-sky-500">
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FormContainer;