
import styles from './styles.module.css'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <>
     <nav>
        About NavBar
     </nav>
     <main className={styles.main}>
        {children}
     </main>
     </>
    )
  }