import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import styles from '@/pages/index.module.less'
import { useState } from 'react'

const Footer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isPost, setIsPost] = useState(false)
  const [content, setContent] = useState('')
  const { currentUser } = useSelector(({ user }: RootState) => ({
    currentUser: user.currentUser,
  }))
  useEffect(() => {
    return () => {
      handlerCancel()
    }
  }, [])
  const handlerSave = () => {
    if (isPost) {
      dispatch({
        type: 'tweet/postTweet',
        payload: {
          content: content,
          owner: currentUser,
        },
      })
      handlerCancel()
      navigate('/home')
    }
  }
  const handlerCancel = () => {
    setContent('')
    setIsPost(false)
  }
  return (
    <div className={styles.footerWrapper}>
      {isPost && (
        <div className={styles.postWrapper}>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            rows={10}
            className={styles.textarea}
          ></textarea>
          <button onClick={handlerSave}>save</button>
          <button onClick={handlerCancel}>cancel</button>
        </div>
      )}
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Back To Home
      </button>
      {currentUser && (
        <button
          onClick={() => {
            setIsPost(true)
          }}
        >
          Post
        </button>
      )}
      {!currentUser && (
        <>
          <button
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate('/signup')
            }}
          >
            Signup
          </button>
        </>
      )}
    </div>
  )
}
export default Footer
