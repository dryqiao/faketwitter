import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '@/store'
import Tweets from '@/components/tweets'
import Theme from '@/components/theme'
import Footer from '@/components/footer'
import Detail from './detail'
import styles from './index.module.less'

const Index = () => {
  const { currentUser, tweets } = useSelector(({ user, tweet }: RootState) => ({
    currentUser: user.currentUser,
    tweets: tweet.tweets,
  }))
  const dispatch = useDispatch()
  const params = useParams()
  const tweetId = Number(params.id)

  return (
    <div className={styles.wrapper}>
      {currentUser && (
        <header>
          <div className={styles.userInfo}>
            <span className={styles.avatar}></span>
            <span className={styles.username}>{currentUser}</span>
          </div>
          <Theme />
          {currentUser && (
            <button
              onClick={() => {
                dispatch({
                  type: 'user/logout',
                })
              }}
            >
              logout
            </button>
          )}
        </header>
      )}
      {tweetId || tweetId === 0 ? <Detail /> : <Tweets />}
      <Footer />
    </div>
  )
}
export default Index
