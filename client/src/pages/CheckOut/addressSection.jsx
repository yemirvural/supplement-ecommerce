import { GrFormCheckmark } from 'react-icons/gr'
import styles from './styles.module.css'
import FormButton from './formButton'
import AddresAddSection from './addresAddSection'
import { useDispatch, useSelector } from 'react-redux'
import { updateAddress } from '../../features/product/cartSlice'


function AddressSection({ editHandler, nextStep, addressData }) {
    let addressId = useSelector((state) => state.cart.addressId);
    const dispatch = useDispatch();

    const checkAddressHandler = (id) => {
        dispatch(updateAddress(id));
    }

    const newAddressHandler = () => {
        dispatch(updateAddress("new"));
    }

    return (
        <div className={styles.sectionContent}>
            <div className={styles.sectionTitle}>
                <div className={styles.title}>Teslimat Adresi</div>
            </div>
            <div className={styles.optionRow}>
                {
                    addressData.map((address, index) => (
                        <div onClick={() => checkAddressHandler(address.id)} key={index} className={`${styles.selectBox} ${addressId === address.id ? styles.active : ""}`}>
                            <div className={styles.topContent}>
                                <div className={styles.checkboxContainer}>
                                    <div className={styles.checkboxBorder}></div>
                                    <div className={styles.checkboxTick}>
                                        <GrFormCheckmark color='fff' />
                                    </div>
                                </div>
                                <div className={styles.nameContainer}>
                                    <div className={styles.name}>{address.title}</div>
                                </div>
                                <div className={styles.edit}>
                                    <button onClick={editHandler}>Düzenle</button>
                                </div>
                            </div>
                            <div className={styles.bottomContent}>
                                <div className={styles.addressContent}>
                                    <div className={styles.addressText}>{address.name} {address.surname}</div>
                                    <div className={styles.addressText}>{address.address1}, {address.address2}, {address.district}, {address.province}, {address.country}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div onClick={newAddressHandler} className={`${styles.selectBox} ${styles.checkboxWrapper} ${addressId === "new" && styles.active}`}>
                    <div className={styles.topContent}>
                        <div className={styles.checkboxContainer}>
                            <div className={styles.checkboxBorder}></div>
                            <div className={styles.checkboxTick}>
                                <GrFormCheckmark color='fff' />
                            </div>
                        </div>
                        <div className={styles.nameContainer}>
                            <div className={styles.name}>Yeni Adres</div>
                        </div>
                    </div>
                    {addressId === "new" &&
                        <div className={styles.checkboxContent}>
                            <AddresAddSection />
                        </div>
                    }

                </div>
            </div>
            <FormButton onClick={nextStep} height={'56px'}>DEVAM ET ▸</FormButton >
        </div>
    )
}

export default AddressSection