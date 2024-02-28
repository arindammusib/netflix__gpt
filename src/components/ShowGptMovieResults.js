import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ShowGptMovieResults=()=>{
    const{movieNames,movieResults}=useSelector((store)=>store.gpt);
    if(!movieNames) return null;
    return(
        <div className="m-4 p-4 bg-black text-white bg-opacity-50">
         <div>
            {movieNames.map((movieName,index)=><MovieList  key={movieName} title={movieName} movies={movieResults[index]}/>)};
             {/* {<MovieList title={movieNames[0]} movies={movieResults[0]} />} */}
         </div>
        </div>
    );
};
export default ShowGptMovieResults;