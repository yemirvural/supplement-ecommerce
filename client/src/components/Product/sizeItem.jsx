import { FaCheckCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import styles from "./styles.module.css";
import { updateSize } from "../../features/product/productSlice";

function SizeItem({ data, isAromaExist }) {
    const size = useSelector((state) => state.product.size);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(updateSize(data.weight))} className={`${styles.sizeItem} ${data.weight === size ? styles.active : ""}`}>{data.weight} {data.piece > 1 ? `ADET` : ""}<span>{data.service} servis</span>
            <span className={styles.tick}>
                <FaCheckCircle size={20} />
            </span>
        </div>
    )
}

export default SizeItem