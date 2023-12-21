import styles from "./secondFormStyles.module.scss";
import MultipleInput from "../../../../components/MultipleInput/MultipleInput";
import { useState } from "react";
import CheckboxGroup from "../../../../components/CheckboxGroup/CheckboxGroup";
import RadioGroup from "../../../../components/RadioGroup/RadioGroup";
import Button from "../../../../components/Button/Button";

interface SecondFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const defaultMultipleSelectItems = [
    {
        id: 1,
        value: "",
    },
    {
        id: 2,
        value: "",
    },
    {
        id: 3,
        value: "",
    },
];

const checkboxValues = [1, 2, 3];

const radioValues = [1, 2, 3];

const SecondForm: React.FC<SecondFormProps> = ({ setSubForm }) => {
    const [multipleSelctItems, setMultipleSelectItems] = useState(
        defaultMultipleSelectItems
    );

    const [checkboxSelected, setCheckboxSelected] = useState<any[]>([]);
    const [selectedRadio, setSelectedRadio] = useState<number | null>(null);

    console.log(selectedRadio);

    return (
        <form className={`${styles.multipleInput} `}>
            <MultipleInput
                items={multipleSelctItems}
                setItems={setMultipleSelectItems}
                label="Преимущества"
                style={{ marginBottom: "24px" }}
            />

            <CheckboxGroup
                items={checkboxValues}
                setSelectedItems={setCheckboxSelected}
                label="Checbox группа"
                style={{ marginBottom: "24px" }}
            />

            <RadioGroup
                label="Radio группа"
                items={radioValues}
                setSelected={setSelectedRadio}
                style={{ marginBottom: "64px" }}
            />

            <div className={styles.buttons}>
                <Button
                    id="button-back"
                    onClick={() => setSubForm((prevState) => prevState - 1)}
                    title="Назад"
                    variant="outlined"
                />
                <Button
                    id="button-next"
                    onClick={() => setSubForm((prevState) => prevState + 1)}
                    title="Далее"
                    variant="filled"
                />
            </div>
        </form>
    );
};

export default SecondForm;
