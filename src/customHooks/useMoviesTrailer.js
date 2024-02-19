import { useEffect } from "react";
import { API_OPTIONS } from "../common/constants";
import { addMoviesTrailer } from "../common/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMoviesTrailer=(movieId)=>{
    //const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    const dispatch=useDispatch();
    const getMoviesVideos=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US",API_OPTIONS);
        const json=await data.json();
        console.log(json);
        const filterData=json.results.filter((video)=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        console.log(trailer);
        dispatch(addMoviesTrailer(trailer));
        
    }
    useEffect(()=>{
        getMoviesVideos();
    },[]);
};
export default useMoviesTrailer;