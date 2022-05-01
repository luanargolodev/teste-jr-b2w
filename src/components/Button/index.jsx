import styles from './styles.module.css';

const Button = ({ title, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  );
};

export default Button;
