import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null,
        movieResults:null,

    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch=!state.showGptSearch;

        },
        addGptMovieResults:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
            // state.gptMovies=action.payload
        }
    }

});
export const {toggleGptSearch,addGptMovieResults}=gptSlice.actions; 
export default gptSlice.reducer;
