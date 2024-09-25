import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My-batch-ecomm',
  description: 'Designed by batch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout-body`}>
        <head></head>
        
        <header className="header">
          <Navbar />
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
