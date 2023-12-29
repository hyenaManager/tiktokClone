import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface BottomNavtype {
    routeName:"home"|"friend",
}
const initialState:BottomNavtype = {
    routeName:"home"
}

export const bottomNavRoute = createSlice({
    name:"bottomRouteName",
    initialState,
    reducers:{
        changeBottomRouteName:(state,action:PayloadAction<"home"|"friend">)=>{
            state.routeName = action.payload
        }
    }
})

export const {changeBottomRouteName} = bottomNavRoute.actions

export default bottomNavRoute.reducer