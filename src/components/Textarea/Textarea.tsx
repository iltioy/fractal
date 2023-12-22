import { useState } from "react";
import styles from "./textareaStyles.module.scss";

interface TextareaProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    size: number;
    label?: string;
    tip?: string | false;
    style?: React.CSSProperties;
}

const Textarea: React.FC<TextareaProps> = ({ label, tip, style, setText, size, text }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const countWithoutSpaces = e.target.value.replace(/\s/g, "").length;

        if (countWithoutSpaces <= 200) {
            setText(e.target.value);
            setCharCount(countWithoutSpaces);
        }
    };

    const [charCount, setCharCount] = useState(0);

    return (
        <div style={style}>
            {label && <div className={styles.label}>{label}</div>}
            <textarea
                className={`${styles.textarea} hiddenScroll`}
                name=""
                id=""
                cols={30}
                rows={10}
                value={text}
                onChange={(e) => handleChange(e)}
            ></textarea>
            <div className={styles.bottomArea}>
                {tip && <div className={styles.tip}>{tip}</div>}
                <div className={styles.wordsCount}>
                    {charCount}/{size}
                </div>
            </div>
        </div>
    );
};

export default Textarea;
