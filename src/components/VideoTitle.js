const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[20%] px-6 md:px-14 absolute text-white bg-gradient-to-r from-black aspect-video w-screen">
            <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
            <p className=" hidden md:inline-block text-lg w-1/4 py-4">{overview}</p>
            <div className="my-4 md:m-0">
                <button className="bg-white text-lg  px-2 py-1 md:py-3 md:px-10 text-black rounded-lg mx-1 hover:bg-gray-400">▶Play</button>
                <button className="bg-gray-500 py-3 px-10 text-white rounded-lg mx-2 bg-opacity-35 hover:bg-gray-700 hidden md:inline-block">ℹMore Info</button>
            </div>
        </div>
        
    );
};
export default VideoTitle;

//
//