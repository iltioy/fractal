import styles from "./firstFromStyles.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Select from "../../../../components/Select/Select";
import { useState } from "react";

interface FirstFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const fromValidationSchema = yup.object({
    nickname: yup
        .string()
        .max(30, "Максимальная длинна никнейма - 30 символов")
        .matches(
            /^[a-zа-яё0-9]+$/i,
            "Никнейм должен состоять только из букв и цифр"
        )
        .required("Введите никнейм"),
    name: yup
        .string()
        .max(50, "Максимум 50 букв")
        .matches(/^[a-zа-яё]+$/i, "Имя должно состоять только из букв"),
    surname: yup
        .string()
        .max(50, "Максимум 50 букв")
        .matches(/^[a-zа-яё]+$/i, "Фамимия должна состоять только из букв"),
    sex: yup.string().oneOf(["мужской", "женский"]).required("Выберите пол"),
});

const FirstForm: React.FC<FirstFormProps> = ({ setSubForm }) => {
    const formFormik = useFormik({
        initialValues: {
            nickname: "",
            name: "",
            surname: "",
            sex: "",
        },
        validationSchema: fromValidationSchema,
        // validateOnChange: false,

        onSubmit: (values, { setErrors }) => {
            setSubForm((prevState) => prevState + 1);
            console.log(values);
        },
    });

    const [sex, setSex] = useState("");

    const handleChangeSex = (option: string) => {
        setSex(option);
        console.log(option);
        formFormik.setFieldValue("sex", option);
    };

    return (
        <form onSubmit={formFormik.handleSubmit}>
            <Input
                label="Никнейм"
                placeholder="Никнейм"
                id="field-nickname"
                name="nickname"
                type="text"
                tip={formFormik.touched.nickname && formFormik.errors.nickname}
                value={formFormik.values.nickname}
                handleChange={formFormik.handleChange}
                style={{ marginBottom: "24px" }}
            />

            <Input
                label="Имя"
                placeholder="Имя"
                id="field-name"
                name="name"
                type="text"
                tip={formFormik.touched.name && formFormik.errors.name}
                value={formFormik.values.name}
                handleChange={formFormik.handleChange}
                style={{ marginBottom: "24px" }}
            />

            <Input
                label="Фамилия"
                placeholder="Фамилия"
                id="field-sername"
                name="surname"
                type="text"
                tip={formFormik.touched.surname && formFormik.errors.surname}
                value={formFormik.values.surname}
                handleChange={formFormik.handleChange}
                style={{ marginBottom: "24px" }}
            />

            <Select
                id="field-sex"
                label="Пол"
                options={["мужской", "женский"]}
                handleChange={handleChangeSex}
                value={sex}
                tip={formFormik.touched.sex && formFormik.errors.sex}
                style={{ marginBottom: "88px" }}
            />

            <div className={styles.buttons}>
                <Button
                    type="submit"
                    variant="outlined"
                    id="button-back"
                    onClick={() => {}}
                    title="Назад"
                />

                <Button
                    id="button-next"
                    title="Далее"
                    variant="filled"
                    type="submit"
                    onClick={() => {}}
                />
            </div>
        </form>
    );
};

export default FirstForm;
