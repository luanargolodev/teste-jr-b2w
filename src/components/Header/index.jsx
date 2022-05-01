import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Star Wars</h1>
      <p className={styles.subtitle}>May the force be with you!</p>
    </header>
  );
};

export default Header;
