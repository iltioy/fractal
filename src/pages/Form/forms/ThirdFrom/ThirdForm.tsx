import styles from "./thirdFromStyles.module.scss";
import Button from "../../../../components/Button/Button";
import Textarea from "../../../../components/Textarea/Textarea";
import { useState } from "react";

interface ThirdFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const ThirdForm: React.FC<ThirdFormProps> = ({ setSubForm }) => {
    const [text, setText] = useState("");

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
                <Button id="button-back" title="Назад" variant="outlined" />
                <Button id="button-send" title="Отправить" variant="filled" />
            </div>
        </div>
    );
};

export default ThirdForm;
