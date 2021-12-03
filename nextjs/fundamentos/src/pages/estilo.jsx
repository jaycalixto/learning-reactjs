import styles from '../styles/Estilo.module.css';
import Link from 'next/link';

export default function Estilo() {
  return (
    <div className={styles.roxo}>
      <Link href="/">Voltar</Link>
      <h1>Estilo usando CSS Module</h1>
    </div>
  );
}
