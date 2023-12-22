import styles from "./buttonStyles.module.scss";

interface ButtonProps {
    title: string;
    variant: "outlined" | "filled";
    type?: "button" | "reset" | "submit" | undefined;
    id: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, id, onClick, variant }) => {
    return (
        <button
            id={id}
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    );
};

export default Button;
