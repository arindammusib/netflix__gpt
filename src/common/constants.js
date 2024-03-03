export const logo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const user_icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU";
export const netflix_bg="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const lang={
  english:{
    search:"search",
    gptSearchPlaceholder:"what would you like to watch today",
  },
  hindi:{
    search:"खोज",
    gptSearchPlaceholder:"आज आप क्या देखना चाहेंगे"

  },
  bengali:{
    search:"অনুসন্ধান",
    gptSearchPlaceholder:"আপনি আজ কি দেখতে চান"
  }


};
export const SUPPORTED_LANGS=[
  {identifier:"english",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"bengali",name:"Bengali"},
];

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTlkZTA5MmJkYTk3YTgxNWE4ODQ2ODlhMGM3Yjg3MyIsInN1YiI6IjY1ZTQyMTBiOTk3OWQyMDE3Y2IxZGMzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GiNdaZmmt90JguTHAZIg462y4jtduyyl3ItVkcIQ1l0"
    },
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";
  export default lang;
  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;
  