import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
    status: boolean
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    status: false,
  }

export const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
        changeStatus:(state)=>{
            state.status = !state.status
        }
    }
})

export const {changeStatus} = commentSlice.actions
export const showComment = (state: RootState) => state.comment.status

export default commentSlice.reducer