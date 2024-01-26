import { formatPrice } from '../../utils/formatPrice'
import styles from './styles.module.css'
import { GoTrash } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../../features/cart/cartData';
import axios from 'axios';

function CartItem({ data }) {
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
        return dispatch(updateProduct({ id: data.id, amount: "" }));
      }
      if (e.target.value == 0) {
        return dispatch(updateProduct({ id: data.id, amount: "" }));
      }
      if (numberRegex.test(e.target.value)) {
        let newCount = Number(e.target.value);
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, { id: data.id, count: newCount });
        if (response.status === 200) {
          return dispatch(updateProduct({ id: data.id, amount: newCount }));
        }
      }
    } catch (error) {
      console.error('Error updating product count:', error);
    }
  }
  const bludHandler = async (e) => {
    try {
      if (e.target.value === "") {
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, { id: data.id, count: 1 });
        if (response.status === 200) {
          return dispatch(updateProduct({ id: data.id, amount: 1 }))
        }
      }
    } catch (error) {
      console.error('Error updating product count:', error);
    }
  }

  const countHandler = async (num) => {
    try {
      const productId = data.id;
      const newCount = data.amount + num;
      if (data.amount + num >= 1) {
        const response = await axios.patch(`http://localhost:3000/cart/${userId}`, { id: data.id, count: newCount });
        if (response.status === 200) {
          return dispatch(updateProduct({ id: data.id, amount: newCount }));
        }
      }
      const response = await axios.delete(`http://localhost:3000/cart/${userId}/${productId}`);
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