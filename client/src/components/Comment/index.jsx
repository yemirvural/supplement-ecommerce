import { star } from '../../utils/starUtils'
import styles from './styles.module.css'
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.rate}>
            <span className={styles.star}>{star(comment.star)}</span>
            <span className={styles.date}>{comment.date}</span>
          </div>
          <h4 className={styles.title}>{comment.title}</h4>
        </div>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={comment.product_image} alt="" />
            <span className={styles.name}>{comment.product_name}</span>
          </div>
          <div className={styles.comment_wrapper}>
            <div className={styles.comment_desc}>{comment.desc}</div>
            <div className={styles.commentator}>{comment.commentator}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    star: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    commentator: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment