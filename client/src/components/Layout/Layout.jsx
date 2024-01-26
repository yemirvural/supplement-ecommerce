import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SlidingCart from "../SlidingCart";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { closeSlidingCart } from "../../features/cart/slidingCart";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const isSlidingCartActive = useSelector((state) => state.slidingCart.isActive);
    
    return (
        <>
            <Header />
            <Navbar />
            <div onClick={() => dispatch(closeSlidingCart())} className={`${isSlidingCartActive ? styles.popup : ""}`}>2</div>
            <SlidingCart/>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;