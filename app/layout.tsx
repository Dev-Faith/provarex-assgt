import type { Metadata } from 'next'
import {  Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ weight: ["500","400", "700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Developed by Muyiwa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
