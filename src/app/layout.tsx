export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
        <h1>header</h1>
        
        {children}
        <h3>footer</h3>
        </body>
      
    </html>
  )
}
