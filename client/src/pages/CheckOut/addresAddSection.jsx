import styles from './styles.module.css'
import FormInput from "./formInput"
import FormCheck from './formCheck'
import FormTel from './formTel.jsx'
import { GrFormCheckmark } from 'react-icons/gr';
import { useState } from 'react';


let province = [
  { name: "İstanbul" },
  { name: "Ankara" },
  { name: "İzmir" },
  { name: "Bursa" },
];
let district = [
  { name: "Pendik" },
  { name: "Kartal" },
  { name: "Maltepe" },
  { name: "Kadıköy" },
];

function AddresAddSection() {
  const [saveAddress, setSaveAddress] = useState(true)
  return (
    <div className={styles.addAddressContainer}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <FormInput placeHolder={"Ad"} />
          <FormInput placeHolder={"Soyad"} />
        </div>
        <FormInput placeHolder={"Mahalle, cadde, sokak, vb."} />
        <FormInput placeHolder={"Apartman, daire, numara, vb."} />
        <div className={styles.formCol}>
          <FormCheck placeHolder={"İl"} optionData={province} />
          <FormCheck placeHolder={"İlçe"} optionData={district} />
        </div>
        <FormTel placeHolder={"Telefon"} subPlaceHolder={"Telefon numarası girin"} />
      </div>
      <div onClick={() => setSaveAddress(!saveAddress)} className={`${styles.checkboxWrapper} ${styles.saveAddress} ${saveAddress && styles.active}`}>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxBorder}></div>
          <div className={styles.checkboxTick}>
            <GrFormCheckmark color='fff' />
          </div>
        </div>
        <div className={styles.nameContainer}>
          <div style={{ color: "#8A8B94" }} className={styles.name}>Bir sonraki işlem için bu adresi kaydet</div>
        </div>
      </div>
      {saveAddress && <div className={styles.addressTitle}>
        <FormInput placeHolder={"Adres Başlığı"} />
      </div>}
    </div>
  )
}

export default AddresAddSection