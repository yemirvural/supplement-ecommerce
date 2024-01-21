import { useEffect, useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

function FormTel({ placeHolder, subPlaceHolder, prevData }) {
    const [inputValue, setInputValue] = useState();
    const [countryCode, setCountryCode] = useState('TR');
    const [flagData, setFlagData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/flagData`);
                setFlagData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    let currentFlag = flagData && flagData.find((flag) => flag.code === countryCode);
    let phoneCode = currentFlag && currentFlag.callingCode;
    let imageLink = currentFlag && currentFlag.flags.png;

    useEffect(() => {
        if (prevData) {
            setCountryCode(prevData.countryCode);
            setInputValue(formatPhoneNumber(prevData.phoneNumber, prevData.callingCode))
        }
    }, [phoneCode, prevData])

    useEffect(() => {
        if (inputValue) {
            if (inputValue.includes(' ') && inputValue.startsWith('+')) {
                let newPhoneCode = inputValue.split(' ')[0]
                if (newPhoneCode !== phoneCode) {
                    let newCountryCode = flagData && flagData.find(data => data.callingCode === newPhoneCode)?.code;
                    if (newCountryCode) {
                        setCountryCode(newCountryCode);
                    }
                }
            }
        }
    }, [flagData, inputValue, phoneCode])



    const inputHandler = (e) => {
        const inputValue = e.target.value;
        return setInputValue(formatPhoneNumber(inputValue, phoneCode))
    }

    return (
        <div className={styles.formItemWrapper}>
            <div className={styles.formInputWrapper}>
                <div className={styles.selectFlag}>
                    <div className={styles.flagContainer}>
                        <div className={styles.flag}>
                            <img src={imageLink} alt={currentFlag && currentFlag.code} />
                            <div className={styles.flagArrow}></div>
                        </div>
                        <select autoComplete='off' className={`${inputValue ? styles.active : ""}`}
                            onChange={(e) => setCountryCode(e.target.value)}
                            value={countryCode}>
                            <option value='' disabled></option>
                            {
                                flagData?.map((item, index) => (
                                    <option key={index} value={item.code}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <input className={`${inputValue ? styles.active : ""}`}
                    onChange={inputHandler}
                    value={inputValue}
                    placeholder={subPlaceHolder}
                    type="tel" />
                <label>{placeHolder}</label>
            </div>
        </div>
    )
}

export default FormTel