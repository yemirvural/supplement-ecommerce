import styles from './styles.module.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useState } from 'react'



function CheckOut() {
  const [isPromotionHidden, setIsPromotionHidden] = useState(false);
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
              <div className={styles.step}>
                <div className={styles.stepTitleContainer}>
                  <div className={`${styles.stepTitle} ${styles.active}`}>
                    <span>1</span>
                    <div>Adres</div>
                  </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.sectionTitle}>
                      <div className={styles.title}>Teslimat Adresi</div>
                    </div>
                    <div className={styles.optionRow}>
                      <div className={`${styles.selectBox} ${styles.active}`}>
                        <div className={styles.topContent}>
                          <span className={styles.tick}></span>
                          <div className={styles.nameContainer}>
                            <div className={styles.name}>KYK</div>
                          </div>
                          <div className={styles.edit}>
                            <button>Düzenle</button>
                          </div>
                        </div>
                        <div className={styles.bottomContent}>

                        </div>
                      </div>
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
              <div className={styles.product}>
                <div className={styles.productImage}>
                  <img src="https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/f2f9d948-9a4b-4a96-b2d4-8227989f9830/image_180.webp" alt="" />
                  <span className={styles.itemCount}>1</span>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.title}>FITNESS PAKETİ</div>
                  <div className={styles.subTitle}>Bisküvi / Ahududu</div>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.grayPrice}>995 TL</span>
                  <span className={styles.price}>699 TL</span>
                </div>
              </div>
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
                <div className={styles.infoRight}>4,299 TL</div>
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
                  <button>Uygula</button>
                </div>
              )}
            </div>

            <div className={styles.totalContainer}>
              <span>Toplam</span>
              <span>699 TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut