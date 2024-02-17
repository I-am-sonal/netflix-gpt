import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);

    setErrorMessage(message);
    if (message) return; // if we have any error message then stop here

    // SignIn SignUp logic

    if (!isSignInForm) {
      //Sign Up logic here

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // for displayname and photoURL, we have taken data from updated user
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic here

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
                ref={name}
                type="text"
                className="w-full p-2 my-2 bg-gray-800 bg-transparent border border-white rounded-lg"
                placeholder="Full Name"
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
