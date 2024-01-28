import { Link } from "react-router-dom"
import FormButton from "../../pages/CheckOut/formButton"
import FormInput from "../../pages/CheckOut/formInput"
import FormPassword from "../../pages/CheckOut/FormPassword"
import styles from '../LoginRegister/styles.module.css'

function Login() {
    return (
        <form>
            <div><FormInput placeHolder={'Eposta'} /></div>
            <div><FormPassword placeHolder={'Şifre'} /></div>
            <Link to={'/account/forgot-password'} className={styles.actionText} >
                Şifremi unuttum
            </Link>
            <FormButton borderRadius={4} height={55}>
                GİRİŞ YAP
            </FormButton>
        </form>
    )
}

export default Login