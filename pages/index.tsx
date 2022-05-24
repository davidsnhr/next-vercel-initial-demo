
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Welcome to <a>Home page</a>
      </h1>
      <p className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </p>
    </MainLayout>
  );
}
