import styles from './styles.module.css'
import Comment from '../Comment'

function FeaturedComments() {
  return (
    <div>
      <div className={styles.products}>
        <h3>ÇOK SATANLAR</h3>
        <div className={styles.wrapper}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  )
}

export default FeaturedComments