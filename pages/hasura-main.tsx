import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'

const FetchMain: NextPage = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'network-only',
  })

  if (error) {
    return (
      <Layout title="Hasura FetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  }

  return (
    <Layout title="Hasura fetchPolicy">
      <>
        <p className="mb-6 font-bold">Hasura main page</p>
        {data?.users.map((user) => {
          return (
            <p className="my-1" key={user.id}>
              {user.name}
            </p>
          )
        })}
        <Link href="/hasura-sub">
          <a className="mt-6">Next</a>
        </Link>
      </>
    </Layout>
  )
}
export default FetchMain
