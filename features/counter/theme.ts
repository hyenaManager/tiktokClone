import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
    theme: "white"|"black"
  }
  
  // Define the initial state using that type
const initialState: CounterState = {
    theme: "black",
  }

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
            state.theme = action.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer