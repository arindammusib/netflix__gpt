import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../common/constants";
import { addNowPlayingMovies } from "../common/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
   
        //fetch data from tmdb api and update sore
    const dispatch=useDispatch();
    const nowPlayingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=>{
        nowPlayingMovies();


    },[]);

    
};
export default useNowPlayingMovies;