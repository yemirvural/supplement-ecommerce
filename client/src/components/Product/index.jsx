import axios from "axios";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { star } from "../../utils/starUtils";
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { updateAroma, updatePiece } from "../../features/product/productSlice";
import SizeItem from "./sizeItem";
import AromaItem from "./aromaItem"
import { openSlidingCart } from "../../features/cart/slidingCart";
import { addProduct } from "../../features/cart/cartData";


function Product({ productName }) {

  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = "0001";

  const aroma = useSelector((state) => state.product.aroma);
  const size = useSelector((state) => state.product.size);
  const piece = useSelector((state) => state.product.piece);

  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${productName}`);
        setData(response.data);
      } catch (error) {
        navigate('/');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [navigate, productName]);

  const sizeData = data && data.sizes.find(item => item.weight === size);
  const aromaData = data && sizeData.aromas.find(item => item.name === aroma);
  const image = data && aromaData?.image;


  useEffect(() => {
    if (data && sizeData.aromas.some(item => item.name == aroma)) {
      return navigate(`?size=${size}&aroma=${aroma}`)
    }
    dispatch(updateAroma("Biskuvi"));
    return navigate(`?size=${size}&aroma=${aroma}`)

  }, [aroma, data, dispatch, navigate, size, sizeData])

  const inputHandler = (e) => {
    const numberRegex = /^[1-9]\d*$/;
    if (e.target.value === "" || numberRegex.test(e.target.value)) {
      let value = Number(e.target.value);
      dispatch(updatePiece(value));
    }
  }

  const countHandler = (num) => {
    if (piece + num >= 0) {
      dispatch(updatePiece(piece + num))
    }
  }

  const isAromaExist = () => {
    return sizeData.aromas.some(item => item.name == aroma)
  }

  const calculatePerServe = () => {
    const price = sizeData && (sizeData.price / sizeData.service);
    return sizeData && price.toFixed(2);
  }

  const addCartHandler = async () => {
    const subTitle = `${size} / ${aroma}`
    const resData = {
      id: data.id,
      size,
      aroma,
      title: data.title,
      subTitle,
      image,
      price: data.price,
      grayPrice: data?.grayPrice,
      amount: piece,
    }
    dispatch(addProduct(resData))
    dispatch(openSlidingCart())
    const response = await axios.post(`http://localhost:3000/cart/${userId}`, resData);
  }

  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.photo}>
          <img src={image} />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{data && data.title}</div>
          <div className={styles.subtitle}>{data && data.subTitle}</div>
          <div className={styles.star}>{star(5)} <span>{data && data.commentCount} Yorum</span></div>
          <div className={styles.category}>
            <span className={styles.categoryItem}>VEJETARYEN</span>
            <span className={styles.categoryItem}>GLUTENSİZ</span>
          </div>
          <div className={styles.separator}></div>

          <span className={styles.boldTitle}>BOYUT:</span>
          <div className={styles.size}>
            {
              data && data.sizes.map((size, index) =>
                <SizeItem key={index} data={size} isAromaExist={isAromaExist()} />)
            }
          </div>

          <span className={styles.boldTitle}>AROMA:</span>
          <div className={styles.aroma}>
            {
              data && sizeData.aromas.map((aroma, index) =>
                <AromaItem key={index} data={aroma} />)
            }
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}><b>{data && sizeData.price} TL</b></span>
            <span className={styles.priceOfService}>{calculatePerServe()} TL / Servis</span>
          </div>
          <div className={styles.addCart}>
            <div onChange={inputHandler} className={styles.input}>
              <button onClick={() => countHandler(-1)}>-</button>
              <input value={piece} type="text" />
              <button onClick={() => countHandler(1)}>+</button>
            </div>
            <button onClick={addCartHandler} className={styles.inputButton}><IoCartOutline size={27} />SEPETE EKLE</button>
          </div>
          <div className={styles.separator}></div>
          <p dangerouslySetInnerHTML={{ __html: data && data.desc }}></p>

          <div className={styles.section}>
            <button onClick={() => setSection1(!section1)} className={styles.sectionTitle}>
              <span>ÖZELLİKLER</span>
              <FaChevronDown />
            </button>
            <div className={`${section1 ? styles.active : ""} ${styles.content} `}>
              <p dangerouslySetInnerHTML={{ __html: data && data.features }}></p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.separator}></div>
            <button onClick={() => setSection2(!section2)} className={styles.sectionTitle}>
              <span>BESİN İÇERİĞİ</span>
              <FaChevronDown />
            </button>
            <div className={`${section2 ? styles.active : ""} ${styles.content} `}>
              <table>
                <thead>
                  <tr>
                    <th>{data && data.nutritionalContentHeader.title}</th>
                    <th>{data && data.nutritionalContentHeader.weight} servis için</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.nutritionalContent.map(item =>
                    (
                      <>
                        <tr key={item.name}>
                          <th>{item.name}</th>
                          <th>{item.value}</th>
                        </tr>
                      </>
                    )
                    )
                  }
                </tbody>
              </table>
              <p dangerouslySetInnerHTML={{ __html: data && data.contentsHtml }}></p>
              <table>
                <thead>
                  <tr>
                    <th>{data && data.aminoAcidContentHeader.title}</th>
                    <th>{data && data.aminoAcidContentHeader.weight} servis için</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.aminoAcidContent.map(item =>
                    (
                      <>
                        <tr key={item.name}>
                          <th>{item.name}</th>
                          <th>{item.value}</th>
                        </tr>
                      </>
                    )
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.separator}></div>
            <button onClick={() => setSection3(!section3)} className={styles.sectionTitle}>
              <span>KULLANIM ŞEKLİ</span>
              <FaChevronDown />
            </button>
            <div className={`${section3 ? styles.active : ""} ${styles.content} `}>
              <p dangerouslySetInnerHTML={{ __html: data && data.usage }}></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product