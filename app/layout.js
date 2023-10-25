import styles from "../css/page.module.css"

export const metadata = {
  title: 'Next js',
  description: 'Next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.bodyLayout}>
        {children}
        </body>
    </html>
  )
}
