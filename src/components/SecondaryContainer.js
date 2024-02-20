import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return movies.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className="-mt-30 relative z-30 pl-12">
        <MovieList title={"Now Playing>"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular>"} movies={movies.popularMovies}/>
        <MovieList title={"Top rated>"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming>"} movies={movies.upComingMovies}/>
        
           </div>
        
        </div>
    )
     

};
export default SecondaryContainer;