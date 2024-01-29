
import AccountNavbar from "../../components/AccountNavbar"
import Layout from "../../components/Layout/Layout"
import Orders from "../../components/Orders"
import styles from './styles.module.css'

function OrdersPage() {
    return (
        <Layout>
            <div className={styles.accountWrapper}>
                <AccountNavbar activeSection={"ORDERS"} />
                <Orders />
            </div>
        </Layout>
    )
}

export default OrdersPage