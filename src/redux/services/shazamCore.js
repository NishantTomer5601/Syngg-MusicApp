import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '5eacf2dd5cmshd3784e25adc27ffp12df17jsn456b937fb2b1',
//     'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//   }
// };

// fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  export const  shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl:'https://shazam-core7.p.rapidapi.com',
      prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key','5eacf2dd5cmshd3784e25adc27ffp12df17jsn456b937fb2b1');
        return headers;
      },
    }),
    endpoints:(builder)=>({
      getTopCharts:builder.query({query:()=>'/charts/get-top-songs-in-world'}),
    }),
  });

  export const {
    useGetTopChartsQuery,
  }=shazamCoreApi;

   