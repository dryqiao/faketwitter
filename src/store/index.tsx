import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './tweet'
import userReducer from './user'

const Store = configureStore({
  reducer: { tweet: tweetReducer, user: userReducer },
})
export default Store
export type RootState = ReturnType<typeof Store.getState>
