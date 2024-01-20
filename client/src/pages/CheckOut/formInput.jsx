import { useEffect, useState } from 'react';
import styles from './form.module.css';

function FormInput({ placeHolder, prevData }) {
    const [inputValue, setInputValue] = useState();
    useEffect(() => {
        if(prevData){
            setInputValue(prevData)
        }
    },[])
    return (
        <div className={styles.formItemWrapper}>
            <div className={styles.formInputWrapper}>
                <input className={`${inputValue ? styles.active : ""}`} onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" />
                <label>{placeHolder}</label>
            </div>
        </div>
    )
}

export default FormInput