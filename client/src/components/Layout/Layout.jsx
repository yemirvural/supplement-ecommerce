import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;