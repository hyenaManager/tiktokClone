import { configureStore } from '@reduxjs/toolkit'
import commentReducer from "./features/counter/commentSlice"
import currentRouteReducer from "./features/counter/currentRoute"
import headerRouteNameReducer from "./features/counter/headerNavRoute"
import themeReducer from "./features/counter/theme"
import profileModalReducer from "./features/counter/profileModalSlice"
import currentVideoReducer from "./features/counter/currentVideoIndex"
const store =  configureStore({
  reducer: {
    comment:commentReducer,
    currentRouteName:currentRouteReducer,
    headerRouteName:headerRouteNameReducer,
    theme:themeReducer,
    profileModal:profileModalReducer,
    playingVideo:currentVideoReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store