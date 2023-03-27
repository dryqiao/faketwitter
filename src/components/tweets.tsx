import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { RootState } from '@/store'
import Tweet from '@/components/tweet'
import styles from '@/pages/index.module.less'

const Tweets = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { currentUser, tweets, showLength } = useSelector(
    ({ user, tweet }: RootState) => ({
      currentUser: user.currentUser,
      tweets: tweet.tweets,
      showLength: tweet.showLength,
    })
  )
  const handleScroll = () => {
    if (!wrapperRef.current) return
    const { scrollHeight, clientHeight, scrollTop } = wrapperRef.current
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch({
        type: 'tweet/addShowLength',
      })
    }
  }
  const handleScrollDebounced = debounce(handleScroll, 300)

  return (
    <div
      className={styles.tweetsWrapper}
      ref={wrapperRef}
      id='scrollableDiv'
      onScroll={handleScrollDebounced}
    >
      {tweets.slice(0, showLength).map((tweet) => (
        <div
          key={tweet.id}
          onClick={() => {
            navigate(`/tweet/${tweet.id}`)
          }}
        >
          <Tweet tweet={tweet}></Tweet>
        </div>
      ))}
      {showLength === tweets.length && <div>It is all, nothing more 🤐</div>}
    </div>
  )
}
export default Tweets
