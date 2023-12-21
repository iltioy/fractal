import styles from "./thirdFromStyles.module.scss";

interface ThirdFormProps {
    setSubForm: React.Dispatch<React.SetStateAction<number>>;
}

const ThirdForm: React.FC<ThirdFormProps> = ({ setSubForm }) => {
    return <div>ThirdForm</div>;
};

export default ThirdForm;
