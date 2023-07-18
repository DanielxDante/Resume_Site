import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono} from 'next/font/google'

import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/footer/Footer'


const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Daniel's",
  description: "Daniel's Portfolio Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
