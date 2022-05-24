import Link from 'next/link';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a>About page</a>
      </h1>
      <p className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </p>
    </>
  );
};

about.getLayout = function getLayout(page: JSX.Element) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default about;
