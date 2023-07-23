import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = 'jobs/';
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';
const GET_DATA = 'GET_DATA';

const initState = [];

const jobsReducer = (state = initState, action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return  action.payload ;
    default:
      return state;
  }
};




export const fetchJobs = createAsyncThunk(GET_DATA, async () => {
  try {

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

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

export default jobsReducer;
