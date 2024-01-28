import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Login from '../Login'
import Register from '../Register'

function LoginRegister({ activeSection }) {

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.login}>
        <div className={styles.navTab}>
          <Link className={`${activeSection === "LOGIN" && styles.active}`} to={'/account/login'}>Giriş Yap</Link>
          <Link className={`${activeSection === "REGISTER" && styles.active}`} to={'/account/register'}>Üye Ol</Link>
        </div>
        <div className={styles.body}>
          {activeSection === "LOGIN" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  )
}

export default LoginRegister