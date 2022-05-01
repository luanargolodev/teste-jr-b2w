import styles from './styles.module.css';

const Planets = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Mustafar</h1>
        <div className={styles.content}>
          <p className={styles.info}>
            Population: <span className={styles.info_number}>5000</span>
          </p>
          <p className={styles.info}>
            Population: <span className={styles.info_number}>5000</span>
          </p>
          <p className={styles.info}>
            Population: <span className={styles.info_number}>5000</span>
          </p>
          <p className={styles.info}>
            Population: <span className={styles.info_number}>5000</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Planets;
