import { GoTrash } from 'react-icons/go'
import styles from './styles.module.css'

function AddressItem() {
  return (
    <div className={styles.addressItem}>
      <span>KYK</span>
      <div className={styles.body}>
        <div className={styles.address}>Seyit Mah. Afşar Sok. Seyit Avşar Kyk Yurdu, Seyit Avşar KYK YURDU No:320, Merkez, Bolu, Türkiye</div>
        <div className={styles.addressInteraction}>
          <button><GoTrash size={20} />Sil</button>
          <button>Adresi Düzenle</button>
        </div>
      </div>
    </div>
  )
}

export default AddressItem