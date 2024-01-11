import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
          roteinBurada.
        </div>
        <form className={styles.searchBar}>
          <input placeholder='please type a product name' type="text" />
          <button className={styles.searchButton}>SEARCH</button>
        </form>
        <div className={styles.userInteraction}>
          <div className={styles.account}>Acc</div>
          <div className={styles.cart}>
            <a>Cart</a>
            <span className={styles.cartCount}>4</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header