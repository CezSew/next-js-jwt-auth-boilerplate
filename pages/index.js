import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.home__container}>
    <section className={styles.home__main}>
      <p>
        {`Hello there, maybe `}
        <a className={styles.link} href="/login">{`login?`}</a>
      </p>
      <p>
        {`Or create an account here- `}
        <a className={styles.link} href="/register">{`register.`}</a>
      </p>
    </section>
  </div>
);

export default Home;