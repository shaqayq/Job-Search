import {configureStore} from '@reduxjs/toolkit'
import jobsReducer from './jobsReducer'

const store = configureStore({
    reducer: {
        jobs : jobsReducer
    }
})

export default store