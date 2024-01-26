import styles from './styles.module.css'
import { star } from '../../utils/starUtils'

function ProductCard({ product }) {

  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={product.image} alt="product" />
        </div>
        <span className={styles.name}>{product.title}</span>
        <span className={styles.desc}>{product.subTitle}</span>
        <span className={styles.stars}>{star(product.rate)}</span>
        <span className={styles.comments}>{product.commentCount} Yorum</span>
        <span className={styles.price}>{product.price} TL</span>
      </div>
    </div>
  )
}

export default ProductCard