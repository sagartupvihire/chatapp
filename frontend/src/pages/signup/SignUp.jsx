import React, { useState } from 'react'
import GenderCheckbox from './GendeCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    comfirmPassword: '',
    gender: '',
    
  });

  const {loading, signup} = useSignup();


  const handleCheckBoxChange =  (gender) => {
    setInputs({...inputs, gender });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
 
    await signup(inputs);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-500'> Chatapp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullname: e.target.value })}
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
              value={inputs.username}

              onChange={(e) => setInputs({...inputs, username: e.target.value })}
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
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value })}
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
              name='comfirmPassword'
              placeholder='comfirm password'
              value={inputs.comfirmPassword}
              onChange={(e) => setInputs({...inputs, comfirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>a
            <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have a account?</Link>
            <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>

            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp