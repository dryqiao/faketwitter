import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '@/store'
import Tweet from '@/components/tweet'
import styles from './index.module.less'
import tweet from '@/store/tweet'

const Detail = () => {
  const { currentUser, tweets } = useSelector(({ user, tweet }: RootState) => ({
    currentUser: user.currentUser,
    tweets: tweet.tweets,
  }))
  const [isEdit, setIsEdit] = useState(false)
  const params = useParams()
  const tweetId = Number(params.id)
  const currentTweet = tweets.find((tweet) => tweet.id === tweetId)
  const [content, setContent] = useState(currentTweet?.content)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlerSave = () => {
    if (!currentTweet) return
    if (isEdit) {
      dispatch({
        type: 'tweet/updateTweet',
        payload: {
          id: currentTweet.id,
          content: content,
        },
      })
      navigate('/home')
    } else {
      setIsEdit(!isEdit)
    }
  }
  const handlerDelete = () => {
    if (!currentTweet) return
    dispatch({
      type: 'tweet/deleteTweet',
      payload: {
        id: currentTweet.id,
      },
    })
    navigate('/')
  }
  return currentTweet ? (
    <div className={styles.detailWrapper}>
      {isEdit ? (
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
          rows={4}
          className={styles.textarea}
        ></textarea>
      ) : (
        <Tweet tweet={currentTweet} />
      )}
      {currentUser === currentTweet.owner && (
        <>
          <button
            onClick={() => {
              handlerSave()
            }}
          >
            {isEdit ? 'save' : 'edit'}
          </button>
          {!isEdit && (
            <button
              onClick={() => {
                handlerDelete()
              }}
            >
              delete
            </button>
          )}
        </>
      )}
    </div>
  ) : (
    <div>404</div>
  )
}
export default Detail
