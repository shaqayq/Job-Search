import { createAction, createReducer , createAsyncThunk} from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import jobsReducer from "./jobsReducer";

const BASE_URL= 'jobs/'
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';
const GET_JOB = createAction('job/Search')

const initState =[];

const searchReducer = createReducer(initState  , (builder) => {
    builder
        .addCase(`${GET_JOB}/fulfilled` , (state , action)=>{
        return action.payload
    })
    .addDefaultCase((state , action)=> {return state})
})

// export const fetch_job = createAsyncThunk(GET_JOB , async(data)=>{
   
//     const {title , source_url ,location_search,remote, company_employees, employment_type } = data;
 
//     const request_body ={
//         search: title ,
//         source: source_url,
//         location: location_search,
//         remote,
//         company_num_employees: company_employees,
//         employment_type
//     }

//     const search_data = await fetch(BASE_URL , {
//         method:'GET',
//         headers: {
//             Authorization: AUTH,
          
//           },
//           body: JSON.stringify(request_body)      
//     })

//     const response = await response.json(search_data);
//     console.log(response);

   
// })
export const fetch_job = createAsyncThunk(GET_JOB, async (data) => {
    const { title, source_url, location_search, remote, company_employees, employment_type } = data;
  
    const queryParams = new URLSearchParams({
      search: title,
      source: source_url,
      location: location_search,
      remote,
      company_num_employees: company_employees,
      employment_type,
    });
  
    const url = `${BASE_URL}?${queryParams}`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: AUTH,
      },
    });
  
    const search_data = await response.json();
    console.log(search_data);
  });

export default searchReducer