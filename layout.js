import './globals.css'

export const metadata = {
  title: 'Card',
  description: 'City',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900">{children}</body>
    </html>
  )
}
