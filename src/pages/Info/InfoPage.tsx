import styles from "./infoStyles.module.scss";
import avatar from "../../assets/avatar.jpg";
import folder from "../../assets/folder.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { setValues } from "../../features/form/formSlice";

const InfoPage = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { phoneNumber: initialPhoneNumber, email: initialEmail } = useSelector(
        (state: RootState) => state.form
    );

    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const [email, setEmail] = useState(initialEmail);

    const [phoneNumberError, setPhoneNumberError] = useState("");

    const handlePhoneNumberChange = (newVal: string) => {
        let numbers = "+" + newVal.replace(/[^0-9]/g, "");
        if (numbers.length > 12) return;

        let maskedNumber = "+7 ";
        for (let i = 2; i < numbers.length; i++) {
            if (i === 2) {
                maskedNumber += "(";
            } else if (i === 5) {
                maskedNumber += ") ";
            } else if (i === 8 || i === 10) {
                maskedNumber += "-";
            }

            maskedNumber += numbers[i];
        }

        setPhoneNumber(maskedNumber);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (phoneNumber.length !== 18) {
            setPhoneNumberError("Введите номер телефона!");
            return;
        }

        dispatch(
            setValues({
                phoneNumber,
                email,
            })
        );
        navigate("/form");
    };

    return (
        <div className={styles.infoPage}>
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header}>
                        <img src={avatar} alt="avatar" className={styles.avatar} />

                        <div className={styles.headerInfo}>
                            <div
                                style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "26px",
                                }}
                            >
                                Артемий Илларионов
                            </div>

                            <div className={styles.socials}>
                                <div className={styles.item}>
                                    <img src={folder} alt="folder" />
                                    <a
                                        href="https://t.me/mrcorss"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Telegram
                                    </a>
                                </div>

                                <div className={styles.item}>
                                    <img src={folder} alt="folder" />
                                    <a
                                        href="https://github.com/iltioy"
                                        style={{ textDecoration: "none" }}
                                    >
                                        GitHub
                                    </a>
                                </div>

                                <div className={styles.item}>
                                    <img src={folder} alt="folder" />
                                    <a
                                        href="https://hh.ru/resume/56a81c83ff0c07c8360039ed1f4b556e77726b"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Резюме
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="" className="infoForm" onSubmit={handleSubmit}>
                    <Input
                        placeholder="+7 999 999-99-99"
                        id="phone"
                        name="phone"
                        label="Номер телефона"
                        type="text"
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handlePhoneNumberChange(e.target.value)
                        }
                        value={phoneNumber}
                        style={{ marginTop: "24px" }}
                        inputStyle={{
                            background: "#F5F5F5",
                            width: "400px",
                        }}
                        tip={phoneNumberError}
                    />
                    <Input
                        placeholder="webstudio.fractal@example.com"
                        id="name"
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        setValue={setEmail}
                        style={{ marginTop: "24px" }}
                        inputStyle={{
                            background: "#F5F5F5",
                            width: "400px",
                        }}
                    />

                    <div style={{ marginTop: "48px" }}>
                        <Button id="button-start" title="Начать" variant="filled" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoPage;
