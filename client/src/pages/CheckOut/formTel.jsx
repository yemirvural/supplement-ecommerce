import { useEffect, useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

function FormTel({ placeHolder, subPlaceHolder, prevData }) {
    const [inputValue, setInputValue] = useState();
    const [countryCode, setCountryCode] = useState('TR');
    const [flagData, setFlagData] = useState();
    const [isPrevDataRead, setIsPrevDataRead] = useState(false);

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
        if (prevData && !isPrevDataRead) {
            setCountryCode(prevData.countryCode);
            setInputValue(formatPhoneNumber(prevData.phoneNumber, prevData.callingCode))
            setIsPrevDataRead(true);
        }
    }, [isPrevDataRead, phoneCode, prevData])

    const inputHandler = (e) => {
        const inputValue = e.target.value;
        return setInputValue(formatPhoneNumber(inputValue, phoneCode))
    }
    const selectHandler = (e) => {
        setCountryCode(e.target.value);

        let newCallingCode = flagData && flagData.find((flag) => flag.code === e.target.value).callingCode;
        let splitedNumber = inputValue && inputValue.split(' ');

        if (inputValue === undefined) {
            setInputValue(newCallingCode)
        }
        if (phoneCode) {
            splitedNumber[0] = newCallingCode;
        }
        let newNumber = splitedNumber && splitedNumber.join(' ');
        newNumber && setInputValue(newNumber);
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
                            onChange={selectHandler}
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