import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse=()=>{
    useNowPlayingMovies();
    
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
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