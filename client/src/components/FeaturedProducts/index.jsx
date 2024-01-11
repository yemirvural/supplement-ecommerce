import styles from './styles.module.css'
import Product from '../Product'

function FeaturedProducts() {
    return (
        <div className={styles.products}>
            <h3>ÇOK SATANLAR</h3>
            <div className={styles.wrapper}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default FeaturedProducts