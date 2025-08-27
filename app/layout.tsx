import './globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Deva Portfolio',
  description: 'Personal portfolio of Devaraj',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
