import styles from "./modalStyles.module.scss";
import successIcon from "../../assets/success_icon.png";
import errorIcon from "../../assets/error_icon.png";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/store";
import { toggleErrorModal, toggleSuccessModal } from "../../features/modals/modalsSlice";
import { useNavigate } from "react-router";

interface ModalProps {
    title: string;
    alignTitle?: "left" | "center" | "right";
    alignButton?: "left" | "center" | "right";
    status: "success" | "error";
}

const Modal: React.FC<ModalProps> = ({ status, title, alignTitle, alignButton }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div
                className={styles.backScreen}
                onClick={() => {
                    if (status === "success") {
                        dispatch(toggleSuccessModal());
                    } else {
                        dispatch(toggleErrorModal());
                    }
                }}
            ></div>
            <div className={styles.modalWrapper}>
                <div className={styles.modal}>
                    <div className={styles.content}>
                        <div className={`${styles.title} ${alignTitle ? styles[alignTitle] : ""}`}>
                            {title}
                        </div>

                        <div className={styles.status}>
                            {status === "success" && <img src={successIcon} alt="success" />}

                            {status === "error" && <img src={errorIcon} alt="error" />}
                        </div>

                        <div
                            className={`${styles.buttonWrapper} ${
                                alignButton ? styles[alignButton] : ""
                            }`}
                        >
                            {status === "success" && (
                                <Button
                                    title="На главную"
                                    id="button-to-main"
                                    variant="filled"
                                    onClick={() => {
                                        navigate("/");
                                        dispatch(toggleSuccessModal());
                                    }}
                                />
                            )}
                            {status === "error" && (
                                <Button
                                    title="Закрыть"
                                    id="button-close"
                                    variant="filled"
                                    onClick={() => {
                                        dispatch(toggleErrorModal());
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
