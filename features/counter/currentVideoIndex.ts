import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
    index: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    index: 0,
  }

export const currentVideoSlice = createSlice({
    name:"playingVideo",
    initialState,
    reducers:{
        changeIndex:(state,action)=>{
            state.index = action.payload
        }
    }
})

export const {changeIndex} = currentVideoSlice.actions

export default currentVideoSlice.reducer