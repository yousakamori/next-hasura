import { Layout } from '../components/Layout'
import { CreateUser } from '../components/CreateUser'
import { NextPage } from 'next'

const HooksMemo: NextPage = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  )
}
export default HooksMemo
