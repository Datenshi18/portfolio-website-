import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas-neue' })

export const metadata = {
  title: 'Digital Lift | Cinematic Digital Experiences',
  description: 'High-performance, visually stunning websites designed to convert. Build something that means something.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
