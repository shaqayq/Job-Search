import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = '/api/jobs/';
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';

const GET_DATA = 'GET_DATA';
const SAVED = 'SAVED_JOB'
const UNSAVE = 'UNSAVE_JOB'
const initState = {
  data:[],
  delay:'',
  saved:[]
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
      
        case SAVED:
          const { id } = action;
          const itemToSave = state.data.find((item) => item.id === id);
          if (itemToSave) {
            return {
              ...state,
              saved: [...state.saved, itemToSave],
            };
          }
          return state;

        case UNSAVE:
          const remove_job =state.data.map(item => {
            if(item.id === action.id){
              return {...item, saved: false}
            }
            return item;
          })
          return {
            ...state,
            data: remove_job
          }
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

export const saveJob = (id) =>({
  type: SAVED,
  id
})

export const unsaveJob = (id) => ({
  type: UNSAVE,
  id
})

export default jobsReducer;
