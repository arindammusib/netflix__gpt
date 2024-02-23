import { netflix_bg } from "../common/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return(
        <div>
            <div className="absolute -z-10 ">
            <img src={netflix_bg} alt="logo"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
            
            
        </div>
    )

};
export default GptSearch;