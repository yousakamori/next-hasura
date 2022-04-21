import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { LocalStateA } from '../components/LocalStateA'

const LocalStatePageA: NextPage = () => {
  return (
    <Layout title="Local State A">
      <LocalStateA />
    </Layout>
  )
}
export default LocalStatePageA
