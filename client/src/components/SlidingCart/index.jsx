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
    const giftItem = useSelector((state) => state.cartData.nextStage);
    const allProducts = useSelector((state) => state.cartData.allProducts);
    const gifts = useSelector((state) => state.cartData.gifts);

    useEffect(() => {
        const postGiftData = async () => {
            try {
                const response = await axios.post(`http://localhost:3000/cart/${userId}/updateGifts`, gifts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        postGiftData();
    }, [gifts])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cart/${userId}`);
                dispatch(updateProducts(response.data.products));
                //dispatch(updateGifts(response.data.gifts));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    const calculateSubTotalPrice = () => {
        let value = 0;
        cartData && cartData.map(item => value += (item.price * item.amount));
        return value;
    }
    const calculateTotalDiscount = () => {
        let discountCost = 0;
        allProducts && allProducts.map(item => item.grayPrice && (discountCost += (item.amount * (item.grayPrice - item.price))));
        return discountCost;
    }
    const calculateTotalPrice = () => {
        let value = calculateSubTotalPrice();
        let cargoCost = 0;
        return (value + cargoCost) - calculateTotalDiscount();
    }

    const progressPercent = () => {
        const totalValue = calculateSubTotalPrice();
        let percent;
        if (totalValue <= 1000) percent = 10;
        if (totalValue === 0) percent = 0;
        if (totalValue >= 1000 && totalValue <= 2500) percent = 30;
        if (totalValue >= 2500 && totalValue <= 4000) percent = 70;
        if (totalValue >= 4000) percent = 100;
        return percent
    }

    const completedSteps = () => {
        const steps = ["POCKET SHAKER", "PROTEİNOCEAN HAVLU", "RELENTLESS GYM HANDBAG"];
        let stepIndex = giftItem && steps.indexOf(giftItem.title);
        if(stepIndex === null) stepIndex = 3;
        return steps.splice(0, stepIndex);
    }

    return (
        <div className={`${styles.slidingCart} ${isSlidingCartActive && styles.active}`}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h3>SEPETIM</h3>
                </div>
                <div className={styles.body}>
                    {giftItem && <div className={styles.stageInfo}>
                        Hediye <span>{giftItem.title}</span> için <span>{giftItem.value - calculateSubTotalPrice()} TL</span> kaldı! 
                    </div>}
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarWrapper}>
                            <div style={{ width: `calc(${progressPercent()}%)` }} className={styles.progressBar}></div>
                        </div>
                        <div className={styles.progressItems}>
                            <div className={styles.progressItemWrapper}>
                                <div className={`${styles.progressItem} ${completedSteps().includes('POCKET SHAKER') && styles.completed}`}>
                                    <span>
                                        <img src="https://cdn.myikas.com/images/theme-images/5d963a87-813f-4568-ab6c-83eada06d9cd/image_180.webp" alt="" />
                                    </span>
                                </div>
                                <h3>1000 TL</h3>
                            </div>
                            <div className={styles.progressItemWrapper}>
                                <div className={`${styles.progressItem} ${completedSteps().includes('PROTEİNOCEAN HAVLU') && styles.completed}`}>
                                    <span>
                                        <img src="https://cdn.myikas.com/images/theme-images/400d930f-5432-43bd-8f19-7997d1f8b939/image_180.webp" alt="" />
                                    </span>
                                </div>
                                <h3>2500 TL</h3>
                            </div>
                            <div className={styles.progressItemWrapper}>
                                <div className={`${styles.progressItem} ${completedSteps().includes('RELENTLESS GYM HANDBAG') && styles.completed}`}>
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
                            allProducts && allProducts.map((data, index) =>
                                <CartItem key={index} data={data} />
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
                                <div className={styles.totalPrice}>TOPLAM {calculateSubTotalPrice()} TL</div>
                                <div className={styles.discount}>İndirimler: {calculateTotalDiscount() > 0 ? `-${calculateTotalDiscount()}` : calculateTotalDiscount()} TL</div>
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