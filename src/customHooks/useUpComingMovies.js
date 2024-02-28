import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../common/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../common/moviesSlice";

const useUpComingMovies=()=>{
    const dispatch=useDispatch();
    const upComingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
       // console.log(json.results);
        dispatch(addUpComingMovies(json.results));
    };

    useEffect(()=>{
        upComingMovies();


    },[]);
};
export default useUpComingMovies;