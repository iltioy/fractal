import styles from "./selectStyles.module.scss";
import selectTick from "../../assets/select_open.png";
import { useState } from "react";

interface SelectProps {
    label: string;
    id: string;
    value: string;
    handleChange: (option: string) => void;
    options: string[];
    style?: React.CSSProperties;
    tip?: string | false;
}

const Select: React.FC<SelectProps> = ({ label, id, options, value, style, handleChange, tip }) => {
    const [open, setOpen] = useState(false);

    const handlePickChoice = (option: string) => {
        setOpen(false);
        handleChange(option);
    };

    return (
        <div id={id} style={style}>
            {label && <div className={styles.label}>{label}</div>}

            <div className={styles.select} onClick={() => setOpen(!open)}>
                <div className={styles.title}>
                    {value ? value : <span className={styles.nochoice}>Не выбрано</span>}
                    <div>
                        <img src={selectTick} alt="" />
                    </div>
                </div>

                {open && (
                    <div className={styles.options}>
                        {options.map((option, index) => (
                            <div
                                className={styles.option}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePickChoice(option);
                                }}
                                key={option}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {tip && <div className={styles.tip}>{tip}</div>}
        </div>
    );
};

export default Select;
