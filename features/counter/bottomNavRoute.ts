import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BottomNavtype {
    routeName:"home"|"friend"|"inbox"|"profile",
}
const initialState:BottomNavtype = {
    routeName:"home"
}

export const bottomNavRoute = createSlice({
    name:"bottomRouteName",
    initialState,
    reducers:{
        changeBottomRouteName:(state,action:PayloadAction<"home"|"friend"|"inbox"|"profile">)=>{
            state.routeName = action.payload
        }
    }
})

export const {changeBottomRouteName} = bottomNavRoute.actions

export default bottomNavRoute.reducer