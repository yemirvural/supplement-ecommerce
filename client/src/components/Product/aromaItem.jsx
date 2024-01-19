import { FaCheckCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import styles from "./styles.module.css";
import { updateAroma } from "../../features/product/productSlice";

function SizeItem({ data }) {
    const aroma = useSelector((state) => state.product.aroma);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(updateAroma(data.name))} className={`${styles.aromaItem} ${data.name === aroma ? styles.active : ""}`}>
            {data.name}
            <span className={styles.tick}>
                <FaCheckCircle size={20} />
            </span>
            <span style={{ backgroundColor: `${data.hex}` }}></span>
        </div>
    )
}

export default SizeItem