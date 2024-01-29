import styles from './styles.module.css'
import FormButton from '../../pages/CheckOut/formButton';

function OrderItem() {
  const orderStatus = "Teslim Edildi";
  const orderDate = "6 Ocak 2024";
  const orderNo = "3936575";
  return (
    <div className={styles.orderItem}>
      <a className={styles.photo}>
        <img src="https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/cf8d49b6-5706-44b9-a266-68791ed31869/image_180.webp" alt="/image_180.webp" />
      </a>

      <div className={styles.info}>
        <div className={styles.orderStatus}>{orderStatus}</div>
        <div className={styles.productName}>WHEY PROTEIN LANSMAN</div>
        <div className={styles.orderDate}>{orderDate} Tarihinde Sipariş Verildi</div>
        <div className={styles.orderNo}>{orderNo} numaralı sipariş</div>
      </div>

      <div className={styles.orderInteraction}>
        <FormButton borderRadius={4} height={42}>Yeniden sipariş ver</FormButton>
        <FormButton borderRadius={4} type={'white'} borderColor={'rgba(0,0,0)'} height={42}>Detayı Görüntüle</FormButton>
      </div>
    </div>
  )
}

export default OrderItem