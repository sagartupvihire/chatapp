import React from 'react'
import GenderCheckbox from './GendeCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-500'> Chatapp</span>
        </h1>
        <form>
          {/* Email */}
          <div className='mb-4'>
            <label className='label p-2' htmlFor='fullname'>
              <span className='text-base label-text'>fullname</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type='text'
              id='fullname'
              name='fullname'
              placeholder='Enter your fullname'
            />
          </div>
          <div className='mb-4'>
            <label className='label p-2' htmlFor='username'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
            />
          </div>
          <div className='mb-4'>
            <label className='label p-2' htmlFor='password'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type='password'
              id='password'
              name='password'
              placeholder='Enter password'
            />
          </div>
          <div className='mb-4'>
            <label className='label p-2' htmlFor='password'>
              <span className='text-base label-text'>Comfirm Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type='password'
              id='comfirm password'
              name='comfirm password'
              placeholder='comfirm password'
            />
          </div>
          <GenderCheckbox/>
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have a account?</a>
            <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>

            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp