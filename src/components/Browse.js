import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse=()=>{
    const showGptSearchView=useSelector(store=>store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    
    return(
        <div>
            <Header/>
            {
                showGptSearchView?(<GptSearch/>):(<><MainContainer/>
                <SecondaryContainer/></>)
            }
          
            
            {
                /*
                main video container
                  - videobackgroud
                  - video title
                secondary movie container
                  - movielist*n
                    - moviecards*n
                */
            }
        </div>
    )
};
export default Browse;