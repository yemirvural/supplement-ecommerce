import styles from './styles.module.css'
import FormButton from '../../pages/CheckOut/formButton'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../../features/cart/cartData';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';

function SlidingCart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cartData.cartProducts);
    const userId = "0001"
    const isSlidingCartActive = useSelector((state) => state.slidingCart.isActive);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cart/${userId}`);
                dispatch(updateProducts(response.data.products));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    cartData && console.log(cartData)
    const calculateSubTotalPrice = () => {
        let value = 0;
        cartData && cartData.map(item => value += (item.price * item.amount));
        return value;
    }
    const calculateTotalDiscount = () => {
        let discountCost = 0;
        return discountCost > 0 ? `-${discountCost}` : discountCost;
    }
    const calculateTotalPrice = () => {
        let value = calculateSubTotalPrice();
        let cargoCost = 0;
        return (value + cargoCost) - calculateTotalDiscount();
    }

    const progressPercent = () => {
        const totalValue = calculateTotalPrice();
        let percent = 100 * (totalValue / 4000)
        if (totalValue >= 4000) percent = 100;
        return percent
    }

    return (
        <div className={`${styles.slidingCart} ${isSlidingCartActive && styles.active}`}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h3>SEPETIM</h3>
                </div>
                <div className={styles.body}>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarWrapper}>
                            <div style={{ width: `calc(${progressPercent()}%)` }} className={styles.progressBar}></div>
                        </div>
                        <div className={styles.progressItems}>
                            <div className={styles.progressItemWrapper}>
                                <div className={styles.progressItem}>
                                    <span>
                                        <img src="https://cdn.myikas.com/images/theme-images/5d963a87-813f-4568-ab6c-83eada06d9cd/image_180.webp" alt="" />
                                    </span>
                                </div>
                                <h3>1000 TL</h3>
                            </div>
                            <div className={styles.progressItemWrapper}>
                                <div className={styles.progressItem}>
                                    <span>
                                        <img src="https://cdn.myikas.com/images/theme-images/400d930f-5432-43bd-8f19-7997d1f8b939/image_180.webp" alt="" />
                                    </span>
                                </div>
                                <h3>2500 TL</h3>
                            </div>
                            <div className={styles.progressItemWrapper}>
                                <div className={styles.progressItem}>
                                    <span>
                                        <img src="https://cdn.myikas.com/images/theme-images/2379caef-7884-4d91-9e74-84f47c7c5903/image_180.webp" alt="" />
                                    </span>
                                </div>
                                <h3>4000 TL</h3>
                            </div>

                        </div>

                    </div>
                    <div className={styles.productsContainer}>
                        {
                            cartData && cartData.map(data =>
                                <CartItem key={data.id} data={data} />
                            )
                        }
                    </div>
                    <div className={styles.summaryContainer}>
                        <div className={styles.totalWrapper}>
                            <div>
                                <button
                                    className={styles.actionText}
                                >
                                    Promosyon Kodu Kullan
                                </button>
                            </div>
                            <div>
                                <div className={styles.totalPrice}>TOPLAM {calculateTotalPrice()} TL</div>
                                <div className={styles.discount}>İndirimler: {calculateTotalDiscount()} TL</div>
                            </div>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <FormButton onClick={() => navigate('/checkout')}>
                                <div className={styles.buttonTitle}>DEVAM ET ▸</div>
                            </FormButton >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlidingCart