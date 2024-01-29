import styles from './styles.module.css'
import AddressItem from './addressItem'

function Addresses() {
    const addresses = [1, 2];
    const addressCount = 3;

    return (
        <div className={styles.addressWrapper}>
            <span>Addreslerim ({addressCount})</span>
            <div className={styles.addresses}>
                {
                    addresses.map((el, index) => <AddressItem key={index} />)
                }
            </div>
        </div>
    )
}

export default Addresses