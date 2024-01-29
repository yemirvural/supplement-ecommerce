
import AccountNavbar from "../../components/AccountNavbar"
import Layout from "../../components/Layout/Layout"
import styles from './styles.module.css'

function Raffles() {
    return (
        <Layout>
            <div className={styles.accountWrapper}>
                <AccountNavbar activeSection={"RAFFLES"}/>
                Raffles
            </div>
        </Layout>
    )
}

export default Raffles