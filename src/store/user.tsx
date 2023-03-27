import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockUsers } from '@/assets/mockData'
import {
  LS_FAKE_TWITTER_USERS,
  LS_FAKE_TWITTER_CURRENT_USER,
} from '@/assets/constant'
interface UserType {
  username: string
  password: string
}
interface UserStateType {
  currentUser: string
  users: UserType[]
}
const initialState: UserStateType = {
  currentUser: localStorage.getItem(LS_FAKE_TWITTER_CURRENT_USER) || '',
  users: mockUsers,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { username, password } = action.payload
      if (state.users.find((user) => user.username === username)) {
        window.alert('User already exists')
        return
      }
      state.users.push({ username, password })
      localStorage.setItem(LS_FAKE_TWITTER_USERS, JSON.stringify(state.users))
      state.currentUser = username
      localStorage.setItem(LS_FAKE_TWITTER_CURRENT_USER, username)
    },
    login: (state, action) => {
      const { username, password } = action.payload
      const user = state.users.find((user) => user.username === username)
      if (!user) {
        window.alert('User not found')
        return
      }
      if (user.password !== password) {
        window.alert('Incorrect password')
        return
      }
      state.currentUser = username
      localStorage.setItem(LS_FAKE_TWITTER_CURRENT_USER, username)
    },
    logout: (state) => {
      state.currentUser = ''
      localStorage.setItem(LS_FAKE_TWITTER_CURRENT_USER, '')
    },
  },
})

export default userSlice.reducer
