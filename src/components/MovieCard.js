import { IMG_CDN_URL } from "../common/constants";

const MovieCard=({posterPath})=>{
    return(
        <div className="w-40 pr-3">
           <img  src={IMG_CDN_URL+posterPath} alt="poster"/>

        </div>
    )
};
export default MovieCard;