import { netflix_bg } from "../common/constants";
import GptSearchBar from "./GptSearchBar";
import ShowGptMovieResults from "./ShowGptMovieResults";


const GptSearch=()=>{
    return(
            <><div className="fixed -z-10 ">
            <img  className="h-screen object-cover md:h-full"src={netflix_bg} alt="logo"/>
            </div>
        <div className="">
            <GptSearchBar/>
            <ShowGptMovieResults/>
            
           
            
            
        </div>
        </>
    )

};
export default GptSearch;