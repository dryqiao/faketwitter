import { TweetType } from '@/store/tweet'
import styles from '@/pages/index.module.less'

const Tweet = ({ tweet }: { tweet: TweetType }) => {
  return (
    <div className={styles.tweetWrapper}>
      <div className={styles.tweetHeader}>
        <div className={styles.icon}>
          <img src={tweet.icon} alt="" />
        </div>
        <div className={styles.owner}>{tweet.owner}</div>
      </div>
      <div className={styles.tweetBody}>
        <div className={styles.content}>{tweet.content}</div>
        <div className={styles.info}>
          <span>{tweet.createdTime}</span>
          <span>
            <strong> 21k </strong>Views
          </span>
        </div>
      </div>
    </div>
  )
}
export default Tweet
