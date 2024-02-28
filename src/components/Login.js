import { useRef, useState } from "react";
import Header from "./Header";
import { validData } from "../common/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";
import { netflix_bg } from "../common/constants";

const Login=()=>{
    const[isSignIn,setSignInForm]=useState(true);
    const[errorMsg,setErrorMsg]=useState(null);
    
    const email=useRef(null);
    const password=useRef(null);
    
    const clickButton=()=>{
        //validate form 
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message=validData(email.current.value,password.current.value);
        setErrorMsg(message);
        if(message) return;
        
        //sign up/sign in logic
        if(!isSignIn){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                // console.log(user);
             
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
            });
            
            
        }else{
            //sign in
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                //console.log(user);
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
            });
            
        }
        
        
        
    }
    const toggleSignInForm=()=>{
        setSignInForm(!isSignIn);

    }
        return(
        <div>
            <Header/>
            <div className="absolute ">
            <img className="h-screen object-cover md:h-full " src={netflix_bg} alt="logo"/>
            </div>
            
            <form onSubmit={(e)=>e.preventDefault()}className=" w-full absolute bg-black md:w-3/12  p-10  my-40 mx-auto left-0 right-0 text-white bg-opacity-80 cursor-pointer">
                <h1 className="font-bold text-xl md:text-3xl m-3 p-3">{isSignIn? "Sign In":"Sign Up"}</h1>
                {
                  !isSignIn && <input type="text" placeholder="enter full name here" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"  />
                }
                
                <input ref={email} type="email" placeholder="enter email or phone number" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"/>
                <p className="text-red-500 mx-2 px-2">{errorMsg}</p>
                <input  ref={password} type="password" placeholder="enter password" className="m-3 p-4 w-full rounded-md bg-gray-700 border-white bg-opacity-60"  />
                <p className="text-red-500 mx-2 px-2">{errorMsg}</p>
                <button  onClick={clickButton}className=" relative  m-3 my-5 p-4 bg-red-600 w-full rounded-md hover:bg-red-900">{isSignIn? "Sign In":"Sign Up"}</button>
                <p className=" m-2 p-2 md:m-3 md:p-4" onClick={toggleSignInForm}>{isSignIn? "New To Netflix? Sign up Now":"Already Registerd? Sign In Now"}</p>

            </form>
        </div>
    )
};
export default Login;