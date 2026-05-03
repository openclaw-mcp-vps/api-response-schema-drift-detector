import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Schema Drift Detector — Catch Breaking API Changes Instantly',
  description: 'Monitor API endpoints and get alerted the moment a response schema changes. Protect your integrations from silent breaking changes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="acdbdca7-8caf-4247-ab9d-3460f547fde6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
