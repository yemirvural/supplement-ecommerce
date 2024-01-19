import styles from './styles.module.css'
import ProductCard from '../ProductCard'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

function FeaturedProducts() {
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/bestseller`);
                setData(response.data);
            } catch (error) {
                navigate('/');
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <div className={styles.products}>
            <h3>ÇOK SATANLAR</h3>
            <div className={styles.wrapper}>
                {
                    data && data.map((product, index) =>
                    (
                        <Link reloadDocument className={styles.link} key={index} to={`/${product.name}`}>
                            <ProductCard product={product} />
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
