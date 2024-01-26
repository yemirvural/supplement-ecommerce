import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { openSlidingCart } from '../../features/cart/slidingCart';

function Header() {
  const dispatch = useDispatch();

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            <img src="/logo.png" alt="" />
          </a>
          <form className={styles.searchBar}>
            <input placeholder='please type a product name' type="text" />
            <button className={styles.searchButton}>SEARCH</button>
          </form>
          <div className={styles.userInteraction}>
            <div className={styles.account}>Acc</div>
            <Link onClick={() => dispatch(openSlidingCart())
            } className={styles.cart}>
              <div>Cart</div>
              <span className={styles.cartCount}>4</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header