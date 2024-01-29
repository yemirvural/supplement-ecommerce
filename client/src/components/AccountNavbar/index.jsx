import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { RiUserSettingsLine } from "react-icons/ri";
import { LuPackage2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GiStarFormation } from "react-icons/gi";
import { RiCoupon3Line } from "react-icons/ri";


function AccountNavbar({ activeSection}) {
    return (
        <div className={styles.navbarWrapper}>
            <h1>Hesabim</h1>
            <div >
                <Link className={`${activeSection === "ACCOUNT" && styles.active}`} to={'/account'}><RiUserSettingsLine />Hesap Bilgilerim</Link>
                <Link className={`${activeSection === "ORDERS" && styles.active}`} to={'/account/orders'}><LuPackage2 />Siparişlerim</Link>
                <Link className={`${activeSection === "ADDRESSES" && styles.active}`} to={'/account/addresses'}><IoLocationOutline />Adreslerim</Link>
                <Link className={`${activeSection === "COUPONS" && styles.active}`} to={'/account/coupons'}><RiCoupon3Line />Kuponlarim</Link>
                <Link className={`${activeSection === "RAFFLES" && styles.active}`} to={'/account/raffles'}><GiStarFormation />Çekilişlerim</Link>
            </div>
        </div>
    )
}

export default AccountNavbar