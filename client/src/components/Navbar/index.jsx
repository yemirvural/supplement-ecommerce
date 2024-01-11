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
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        {
          categories.map((item, index) => {return (<div key={index} className={styles.item}>{item}</div>)})
        }
      </div>
    </div>
  )
}

export default Navbar