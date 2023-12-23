import styles from "./formStyles.module.scss";
import ProgressBar from "../../components/ProggressBar/ProgressBar";
import { useState } from "react";
import Input from "../../components/Input/Input";
import FirstForm from "./forms/FirstForm/FirstForm";
import SecondForm from "./forms/SecondForm/SecondForm";
import ThirdForm from "./forms/ThirdFrom/ThirdForm";

const FormPage = () => {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <div
            className={`${styles.formPage} ${
                activeItem === 3 ? styles.shortPage : styles.highPage
            }`}
        >
            <div className={styles.wrapper}>
                <ProgressBar
                    numOfItems={3}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    style={{ marginTop: "62px", marginBottom: "67px" }}
                />

                <div className={`${styles.mainForm} `}>
                    {activeItem === 1 && <FirstForm setSubForm={setActiveItem} />}

                    {activeItem === 2 && <SecondForm setSubForm={setActiveItem} />}

                    {activeItem === 3 && <ThirdForm setSubForm={setActiveItem} />}
                </div>
            </div>
        </div>
    );
};

export default FormPage;
