import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
        <span className='text-blue-500'>Chatapp</span>
        </h1>
        <form>
          {/* Email */}
          <div className='mb-4'>
            <label className='label p-2' htmlFor='username'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type='text'
              id='username'
              name='username'
              placeholder='Enter your email'
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
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Dont have a account?</a>
            <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>

            </div>
        </form>
        {/* Login Form */}
      </div>
    </div>
  )
}

export default Login


// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//         <span className='text-blue-500'>Chatapp</span>
//         </h1>
//         <form>
//           {/* Email */}
//           <div className='mb-4'>
//             <label className='label p-2' htmlFor='username'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               className='w-full input input-bordered h-10'
//               type='text'
//               id='username'
//               name='username'
//               placeholder='Enter your email'
//             />
//           </div>
//           <div className='mb-4'>
//             <label className='label p-2' htmlFor='password'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               className='w-full input input-bordered h-10'
//               type='password'
//               id='password'
//               name='password'
//               placeholder='Enter password'
//             />
//           </div>
//             <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Dont have a account?</a>
//             <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>

//             </div>
//         </form>
//         {/* Login Form */}
//       </div>
//     </div>
//   )
// }

// export default Login