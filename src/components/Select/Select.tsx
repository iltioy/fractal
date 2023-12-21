import styles from "./selectStyles.module.scss";
import selectTick from "../../assets/select_open.png";
import { useState } from "react";

interface SelectProps {
    label: string;
    id: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    options: string[];
    style?: React.CSSProperties;
}

const Select: React.FC<SelectProps> = ({
    label,
    id,
    options,
    setValue,
    value,
    style,
}) => {
    const [open, setOpen] = useState(false);

    const handlePickChoice = (option: string) => {
        setOpen(false);
        setValue(option);
    };

    return (
        <div id={id} style={style}>
            {label && <div className={styles.label}>{label}</div>}

            <div className={styles.select}>
                <div className={styles.title} onClick={() => setOpen(!open)}>
                    {value ? (
                        value
                    ) : (
                        <span className={styles.nochoice}>Не выбрано</span>
                    )}
                    <div>
                        <img src={selectTick} alt="" />
                    </div>
                </div>

                {open && (
                    <div className={styles.options}>
                        {options.map((option, index) => (
                            <div
                                className={styles.option}
                                onClick={() => handlePickChoice(option)}
                                key={option}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;
