import { useSelector } from "react-redux";
import lang from "../common/constants";

const GptSearchBar=()=>{
    const langKey=useSelector(store=>store.config.lang);
    return(
        <div className="pt-[8%] flex justify-center">
            <form className="m-5  bg-black w-1/3 grid grid-cols-12">
                <input className="m-4 p-4 rounded-lg col-span-8" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="m-4 p-4 bg-red-500 rounded-lg col-span-4">{lang[langKey].search}</button>
            </form>
        </div>
    )
};
export default GptSearchBar;