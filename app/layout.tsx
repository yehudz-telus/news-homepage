import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0;"
        ></meta>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </head>
      <body className="container p-4 md:mx-auto">{children}</body>
    </html>
  )
}
