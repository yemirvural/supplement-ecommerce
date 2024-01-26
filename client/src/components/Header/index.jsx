import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openSlidingCart } from '../../features/cart/slidingCart';
import { BsCart3 } from "react-icons/bs";

function Header() {
  const dispatch = useDispatch();
  const productQuantity = useSelector((state) => state.cartData.productQuantity);


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
              <div className={styles.cartCountWrapper}>
                <BsCart3 size={22}/>
                <span className={styles.cartCount}>
                  {productQuantity}
                </span>
              </div>
              <div className={styles.title}>SEPET</div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header