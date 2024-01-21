import { useSelector } from 'react-redux'
import FormButton from './formButton'
import FormInput from './formInput'
import FormCheck from './formCheck'
import styles from './styles.module.css'
import FormTel from './formTel'

let province = [
  { name: "İstanbul" },
  { name: "Ankara" },
  { name: "İzmir" },
  { name: "Bursa" },
  { name: "Bolu" },
];
let district = [
  { name: "Pendik" },
  { name: "Kartal" },
  { name: "Maltepe" },
  { name: "Kadıköy" },
  { name: "Merkez" },
];


function AddresEditSection({ editHandler, addressData }) {
  const addressId = useSelector((state) => state.cart.addressId)
  const address = addressData.find(address => address.id === addressId);

  return (
    <div className={styles.sectionContent}>
      <div className={styles.sectionTitle}>
        <div className={styles.title}>Adres Düzenle</div>
        <button onClick={editHandler} className={styles.cancelEdit}>Vazgeç</button>
      </div>
      <div className={styles.formRow}>
        <FormInput prevData={address.title} type={"text"} placeHolder={"Adres Başlığı"} />
        <div className={styles.formCol}>
          <FormInput prevData={address.name} type={"text"} placeHolder={"Ad"} />
          <FormInput prevData={address.surname} type={"text"} placeHolder={"Soyad"} />
        </div>
        <FormInput prevData={address.address1} type={"text"} placeHolder={"Mahalle, cadde, sokak, vb."} />
        <FormInput prevData={address.address2} type={"text"} placeHolder={"Apartman, daire, numara, vb."} />
        <div className={styles.formCol}>
          <FormCheck prevData={address.province} type={"text"} optionData={province} placeHolder={"İl"} />
          <FormCheck prevData={address.district} type={"text"} optionData={district} placeHolder={"İlçe"} />
        </div>
        <FormTel prevData={address} type={"text"} placeHolder={"Telefon"} />
      </div>
      <div className={styles.editAddressActions}>
        <FormButton type="white" height={'56px'}>Adresi Sil</FormButton>
        <FormButton height={'56px'}>Kaydet</FormButton>
      </div>
    </div>
  )
}

export default AddresEditSection