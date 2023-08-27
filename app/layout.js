import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({  
  weight:['400','700'],
  subsets:['latin'],
})

export const metadata = {
  title: 'ABC Company',
  description: 'This company is just a random company created to create next js app for learning purpose',
  keywords: 'oldest, bring, window, mouse, express, frame, hungry, massage, grandmother'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
        </body>
    </html>
  )
}
