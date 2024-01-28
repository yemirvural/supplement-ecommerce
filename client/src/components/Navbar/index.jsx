import styles from './styles.module.css'

const categories = [
  "PROTEİN",
  "SPOR GIDALARI",
  "SAĞLIK",
  "GIDA",
  "VİTAMİN",
  "AKSESUAR",
  "TÜM ÜRÜNLER",
  "PAKETLER",
  "LANSMAN"
]

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        {
          categories.map((item, index) => {return (<a href="/" key={index} className={styles.item}>{item}</a >)})
        }
      </div>
    </nav>
  )
}

export default Navbar