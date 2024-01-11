import styles from './styles.module.css'

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/cdc7329f-7cda-451b-a4d3-c40b0937af22/image_360.webp" alt="product" />
        </div>
        <span className={styles.name}>WHEY PROTEIN</span>
        <span className={styles.desc}>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</span>
        <span className={styles.stars}>5</span>
        <span className={styles.comments}>9285 Yorum</span>
        <span className={styles.price}>439 TL</span>
      </div>
    </div>
  )
}

export default Product