import { createSlice } from '@reduxjs/toolkit'
import { mockTweets } from '@/assets/mockData'
import { SHOW_LENGTH_INIT } from '@/assets/constant'

export interface TweetType {
  id: number
  owner: string
  createdTime: string
  content: string
  icon: string
}
interface TwitterStateType {
  tweets: TweetType[]
  showLength: number
}
// Define the initial state of the slice
const initialState: TwitterStateType = {
  tweets: mockTweets,
  showLength: SHOW_LENGTH_INIT,
}

// Create a slice of the store state and corresponding actions
const twitterSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    updateTweet: (state, action) => {
      const { id, content } = action.payload
      state.tweets.forEach((tweet) => {
        if (tweet.id === id) {
          tweet.content = content
        }
      })
    },
    postTweet: (state, action) => {
      const { owner, content } = action.payload
      state.tweets.unshift({
        id: state.tweets.length + 1, // tood
        owner,
        createdTime: new Date().toLocaleString(),
        content,
        icon: 'https://pbs.twimg.com/profile_images/1342086006149791750/Ar0drcXS_x96.jpg',
      })
    },
    deleteTweet: (state, action) => {
      const { id } = action.payload
      const index = state.tweets.findIndex((tweet) => tweet.id === id)
      if (index >= 0) {
        state.tweets.splice(index, 1)
      }
    },
    addShowLength: (state) => {
      state.showLength += 5
      if (state.showLength >= state.tweets.length) {
        state.showLength = state.tweets.length
      }
    },
    clearShowLength: (state) => {
      state.showLength = SHOW_LENGTH_INIT
    },
  },
})

export default twitterSlice.reducer
