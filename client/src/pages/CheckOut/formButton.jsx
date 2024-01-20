import styles from './form.module.css';

function FormButton({ children, color, bgColor, height, type, onClick }) {
    return (
        <button onClick={onClick} className={`${styles.formButton} ${type === "white" ? styles.white : ""}`}
            style={{
                color: color,
                backgroundColor: bgColor,
                height: height
            }}>
            {children}
        </button>
    )
}

export default FormButton