import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="form-inner justify-center flex">
        <form className='my-14 flex flex-col max-w-[450px] min-h-48 bg-black bg-opacity-70 text-white p-20 w-full'>
          <h1 className='text-3xl font-bold mb-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && 
            <div>
            <input type="text" className="w-full p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg" 
          placeholder='Full Name'/>
          <input type="text" className="w-full p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg" 
          placeholder='Mobile Number'/>
          </div>
          }
          <input type="text" className="p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg" 
          placeholder='Email Address'/>
          <input type="password" className="p-2 my-2 bg-gray-800 border border-white rounded-lg" 
          placeholder='Password'/>
          <button className='my-2 p-2 bg-red-700 rounded-lg' 
          onClick={toggleSignInForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='my-2 p-2' 
          onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login
