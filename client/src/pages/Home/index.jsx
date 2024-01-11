import Layout from "../../components/Layout/Layout"
import Launch from "../../components/Launch"
import FeaturedProducts from "../../components/FeaturedProducts"
import FeaturedComments from "../../components/FeaturedComments"

function Home() {
  return (
    <>
      <Layout>
        <Launch />
        <FeaturedProducts/>
        <FeaturedComments/>
      </Layout>
    </>
  )
}

export default Home