import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { LocalStateB } from '../components/LocalStateB'

const LocalStatePageB: NextPage = () => {
  return (
    <Layout title="Local State B">
      <LocalStateB />
    </Layout>
  )
}
export default LocalStatePageB
