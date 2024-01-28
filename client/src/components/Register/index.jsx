import { Link } from "react-router-dom"
import FormButton from "../../pages/CheckOut/formButton"
import FormInput from "../../pages/CheckOut/formInput"
import FormPassword from "../../pages/CheckOut/FormPassword"
import styles from '../LoginRegister/styles.module.css'

function Register() {
  return (
    <form>
      <div className={styles.formCol}>
        <div><FormInput placeHolder={'Ad'} /></div>
        <div><FormInput placeHolder={'Soyad'} /></div>
      </div>
      <div><FormInput placeHolder={'Eposta'} /></div>
      <div><FormPassword placeHolder={'Şifre'} /></div>
      <FormButton borderRadius={4} height={55}>
        ÜYE OL
      </FormButton>
      <div className={styles.footer}>
        Zaten hesabınız var mı? <Link to={'/account/login'}>Giriş Yap</Link>
      </div>
    </form>
  )
}

export default Register