import '@/styles/global/Imports.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          header
        </header>
        {children}
        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
