import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.home__container}>
    <section className={styles.home__main}>
      <p>
        {`If you have an account- `}
        <a className={styles.link} href="/login">{`login.`}</a>
      </p>
      <p>
        {`If not, please `}
        <a className={styles.link} href="/register">{`register.`}</a>
      </p>
    </section>
  </div>
);

export default Home;