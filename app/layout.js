import '@/styles/global/Imports.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          {children}
        </div>
        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
