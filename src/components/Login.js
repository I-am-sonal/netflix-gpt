import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    const message = checkValidData(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    console.log(fullName.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="form-inner justify-center flex">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="my-14 flex flex-col max-w-[450px] min-h-48 bg-black bg-opacity-70 text-white p-20 w-full"
        >
          <h1 className="text-3xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div>
              <input
                ref={fullName}
                type="text"
                className="w-full p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="w-full p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg"
                placeholder="Mobile Number"
              />
            </div>
          )}
          <input
            ref={email}
            type="text"
            className="p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg"
            placeholder="Email Address"
          />
          <input
            ref={password}
            type="password"
            className="p-2 my-2 bg-gray-800 border border-white rounded-lg"
            placeholder="Password"
          />
          <p className="text-red-600 text-sm">{errorMessage}</p>
          <button
            className="my-2 p-2 bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-2 p-2" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
