
import AccountNavbar from "../../components/AccountNavbar"
import Addresses from "../../components/Addresses"
import Layout from "../../components/Layout/Layout"
import styles from './styles.module.css'

function AddressesPage() {
    return (
        <Layout>
            <div className={styles.accountWrapper}>
                <AccountNavbar activeSection={"ADDRESSES"} />
                <Addresses />
            </div>
        </Layout>
    )
}

export default AddressesPage