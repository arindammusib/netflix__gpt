import { useNavigate } from "react-router-dom";
import { auth } from "../common/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../common/userSlice";
import lang, { SUPPORTED_LANGS, logo, user_icon } from "../common/constants";
import { toggleGptSearch } from "../common/gptSlice";
import { changeLangauge } from "../common/configSlice";

const Header=()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const handleGptSearch=()=>{
      //toggle search functionality
      dispatch(toggleGptSearch());

    }

    //toggle langauge functionality
    const handleLanguageHandler=(e)=>{
      dispatch(changeLangauge(e.target.value));

    }
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
                <select onChange={handleLanguageHandler}className="m-2 p-2 bg-gray-600 text-white">
                  {SUPPORTED_LANGS.map((lang)=>(
                    <option key={lang.identifier} value={lang.identifier} >
                      {lang.name} 
                    </option>
                  ))}
                  
                </select>
              <button onClick={handleGptSearch}className="text-white bg-orange-400 rounded-lg px-4 py-2 mx-4">Search Movies</button>
                <img className="w-10 h-10 "src={user_icon} alt="user-icon"/>
            <button onClick={signOutHandler}className="w-10 h-10 text-white">Sign Out</button>
            </div>
            )}

        </div>
        
    )
}
export default Header;