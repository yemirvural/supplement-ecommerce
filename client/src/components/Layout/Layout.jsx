import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SlidingCart from "../SlidingCart";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { closeSlidingCart } from "../../features/cart/slidingCart";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const isSlidingCartActive = useSelector((state) => state.slidingCart.isActive);

    useEffect(() => {
        document.body.style.overflow = isSlidingCartActive ? 'hidden' : 'visible';
    }, [isSlidingCartActive]);

    return (
        <>
            <Header />
            <Navbar />
            <div onClick={() => dispatch(closeSlidingCart())} className={`${isSlidingCartActive ? styles.popup : ""}`}></div>
            <SlidingCart />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;