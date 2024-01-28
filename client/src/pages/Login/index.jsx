import Layout from "../../components/Layout/Layout"
import LoginRegister from "../../components/LoginRegister"

function LoginPage() {
  return (
    <Layout>
      <LoginRegister activeSection={"LOGIN"} />
    </Layout>
  )
}

export default LoginPage