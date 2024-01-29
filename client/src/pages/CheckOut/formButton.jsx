import styles from './form.module.css';
import { useNavigate } from 'react-router-dom';

function FormButton({ children, color, bgColor, height, type, borderRadius, borderColor, onClick }) {
    const navigate = useNavigate();

    return (
        <button onClick={onClick} className={`${styles.formButton} ${type === "white" ? styles.white : ""}`}
            style={{
                color: color,
                backgroundColor: bgColor,
                borderColor,
                height: height,
                borderRadius,
            }}>
            {children}
        </button>
    )
}

export default FormButton