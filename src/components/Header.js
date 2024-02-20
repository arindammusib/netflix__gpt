import { useNavigate } from "react-router-dom";
import { auth } from "../common/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../common/userSlice";
import { logo, user_icon } from "../common/constants";

const Header=()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const signOutHandler=()=>{
        signOut(auth).then(() => {
            // Sign-out 
            navigate("/")

          }).catch((error) => {
            navigate("/error");
           
          });
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName}= user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName}));
         navigate("/browse");
        
        } else {
          // User is signed out
         dispatch(removeUser());
         navigate("/");
         
        }
      });
      //unsubsribe when component unmounts
      return ()=>unSubscribe();

    },[]);
    return(
        <div className="absolute bg-gradient-to-b from-black z-10 px-9 py-3 w-full flex justify-between">
            <img className="w-44"src={logo} alt="logo"/>
            {user && (
            <div className="flex py-4">
                <img className="w-10 h-10 "src={user_icon} alt="user-icon"/>
            <button onClick={signOutHandler}className="w-10 h-10 text-white">Sign Out</button>
            </div>
            )}

        </div>
        
    )
}
export default Header;