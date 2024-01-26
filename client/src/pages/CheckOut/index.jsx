import styles from './styles.module.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from 'react'
import AddressSection from './addressSection'
import AddresEditSection from './addresEditSection'
import FormButton from './formButton'
import { updateStep } from '../../features/product/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GrFormCheckmark } from 'react-icons/gr'
import axios from 'axios'
import { formatPrice } from '../../utils/formatPrice'
import { updateProducts } from '../../features/cart/cartData'

function CheckOut() {
  const [isPromotionHidden, setIsPromotionHidden] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = "8817d9ec-8eb0-405d-839e-2f75fc1cc8ba";
  const userId = "0001";
  const step = useSelector((state) => state.cart.step);
  const cartData = useSelector((state) => state.cartData.cartProducts);

  cartData && console.log(cartData)
  let addressData = [
    {
      id: "0000",
      title: "KYK",
      name: "Yusuf Emir",
      surname: "Vural",
      address1: "Seyit Mah. Afşar Sok. Seyit Avşar Kyk Yurdu",
      address2: "Seyit Avşar KYK YURDU No:320",
      province: "Bolu",
      district: "Merkez",
      country: "Türkiye",
      countryCode: "US",
      callingCode: "+1",
      phoneNumber: "534 608 69 44",
    },
    {
      id: "0001",
      title: "EVİM",
      name: "Yusuf Emir",
      surname: "Vural",
      address1: "Şeyhli Mah. Gülfidan Sokak No:2",
      address2: "Hilal Konutları D:6 Blok Daire:35",
      province: "İstanbul",
      district: "Pendik",
      country: "Türkiye",
      countryCode: "TR",
      callingCode: "+90",
      phoneNumber: "534 608 69 44",
    },
  ]

  const editHandler = () => {
    setIsEditActive(!isEditActive)
  }

  const nextStep = () => {
    dispatch(updateStep())
  }

  const completedSteps = (currStep) => {
    const steps = ["info", "shipping", "payment"];
    let stepIndex = steps.indexOf(currStep);
    return steps.splice(0, stepIndex);
  }

  useEffect(() => {
    if (step == "shipping") { dispatch(updateStep()) }

    if (id && step) {
      return navigate(`?id=${id}&step=${step}`)
    }
  }, [dispatch, navigate, step])

  
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

  const calculatePrice = (amount, price) => {
    let value = (amount * price);
    return value;
  }

  const calculateSubTotalPrice = () => {
    let value = 0;
    cartData && cartData.map(item => value += (item.price * item.amount));
    return value;
  }
  const calculateTotalPrice = () => {
    let value = calculateSubTotalPrice();
    let discountCost = 0;
    let cargoCost = 0;
    return (value + cargoCost) - discountCost;
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <div>
            <div className={styles.header}>
              <a href="/" className={styles.logo}>
                <span>
                  <img alt="Image" src="https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_3840.webp" decoding="async" data-nimg="fill" sizes="360px" srcSet="https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 16w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 32w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 48w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 64w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 96w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 128w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 180w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_180.webp 256w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_360.webp 360w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_360.webp 384w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_540.webp 540w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_720.webp 720w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_900.webp 900w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_1080.webp 1080w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_1296.webp 1296w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_1512.webp 1512w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_1728.webp 1728w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_1950.webp 1950w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_2560.webp 2560w, https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/a222f8cd-36a1-4179-be52-604c6211c72c/image_3840.webp 3840w" />
                </span>
              </a>
              <div className={styles.customerInfo}>
                <div className={styles.name}>Yusuf Emir VURAL</div>
                <div className={styles.email}>yusuf_vural34@hotmail.com</div>
              </div>
            </div>
            <div className={styles.stepContainer}>

              <div className={`${styles.step} ${completedSteps(step).includes('info') && styles.completed}  ${step === "info" ? styles.active : ""}`}>
                <div style={{ borderTop: "none" }} className={styles.stepTitleContainer}>
                  <div className={styles.stepTitle}>
                    <span>
                      1
                      <div className={styles.stepTick}><GrFormCheckmark size={24} /></div>
                    </span>
                    <div>Adres</div>
                  </div>
                </div>
                <div className={styles.stepContent}>
                  {
                    !isEditActive ?
                      <AddressSection
                        addressData={addressData}
                        nextStep={nextStep}
                        editHandler={editHandler}
                      />
                      :
                      <AddresEditSection
                        addressData={addressData}
                        editHandler={editHandler}
                      />
                  }
                </div>
              </div>

              <div className={`${styles.step} ${completedSteps(step).includes('shipping') ? styles.completed : ''}  ${step === "shipping" ? styles.active : ""}`}>
                <div className={styles.stepTitleContainer}>
                  <div className={styles.stepTitle}>
                    <span>
                      2
                      <div className={styles.stepTick}><GrFormCheckmark size={24} /></div>
                    </span>
                    <div>Kargo</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.step} ${completedSteps(step).includes('payment') ? styles.completed : ''}  ${step === "payment" ? styles.active : ""}`}>
                <div className={styles.stepTitleContainer}>
                  <div className={styles.stepTitle}>
                    <span>
                      3
                      <div className={styles.stepTick}><GrFormCheckmark size={24} /></div>
                    </span>
                    <div>Ödeme</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightContent}>
          <div className={styles.cartSummary}>
            <div className={styles.productsContainer}>
              {
                cartData && cartData.map((item) =>
                (
                  <div key={item.id} className={styles.product}>
                    <div className={styles.productImage}>
                      <img src={item.image} alt="" />
                      <span className={styles.itemCount}>{item.amount}</span>
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.subTitle}>{item.subTitle}</div>
                    </div>
                    <div className={styles.priceContainer}>
                      {item.grayPrice && <span className={styles.grayPrice}>{item.grayPrice} TL</span>}
                      <span className={styles.price}>{formatPrice(calculatePrice(item.amount, item.price))} TL</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className={styles.divider}></div>

            <div className={styles.subTotal}>
              <div className={styles.infoContainer}>
                <div className={styles.infoLeft}>
                  <span>Ara Toplam</span>
                  <div className={styles.infoTag}>
                    <div
                      className={styles.tag}
                      data-tooltip-id="my-tool"
                      data-tooltip-content="Ara toplam, tüm geçerli indirimlerden önce siparişinizin toplam fiyatını yansıtır. Kargo ücretini içermez."
                      data-event="touchstart focus mouseover"
                      data-event-off="mouseout"
                    >
                      ?
                    </div>
                    <Tooltip className={styles.deneme} id="my-tool" />
                  </div>
                </div>
                <div className={styles.infoRight}>{formatPrice(calculateSubTotalPrice())} TL</div>
              </div>
            </div>

            <div className={styles.promotion}>
              {!isPromotionHidden && (
                <button
                  onClick={() => setIsPromotionHidden(true)}
                  className={styles.actionText}
                >
                  Promosyon Kodu Kullan
                </button>
              )}
              {isPromotionHidden && (
                <div className={styles.promotionInput}>
                  <input placeholder='İndirim Kodu' type="text" />
                  <FormButton>Uygula</FormButton>
                </div>
              )}
            </div>

            <div className={styles.totalContainer}>
              <span>Toplam</span>
              <span>{formatPrice(calculateTotalPrice())} TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut