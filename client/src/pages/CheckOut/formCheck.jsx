import { useState } from 'react';
import styles from './form.module.css';
import { GoTriangleDown } from "react-icons/go";


function FormCheck({ placeHolder, data }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.formItemWrapper}>
            <div className={styles.formInputWrapper}>
                <select autoComplete='off' className={`${inputValue ? styles.active : ""}`}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue} type="text">
                    <option value='' disabled></option>
                    {
                        data.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))
                    }
                </select>
                <label>{placeHolder}</label>
                <div className={styles.arrowDown}>
                    <GoTriangleDown color='#8A8B94'/>
                </div>
            </div>
        </div>
    )
}

export default FormCheck