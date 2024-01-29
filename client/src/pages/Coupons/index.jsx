
import AccountNavbar from "../../components/AccountNavbar"
import Layout from "../../components/Layout/Layout"
import styles from './styles.module.css'

function Coupons() {
    return (
        <Layout>
            <div className={styles.accountWrapper}>
                <AccountNavbar activeSection={"COUPONS"}/>
                Coupons
            </div>
        </Layout>
    )
}

export default Coupons