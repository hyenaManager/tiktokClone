import { configureStore } from '@reduxjs/toolkit'
import commentReducer from "./features/counter/commentSlice"
import bottomRouteNameReducer from "./features/counter/bottomNavRoute"
import headerRouteNameReducer from "./features/counter/headerNavRoute"
const store =  configureStore({
  reducer: {
    comment:commentReducer,
    bottomRouteName:bottomRouteNameReducer,
    headerRouteName:headerRouteNameReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store