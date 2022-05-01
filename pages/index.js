import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Home = () => (
  <div className={styles.home__container}>
    <section className={styles.home__main}>
      <p>
        {`If you have an account- `}
        <Link href="/login" passHref>
            <a className={styles.link}>login.</a>
        </Link>
      </p>
      <p>
        {`If not, please `}
        <Link href="/register" passHref>
            <a className={styles.link}>register.</a>
        </Link>
      </p>
    </section>
  </div>
);

export default Home;