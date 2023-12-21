import styles from "./buttonStyles.module.scss";

interface ButtonProps {
    title: string;
    type: "outlined" | "filled";
}

const Button: React.FC<ButtonProps> = ({ title, type }) => {
    return <div className={`${styles.button} ${styles[type]}`}>{title}</div>;
};

export default Button;
