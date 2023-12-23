import styles from "./firstFromStyles.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Select from "../../../../components/Select/Select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useSelector } from "react-redux";
import { setValues } from "../../../../features/form/formSlice";

interface FirstFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const fromValidationSchema = yup.object({
    nickname: yup
        .string()
        .max(30, "Максимальная длинна никнейма - 30 символов")
        .matches(/^[a-zа-яё0-9]+$/i, "Никнейм должен состоять только из букв и цифр")
        .required("Введите никнейм"),
    name: yup
        .string()
        .max(50, "Максимум 50 букв")
        .matches(/^[a-zа-яё]+$/i, "Имя должно состоять только из букв")
        .required("Введите имя"),
    surname: yup
        .string()
        .max(50, "Максимум 50 букв")
        .matches(/^[a-zа-яё]+$/i, "Фамимия должна состоять только из букв")
        .required("Введите фамилию"),
    sex: yup.string().oneOf(["мужской", "женский"]).required("Выберите пол"),
});

const FirstForm: React.FC<FirstFormProps> = ({ setSubForm }) => {
    const dispatch = useAppDispatch();
    const {
        nickname: initialNickname,
        name: initialName,
        surname: initialSurname,
        sex: initialSex,
    } = useSelector((state: RootState) => state.form);

    const formFormik = useFormik({
        initialValues: {
            nickname: initialNickname,
            name: initialName,
            surname: initialSurname,
            sex: initialSex,
        },
        validationSchema: fromValidationSchema,
        // validateOnChange: false,

        onSubmit: (values, { setErrors }) => {
            setSubForm((prevState) => prevState + 1);
            dispatch(setValues(values));
        },
    });

    const [sex, setSex] = useState(initialSex);
    const navigate = useNavigate();

    const handleChangeSex = (option: string) => {
        setSex(option);
        formFormik.setFieldValue("sex", option);
    };

    useEffect(() => {
        return () => {
            const { values } = formFormik;
            dispatch(setValues(values));
        };
    }, [formFormik]);

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
                    variant="outlined"
                    id="button-back"
                    onClick={() => {
                        navigate("/");
                    }}
                    title="Назад"
                />

                <Button id="button-next" title="Далее" variant="filled" type="submit" />
            </div>
        </form>
    );
};

export default FirstForm;
