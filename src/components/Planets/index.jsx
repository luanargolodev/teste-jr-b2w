import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const Planets = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    function getPlanet() {
      const planet = Math.floor(Math.random() * 60) + 1;
      fetch(`https://swapi.dev/api/planets/${planet}/`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }

    getPlanet();
  }, []);

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
