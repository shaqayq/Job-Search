import { createAction, createReducer , createAsyncThunk} from "@reduxjs/toolkit";



const BASE_URL= '/api/jobs/'
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';
const GET_JOB = createAction('job/Search')

const initState = {
    delay: '',
    data:[]
  }
;

const searchReducer = createReducer(initState  , (builder) => {
    builder
        .addCase(`${GET_JOB}/fulfilled` , (state , action)=>{
        return {
          ...state,
          data: action.payload,
          delay:false
        };
    })
    .addCase(`${GET_JOB}/pending`, (state , action)=>{
        return {...state , delay: true}
    })
    .addDefaultCase((state , action)=> {return state})
})


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
    
    return search_data.results
  });

export default searchReducer