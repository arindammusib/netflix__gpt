const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black aspect-video w-screen">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg w-1/4 py-4">{overview}</p>
            <div>
                <button className="bg-white text-lg py-3 px-10 text-black rounded-lg mx-1 hover:bg-gray-400">▶Play</button>
                <button className="bg-gray-500 py-3 px-10 text-white rounded-lg mx-2 bg-opacity-35 hover:bg-gray-700">ℹMore Info</button>
            </div>
        </div>
        
    );
};
export default VideoTitle;

//
//