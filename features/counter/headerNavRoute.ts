import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface HeaderNavType {
    routeName:"forYou"|"following",
}
const initialState:HeaderNavType = {
    routeName:"forYou"
}

export const headerNavRoute = createSlice({
    name:"headerRouteName",
    initialState,
    reducers:{
        changeHeaderRouteName:(state,action:PayloadAction<"forYou"|"following">)=>{
            state.routeName = action.payload
        }
    }
})

export const {changeHeaderRouteName} = headerNavRoute.actions

export default headerNavRoute.reducer