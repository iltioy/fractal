import styles from "./formStyles.module.scss";
import ProgressBar from "../../components/ProggressBar/ProgressBar";
import { useState } from "react";
import Input from "../../components/Input/Input";
import FirstForm from "./forms/FirstForm";

const FormPage = () => {
    const [activeItem, setActiveItem] = useState(3);

    return (
        <div className={styles.formPage}>
            <div className={styles.wrapper}>
                <ProgressBar
                    numOfItems={3}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    style={{ marginTop: "62px", marginBottom: "67px" }}
                />

                <div className={styles.mainForm}>
                    <FirstForm />
                </div>
            </div>
        </div>
    );
};

export default FormPage;
