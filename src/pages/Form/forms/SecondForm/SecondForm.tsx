import styles from "./secondFormStyles.module.scss";
import MultipleInput from "../../../../components/MultipleInput/MultipleInput";
import { useEffect, useState } from "react";
import CheckboxGroup from "../../../../components/CheckboxGroup/CheckboxGroup";
import RadioGroup from "../../../../components/RadioGroup/RadioGroup";
import Button from "../../../../components/Button/Button";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useSelector } from "react-redux";
import { setValues } from "../../../../features/form/formSlice";

interface SecondFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const checkboxValues = [1, 2, 3];

const radioValues = [1, 2, 3];

const SecondForm: React.FC<SecondFormProps> = ({ setSubForm }) => {
    const dispatch = useAppDispatch();
    const {
        advantages: initialAdvantages,
        checkbox: initialCheckbox,
        radio: initialRadio,
    } = useSelector((store: RootState) => store.form);

    const [multipleSelctItems, setMultipleSelectItems] = useState(initialAdvantages);

    const [checkboxSelected, setCheckboxSelected] = useState<any[]>(initialCheckbox);
    const [selectedRadio, setSelectedRadio] = useState<number | null>(initialRadio);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            setValues({
                checkbox: checkboxSelected,
                radio: selectedRadio,
                advantages: multipleSelctItems,
            })
        );
        setSubForm((prevState) => prevState + 1);
    };

    useEffect(() => {
        return () => {
            dispatch(
                setValues({
                    checkbox: checkboxSelected,
                    radio: selectedRadio,
                    advantages: multipleSelctItems,
                })
            );
        };
    }, [checkboxSelected, selectedRadio, multipleSelctItems]);

    return (
        <form className={`${styles.multipleInput} `} onSubmit={handleSubmit}>
            <MultipleInput
                items={multipleSelctItems}
                setItems={setMultipleSelectItems}
                label="Преимущества"
                style={{ marginBottom: "24px" }}
            />

            <CheckboxGroup
                items={checkboxValues}
                setSelectedItems={setCheckboxSelected}
                selectedItems={checkboxSelected}
                label="Checbox группа"
                style={{ marginBottom: "24px" }}
            />

            <RadioGroup
                label="Radio группа"
                items={radioValues}
                setSelected={setSelectedRadio}
                selected={selectedRadio}
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
                    onClick={() => {}}
                    type="submit"
                    title="Далее"
                    variant="filled"
                />
            </div>
        </form>
    );
};

export default SecondForm;
