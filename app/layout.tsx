import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brand Film - Coming Soon',
  description: 'An immersive brand story experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
