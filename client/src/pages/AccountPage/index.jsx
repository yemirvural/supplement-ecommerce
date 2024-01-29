import Account from "../../components/Account"
import AccountNavbar from "../../components/AccountNavbar"
import Layout from "../../components/Layout/Layout"
import styles from './styles.module.css'

function AccountPage() {
    return (
        <Layout>
            <div className={styles.accountWrapper}>
                <AccountNavbar activeSection={"ACCOUNT"}/>
                <Account/>
            </div>
        </Layout>
    )
}

export default AccountPage