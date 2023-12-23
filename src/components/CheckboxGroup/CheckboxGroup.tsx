import styles from "./checkboxGroupStyles.module.scss";

interface CheckboxGroupProps {
    items: any[];
    setSelectedItems: React.Dispatch<React.SetStateAction<any[]>>;
    selectedItems: number[];
    label?: string;
    style?: React.CSSProperties;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    items,
    setSelectedItems,
    label,
    style,
    selectedItems,
}) => {
    const handleCheck = (checked: boolean, item: any) => {
        if (checked) {
            setSelectedItems((prevState) => [...prevState, item]);
        } else {
            setSelectedItems((prevState) => prevState.filter((prevItem) => prevItem !== item));
        }
    };

    return (
        <div style={style}>
            {label && <div className={styles.label}>{label}</div>}

            {items.map((item) => (
                <div className={styles.item} key={item} id={`field-checkbox-group-option-${item}`}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        style={{ marginRight: "8px" }}
                        onChange={(e) => handleCheck(e.target.checked, item)}
                        checked={selectedItems.includes(item)}
                    />
                    <div>{item}</div>
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;
