import styles from '../styles/Estilo.module.css';
import Layout from '../components/Layout';

export default function Estilo() {
  return (
    <Layout titulo="Exemplo de CSS modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS Module</h1>
      </div>
    </Layout>
  );
}
