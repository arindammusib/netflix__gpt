import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../common/constants";
import { addPopularMovies } from "../common/moviesSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
        popularMovies();


    },[]);
    
}
export default usePopularMovies;