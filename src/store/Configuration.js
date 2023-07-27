import {configureStore} from '@reduxjs/toolkit'
import jobsReducer from './jobsReducer'
import searchReducer from './searchReducer'
const store = configureStore({
    reducer: {
        jobs : jobsReducer,
        result : searchReducer
    }
})

export default store