import styles from "./firstFromStyles.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import { useState } from "react";

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
        .matches(/^[a-zа-яё]+$/i),
    surname: yup
        .string()
        .max(50, "Максимум 50 букв")
        .matches(/^[a-zа-яё]+$/i),
    sex: yup.string().oneOf(["man", "woman"]),
});

const FirstForm = () => {
    const formFormik = useFormik({
        initialValues: {
            nickname: "",
            name: "",
            surname: "",
        },
        validationSchema: fromValidationSchema,
        // validateOnChange: false,

        onSubmit: (values, { setErrors }) => {
            console.log(values);
        },
    });

    const [sex, setSex] = useState("");

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
                setValue={setSex}
                value={sex}
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
