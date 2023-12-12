import {configureStore} from "@reduxjs/toolkit";

import specialityReducer from "./speciality.slice";


const store = configureStore( {
    reducer: {
        specialityReducer
    }
})

export default store