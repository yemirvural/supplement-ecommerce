import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openSlidingCart } from '../../features/cart/slidingCart';
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GoTriangleDown } from 'react-icons/go';

function Header() {
  const dispatch = useDispatch();
  const productQuantity = useSelector((state) => state.cartData.productQuantity);

  const isLoggedIn = false;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            <span>
              <img src="https://proteinocean.com/logo.svg" alt="" />
            </span>
          </a>
          <form className={styles.searchBar}>
            <input placeholder='please type a product name' type="text" />
            <button className={styles.searchButton}>SEARCH</button>
          </form>
          <div className={styles.userInteraction}>
            <div className={styles.accountWrapper}>
              <div className={styles.account}>
                <FaRegUser size={20} />
                HESAP
                <span>
                  <GoTriangleDown size={28} />
                </span>
              </div>
              <div className={styles.hiddenMenu}>
                {
                  isLoggedIn ?
                    <>
                      <Link to={'/account'}>HESAP</Link>
                      <Link to={'/account/orders'}>Siparişlerim</Link>
                      <Link to={'/account/logout'}>Çıkış Yap</Link></>
                    :
                    <>
                      <Link to={'/account/login'}>Üye Girişi</Link>
                      <Link to={'/account/register'}>Üye Ol</Link>
                    </>
                }
              </div>
            </div>
            <Link onClick={() => dispatch(openSlidingCart())
            } className={styles.cart}>
              <div className={styles.cartCountWrapper}>
                <BsCart3 size={22} />
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