import { HTMLInputTypeAttribute } from "react";
import styles from "./inputStyles.module.scss";

interface InputProps {
    placeholder?: string;
    id?: string;
    name?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
    setValue?: React.Dispatch<React.SetStateAction<string>>;

    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    tip?: string | undefined | false;
    label?: string;

    handleChange?: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(
            field: T_1
        ): T_1 extends React.ChangeEvent<any>
            ? void
            : (e: string | React.ChangeEvent<any>) => void;
    };

    onChangeMultiple?: (value: string, id?: number) => void;
    multipleInputId?: number;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    name,
    id,
    label,
    style,
    value,
    inputStyle,
    type,
    tip,
    handleChange,
    setValue,
    onChangeMultiple,
    multipleInputId,
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
                style={inputStyle}
                value={value}
                onChange={
                    onChangeMultiple
                        ? (e) =>
                              onChangeMultiple(e.target.value, multipleInputId)
                        : handleChange
                        ? handleChange
                        : (e) => (setValue ? setValue(e.target.value) : "")
                }
            />

            {tip && <div className={styles.tip}>{tip}</div>}
        </div>
    );
};

export default Input;
