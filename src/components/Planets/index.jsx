import styles from './styles.module.css';

const Planets = ({ data }) => {
  return (
    <main className={styles.main}>
      {data && (
        <div className={styles.card}>
          <h1>{data.name}</h1>
          <div className={styles.content}>
            <p className={styles.info}>
              Population:{' '}
              <span className={styles.info_number}>{data.population}</span>
            </p>
            <p className={styles.info}>
              Climate:{' '}
              <span className={styles.info_number}>{data.climate}</span>
            </p>
            <p className={styles.info}>
              Terrain:{' '}
              <span className={styles.info_number}>{data.terrain}</span>
            </p>
            <p className={styles.info}>
              Featured in the films:{' '}
              <span className={styles.info_number}>{data.films.length}</span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Planets;
