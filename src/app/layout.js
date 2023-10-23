import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taral Gold',
  description: 'A Next Generation Crypto Banking Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="A Next Generation Crypto Banking Platform"
        />
        <meta property="og:title" content="Taral Gold" />
        <meta
          property="og:description"
          content="A Next Generation Crypto Banking Platform"
        />
        <meta property="og:image" content="/images/gold.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/gold.png" />
        {/* <link rel="icon" href="/images/gold.png" /> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
