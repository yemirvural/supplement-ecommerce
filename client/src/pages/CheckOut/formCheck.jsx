import { useEffect, useState } from 'react';
import styles from './form.module.css';
import { GoTriangleDown } from "react-icons/go";


function FormCheck({ placeHolder, prevData, optionData }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if(prevData && optionData.some(data => data.name === prevData)){
            setInputValue(prevData)
        }
    },[optionData, prevData])

    return (
        <div className={styles.formItemWrapper}>
            <div className={styles.formInputWrapper}>
                <select autoComplete='off' className={`${inputValue ? styles.active : ""}`}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue} type="text">
                    <option value='' disabled></option>
                    {
                        optionData?.map((item, index) => (
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