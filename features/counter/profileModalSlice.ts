import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
    status: { profile:boolean,newChat:boolean,switchAccount:boolean}
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    status: {profile:false,newChat:false,switchAccount:false}
  }

export const profileModalSlice = createSlice({
    name:"profileModal",
    initialState,
    reducers:{
        changeProfileModalStatus:(state)=>{
            state.status.profile = !state.status.profile
        },
        changeNewChatModalStatus:(state)=>{
          state.status.newChat = !state.status.newChat
      },
      changeSwitchAccModalStatus:(state)=>{
        state.status.switchAccount = !state.status.switchAccount
    }
    }
})

export const {changeProfileModalStatus,changeNewChatModalStatus,changeSwitchAccModalStatus} = profileModalSlice.actions
export const showProfileModal = (state: RootState) => state.comment.status

export default profileModalSlice.reducer