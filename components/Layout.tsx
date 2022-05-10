import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export type LayoutProps = {
  children: ReactNode
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Home
                </a>
              </Link>
              <Link href="/local-state-a">
                <a
                  data-testid="makevar-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  makeVar
                </a>
              </Link>
              <Link href="/hasura-main">
                <a
                  data-testid="fetchpolicy-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  fetchPolicy(Hasura)
                </a>
              </Link>
              <Link href="/hasura-crud">
                <a
                  data-testid="crud-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  CRUD(Hasura)
                </a>
              </Link>
              <Link href="/hasura-ssg">
                <a
                  data-testid="ssg-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  SSG+ISR(Hasura)
                </a>
              </Link>
              <Link href="/hooks-memo">
                <a
                  data-testid="memo-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  custom hook + memo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-12 border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}
