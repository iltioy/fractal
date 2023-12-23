import styles from "./thirdFromStyles.module.scss";
import Button from "../../../../components/Button/Button";
import Textarea from "../../../../components/Textarea/Textarea";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useSelector } from "react-redux";
import { setValues } from "../../../../features/form/formSlice";
import axios from "axios";
import { toggleErrorModal, toggleSuccessModal } from "../../../../features/modals/modalsSlice";

interface ThirdFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const ThirdForm: React.FC<ThirdFormProps> = ({ setSubForm }) => {
    const dispatch = useAppDispatch();
    const formValues = useSelector((store: RootState) => store.form);

    const [text, setText] = useState(formValues.text);
    const [buttonActive, setButtonActive] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(
                setValues({
                    text,
                })
            );
        };
    }, [text]);

    const getRandomArbitrary = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    const handleSubmit = async () => {
        dispatch(setValues({ text }));
        setButtonActive(false);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const random = getRandomArbitrary(1, 100);

            if (random < 50) {
                dispatch(toggleSuccessModal());
            } else {
                throw new Error("Ошибка");
            }

            // const res = await axios.post("form", formValues);
        } catch (error) {
            dispatch(toggleErrorModal());
        }

        setButtonActive(true);
    };

    return (
        <div>
            <Textarea
                text={text}
                setText={setText}
                size={200}
                label="О себе"
                style={{ marginBottom: "64px" }}
            />
            <div className={styles.buttons}>
                <Button
                    id="button-back"
                    title="Назад"
                    variant="outlined"
                    onClick={() => setSubForm((prevState) => prevState - 1)}
                />
                <Button
                    id="button-send"
                    title="Отправить"
                    variant="filled"
                    onClick={() => {
                        if (buttonActive) {
                            handleSubmit();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ThirdForm;
