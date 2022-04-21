import { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}
export default Home
