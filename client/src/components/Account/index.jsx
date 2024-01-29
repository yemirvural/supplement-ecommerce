import FormButton from '../../pages/CheckOut/formButton'
import FormInput from '../../pages/CheckOut/formInput'
import FormTel from '../../pages/CheckOut/formTel'
import styles from './styles.module.css'

function Account() {
    return (
        <div className={styles.accountWrapper}>
            <span>Hesap Bilgilerim</span>
            <div>
                <form action="">
                    <div className={styles.formCol}>
                        <FormInput placeHolder={'* Ad'} />
                        <FormInput placeHolder={'* Soyad'} />
                    </div>
                    <div>
                        <FormTel placeHolder={'Telefon'} />
                    </div>
                    <div>
                        <FormInput placeHolder={'* Email'} />
                    </div>
                    <div className={styles.formButton}>
                        <FormButton borderRadius={4}>Kaydet</FormButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account