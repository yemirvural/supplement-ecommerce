import styles from './styles.module.css'
import FormInput from "./formInput"
import FormCheck from './formCheck'

let province = [
  {name: "İstanbul"},
  {name: "Ankara"},
  {name: "İzmir"},
  {name: "Bursa"},
];
let district = [
  {name: "Pendik"},
  {name: "Kartal"},
  {name: "Maltepe"},
  {name: "Kadıköy"},
];

function AddresAddSection() {
  return (
    <div className={styles.addAddressContainer}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <FormInput type={"text"} placeHolder={"Ad"} />
          <FormInput type={"text"} placeHolder={"Soyad"} />
        </div>
        <FormInput type={"text"} placeHolder={"Mahalle, cadde, sokak, vb."} />
        <FormInput type={"text"} placeHolder={"Apartman, daire, numara, vb."} />
        <div className={styles.formCol}>
          <FormCheck placeHolder={"İl"} data={province} />
          <FormCheck placeHolder={"İlçe"} data={district} />
        </div>
        <FormInput type={"text"} placeHolder={"Telefon"} />
      </div>
      <div></div>
      <FormInput type={"text"} placeHolder={"Adres Başlığı"} />
    </div>
  )
}

export default AddresAddSection