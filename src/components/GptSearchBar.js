import { useDispatch, useSelector } from "react-redux";
import lang, { API_OPTIONS } from "../common/constants";
import { useRef } from "react";
import openai from "../common/openai";
import { addGptMovieResults } from "../common/gptSlice";

const GptSearchBar=()=>{
    const dispatch=useDispatch();
    const langKey=useSelector(store=>store.config.lang);
   const searchtext=useRef(null);
   //movie search from tmdb
   const searchMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json= await data.json();
    return json.results;

   }

    const handleGptSearchClick= async()=>{
        console.log(searchtext.current.value);
        const gptQuery="act as a movie recommendation system and suggest some movies"+searchtext.current.value+".just give me ten  movies name and give examples separated by , for ex: Hanuman,Uddan , idiots";
        //here i will make openai api call to get movie informations
        const gptSearchResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          if(!gptSearchResults.choices){
            // error handling
          }
          console.log(gptSearchResults.choices?.[0]?.message?.content);
          const gptMovies=gptSearchResults.choices[0]?.message?.content.split(","); // this split function will return an array of movies list
        console.log(gptMovies);
          const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));
        const tmdbResults=await Promise.all(promiseArray);
        console.log(tmdbResults);
        // dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
        dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
        

    }
    return(
        <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className=" w-full bg-black md:w-1/3 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchtext} className="m-4 p-4 rounded-lg col-span-8" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button  onClick={handleGptSearchClick}className="m-4 p-4 bg-red-500 rounded-lg col-span-4">{lang[langKey].search}</button>
            </form>
        </div>
    )
};
export default GptSearchBar;