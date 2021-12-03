import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, titulo }) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{titulo ?? 'not found'}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  )
}
