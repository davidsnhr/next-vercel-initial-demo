import Link from 'next/link';
import React from 'react'
import MainLayout from '../../components/layouts/MainLayout';
import styles from '../../components/layouts/MainLayout.module.css'

const pricing = () => {
    return (
      <MainLayout>
        <h1 className={styles.title}>
          Welcome to <a>Contact page</a>
        </h1>
        <p className={styles.title}>
          Ir a <Link href="/">home</Link>
        </p>
      </MainLayout>
    );
}

export default pricing