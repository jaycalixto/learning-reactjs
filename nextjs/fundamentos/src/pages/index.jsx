import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/estilo" >
        Estilo
      </Link>
      <Link href="/exemplo" >
        Exemplo
      </Link>
    </div>
  );
}
