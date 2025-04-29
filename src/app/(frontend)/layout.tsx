import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Payload CRUD',
  description: 'A CRUD application using Payload CMS in a Next.js app.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
