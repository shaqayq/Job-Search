import { createAction, createReducer , createAsyncThunk} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const BASE_URL= 'jobs/'
const AUTH = 'Token 289c5f4b2621c0db7ea969f39da94109abb756ad';
const GET_JOB = createAction('job/Search')

const initState =[];

export const fetch_job = createAsyncThunk(GET_JOB , async(data)=>{

    const {title , source_url ,location_search,remote, company_employees, employment_type } = data;
    const request_body ={
        search: title ,
        source: source_url,
        location: location_search,
        remote,
        company_num_employees: company_employees,
        employment_type
    }

    const response = await fetch(BASE_URL , {
        headers: {
            Authorization: AUTH,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request_body)
          
    })

    console.log(response);
})


