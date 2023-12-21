import { HTMLInputTypeAttribute } from "react";
import styles from "./inputStyles.module.scss";

interface InputProps {
    placeholder: string;
    id: string;
    name: string;
    type: HTMLInputTypeAttribute;
    style?: React.CSSProperties;
    tip?: string;
    label?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    name,
    id,
    label,
    style,
    type,
    tip,
}) => {
    return (
        <div className={styles.wrapper} style={style}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                name={name}
                id={id}
                type={type}
                className={styles.input}
                placeholder={placeholder}
            />

            {tip && <div className={styles.tip}>{tip}</div>}
        </div>
    );
};

export default Input;
