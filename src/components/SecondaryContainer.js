import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return movies.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className=" mt-0 md:-mt-30  relative z-20 pl-4 md:pl-10">
        <MovieList title={"Now Playing>"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular>"} movies={movies.popularMovies}/>
        <MovieList title={"Top rated>"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming>"} movies={movies.upComingMovies}/>
        
           </div>
        
        </div>
    )
     

};
export default SecondaryContainer;