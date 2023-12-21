import styles from "./radioGroupStyles.module.scss";

interface RadioGroupProps {
    items: any[];
    setSelected: React.Dispatch<React.SetStateAction<number | null>>;
    label?: string;
    style?: React.CSSProperties;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    style,
    items,
    setSelected,
}) => {
    return (
        <div style={style}>
            {label && <label className={styles.label}>{label}</label>}

            <div>
                {items.map((item) => (
                    <div className={styles.item} key={item}>
                        <input
                            className={styles.radio}
                            type="radio"
                            name="radio"
                            id={`field-radio-group-option-${item}`}
                            onChange={() => setSelected(item)}
                        />

                        <div>{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
