import { formatPrice } from '../../utils/formatPrice'
import styles from './styles.module.css'
import { GoTrash } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, updateProduct } from '../../features/cart/cartData';
import axios from 'axios';

function CartItem({ data }) {
  const allProducts = useSelector((state) => state.cartData.allProducts);
  const cartProducts = useSelector((state) => state.cartData.cartProducts);

  const dispatch = useDispatch();
  const userId = "0001"

  const calculatePrice = (amount, price) => {
    let value = (amount * price);
    return value;
  }

  const inputHandler = async (e) => {
    try {
      const numberRegex = /^[1-9]\d*$/;

      if (e.target.value === "") {
        let newCount = "";
        console.log("babba silinmiyo 1")
        const productData = { id: data.id, size: data.size, aroma: data.aroma, count: newCount, value: data.value };
        return dispatch(updateProduct(productData));
      }
      if (e.target.value == 0) {
        let newCount = "";
        console.log("babba silinmiyo 2")
        const productData = { id: data.id, size: data.size, aroma: data.aroma, count: newCount, value: data.value };
        return dispatch(updateProduct(productData));
      }
      if (numberRegex.test(e.target.value)) {
        let newCount = Number(e.target.value);
        const productData = { id: data.id, size: data.size, aroma: data.aroma, count: newCount, value: data.value };
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, productData);
        if (response.status === 200) {
          return dispatch(updateProduct(productData));
        }
      }
    } catch (error) {
      console.error('Error updating product count:', error);
    }
  }

  const bludHandler = async (e) => {
    try {
      const product = cartProducts.find(el => el.id === data.id && el.aroma === data.aroma && data.size === el.size);
      if (!product) {
        return dispatch(updateProduct({ id: data.id, size: data.size, aroma: data.aroma, count: 1, value: data.value })) // gift update
      }
      const newCount = product.amount + Number(e.target.value) - 1;
      const giftData = { id: data.id, size: data.size, aroma: data.aroma, count: 1, value: data.value };
      const paidData = { id: data.id, size: data.size, aroma: data.aroma, count: newCount };
    

      if (e.target.value === "" || data.value && e.target.value > 1) {
        const response1 = await axios.patch(`http://localhost:3000/cart/${userId}`, paidData);
        if (response1.status === 200) {
          dispatch(updateProduct(paidData)) // paid update
          dispatch(updateProduct(giftData)) // gift update
        }
      }
    } catch (error) {
      console.error('Error updating product count:', error);
    }
  }

  const countHandler = async (num) => {
    try {
      let newCount = Number(data.amount + num);
      const productData = { id: data.id, size: data.size, aroma: data.aroma, count: newCount };
      const newData = { ...data };
      newData.price = data.grayPrice;
      newData.grayPrice = null;
      newData.value = null;
      newData.amount = newCount - 1;
      const product = cartProducts.find(el => el.id === newData.id && el.aroma === newData.aroma && newData.size === el.size)

      if (data.amount + num >= 1) {
        if (data.value) { // It means product is a gift
          const response = await axios.post(`http://localhost:3000/cart/${userId}`, newData);
          if (response.status === 200) {
            if (product) {
              productData.count = product.amount + num
              console.log(productData)
              return dispatch(updateProduct(productData));
            }
            return dispatch(addProduct(newData));
          }
        }
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, productData);
        if (response.status === 200) {
          return dispatch(updateProduct(productData));
        }
      }
      if (product.amount - 1 > 0) {
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, productData);
        productData.count = product.amount - 1
        if (response.status === 200) {
          return dispatch(updateProduct(productData));
        }
      }
      const response = await axios.delete(`http://localhost:3000/cart/${userId}`, {
        data: productData
      });
      if (response.status === 200) {
        dispatch(deleteProduct(data.id))
      }
    } catch (error) {
      console.error('Error updating product count:', error);
    }
  }

  return (
    <div key={data.id} className={styles.productWrapper}>
      <div className={styles.productImage}>
        <img src={data.image} alt="image_180" />
      </div>
      <div className={styles.productName}>
        <div className={styles.name}>{data.title}</div>
        <div className={styles.subTitle}>{data?.size}</div>
        <div>{data?.aroma}</div>
      </div>
      <div className={styles.productPriceContainer}>
        {data.grayPrice && <div className={styles.productGrayPrice}>{formatPrice(calculatePrice(data.amount, data.grayPrice))} TL</div>}
        <div className={styles.productPrice}>{formatPrice(calculatePrice(data.amount, data.price))} TL</div>
        <div className={styles.productQuantity}>
          <button onClick={() => countHandler(-1)}>{data.amount === 1 ? <GoTrash /> : "-"}</button>
          <input onBlur={bludHandler} onChange={inputHandler} value={data.amount} type="text" />
          <button onClick={() => countHandler(+1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem