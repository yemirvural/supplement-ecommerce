import styles from './styles.module.css'
import OrderItem from './orderItem'

function Orders() {
    const orderCount = 3;
    const orders = [1,2,3];

  return (
    <div className={styles.ordersWrapper}>
        <span>Siparişlerim ({orderCount})</span>
        <div>
            {
                orders.map((el, index) => <OrderItem key={index}/>)
            }
        </div>
    </div>
  )
}

export default Orders