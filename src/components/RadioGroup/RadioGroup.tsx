import styles from "./radioGroupStyles.module.scss";

interface RadioGroupProps {
    items: any[];
    setSelected: React.Dispatch<React.SetStateAction<number | null>>;
    selected: number | null;
    label?: string;
    style?: React.CSSProperties;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, style, items, setSelected, selected }) => {
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
                            checked={item === selected ? true : false}
                        />

                        <div>{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
