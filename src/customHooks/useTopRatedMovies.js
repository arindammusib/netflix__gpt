import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../common/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../common/moviesSlice";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const topRatedMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(()=>{
        topRatedMovies();


    },[]);
    

}
export default useTopRatedMovies;