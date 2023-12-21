import Input from "../Input/Input";
import styles from "./multipleInputStyles.module.scss";
import trashCan from "../../assets/trash_can.png";
import plus from "../../assets/purple_plus.png";

interface ItemType {
    id: number;
    value: string;
}

interface MultipleInputProps {
    label?: string;
    items: ItemType[];
    setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
    style?: React.CSSProperties;
}

const MultipleInput: React.FC<MultipleInputProps> = ({
    label,
    items,
    setItems,
    style,
}) => {
    const handleItemChange = (value: string, id?: number) => {
        setItems((prevState) => {
            const newState = prevState.map((item) => {
                if (item.id === id) {
                    return {
                        id: item.id,
                        value: value,
                    };
                }

                return item;
            });

            return newState;
        });

        console.log(value);
        console.log(items);
    };

    return (
        <div style={style}>
            {label && <div className={styles.label}>{label}</div>}

            <div className={`${styles.itemsWrapper} hiddenScroll`}>
                {items.map((item, index) => (
                    <div className={styles.item} key={item.id}>
                        <Input
                            value={item.value}
                            onChangeMultiple={handleItemChange}
                            multipleInputId={item.id}
                            id={`field-advantages-${index}`}
                        />

                        <img
                            src={trashCan}
                            id={`button-remove-${index}`}
                            alt="delete"
                            onClick={() => {
                                console.log(items);
                                setItems((prevState) =>
                                    prevState.filter(
                                        (delItem) => delItem.id !== item.id
                                    )
                                );
                            }}
                        />
                    </div>
                ))}

                <div
                    className={styles.addButton}
                    id="button-add"
                    onClick={() =>
                        setItems((prevItems) => {
                            let maxId = 0;
                            prevItems.forEach(({ id }) =>
                                id > maxId ? (maxId = id) : null
                            );
                            return [...prevItems, { id: maxId + 1, value: "" }];
                        })
                    }
                >
                    <img src={plus} alt="add" />
                </div>
            </div>
        </div>
    );
};

export default MultipleInput;
