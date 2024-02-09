import { useState } from "react";
import Header from "./Header";
const Login=()=>{
    const[isSignIn,setSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setSignInForm(!isSignIn);

    }
    return(
        <div>
            <Header/>
            <div className="absolute ">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
            </div>
            
            <form className="absolute bg-black w-3/12  p-10  my-40 mx-auto left-0 right-0 text-white bg-opacity-80 cursor-pointer">
                <h1 className="font-bold text-3xl m-3 p-3">{isSignIn? "Sign In":"Sign Up"}</h1>
                {
                  !isSignIn && <input type="text" placeholder="enter full name here" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"  />
                }
                <input type="email" placeholder="enter email or phone number" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"/>
                <input type="password" placeholder="enter password" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"  />
                <button className=" relative  m-3 my-5 p-4 bg-red-600 w-full rounded-md hover:bg-red-900">{isSignIn? "Sign In":"Sign Up"}</button>
                <p className="m-3 p-4" onClick={toggleSignInForm}>{isSignIn? "New To Netflix? Sign up Now":"Already Registerd? Sign In Now"}</p>

            </form>
        </div>
    )
};
export default Login;