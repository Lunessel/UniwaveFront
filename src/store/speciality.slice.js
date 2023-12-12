import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSpecialitiesData, specialityService} from "../services";


export const getSpecialityDataByNameOfSpec = createAsyncThunk(
    'specialitySlice/getWeatherData',
    async (arg)=>{
        try {
            return await specialityService.getSpecialitiesData(arg.name_of_spec);
        }
        catch (e) {
            console.log(e)
        }
    }
)


const specialitySlice = createSlice( {
    name:'specialitySlice',
    initialState: {
        specialities:[],
        status: null,
        error: null
    },
    reducers:{},
    extraReducers: {
        [getSpecialityDataByNameOfSpec.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [getSpecialityDataByNameOfSpec.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.specialities = action.payload['data']['result']
        },
        [getSpecialityDataByNameOfSpec.rejected]: (state, action) =>{
            state.status = 'rejected'
    
        }
    }
})



const specialityReducer = specialitySlice.reducer

// export const {} = weatherSlice.actions //this is for reducers

export default specialityReducer