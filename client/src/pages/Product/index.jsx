import Layout from "../../components/Layout/Layout"
import { useParams, Navigate } from 'react-router-dom';
import FeaturedProducts from '../../components/FeaturedProducts'
import ProductComments from '../../components/ProductComments'
import Product from '../../components/Product'



function ProductPage() {
  let { productName } = useParams();

  if (!productName) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <Layout>
      <Product productName={productName} />
      <FeaturedProducts />
      <ProductComments />
    </Layout>
  )
}

export default ProductPage