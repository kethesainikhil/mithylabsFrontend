import React, { useDebugValue } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUserAsync } from '../features/AddUserSlice'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const dispatch = useDispatch();
      const onSubmit = (data) => {
          dispatch(addUserAsync(data));
      }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                    {...register("name")}
                        type="text"
                        className="block border border-grey-200 w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Enter Your Name" />

                    <input 
                        type="text"
                        {...register("email")}
                        className="block border border-grey-200 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        {...register("password")}
                        type="password"
                        className="block border border-gray-200 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />


                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
  )
}

export default Signup