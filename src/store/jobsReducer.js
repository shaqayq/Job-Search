import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = 'jobs/';
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';

const GET_DATA = 'GET_DATA';

const initState = {
  data:[],
  delay:''
};

const jobsReducer = (state = initState, action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return {...state , 
          data: action.payload,
          delay: false
      } ;
      case `${GET_DATA}/pending`:
        return {
          ...state,
          delay:true
        };
    default:
      return state;
  }
};


export const fetchJobs = createAsyncThunk(GET_DATA, async () => {


    const response = await fetch(URL,{
      headers: {
        Authorization: AUTH,
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

   
    const jsonRespone = await response.json();
    
   return jsonRespone.results;

  
});

export default jobsReducer;
