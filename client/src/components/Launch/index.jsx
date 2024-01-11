import styles from './styles.module.css'

function Launch() {
    return (
        <div className={styles.launch}>
            <div className={styles.wrapper}>
                <span className={styles.imageWrapper}>
                    <img className={styles.photo} src="https://cdn.myikas.com/images/theme-images/c4c2f872-d08a-49ca-ac54-5059156d0a68/image_1296.webp" alt="lansman" />
                </span>
            </div>
        </div>
    )
}

export default Launch