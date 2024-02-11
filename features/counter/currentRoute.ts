import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface currentRouteType {
    routeName:string,
}
const initialState:currentRouteType = {
    routeName:"home"
}

export const currentRoute = createSlice({
    name:"currentRouteName",
    initialState,
    reducers:{
        changeCurrentRouteName:(state,action:PayloadAction<string>)=>{
            state.routeName = action.payload
        }
    }
})

export const {changeCurrentRouteName} = currentRoute.actions

export default currentRoute.reducer