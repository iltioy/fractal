import styles from "./infoStyles.module.scss";
import avatar from "../assets/avatar.jpg";
import folder from "../assets/folder.png";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const InfoPage = () => {
    return (
        <div className={styles.infoPage}>
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header}>
                        <img
                            src={avatar}
                            alt="avatar"
                            className={styles.avatar}
                        />

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
                                        href="#"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Telegram
                                    </a>
                                </div>

                                <div className={styles.item}>
                                    <img src={folder} alt="folder" />
                                    <a
                                        href="#"
                                        style={{ textDecoration: "none" }}
                                    >
                                        GitHub
                                    </a>
                                </div>

                                <div className={styles.item}>
                                    <img src={folder} alt="folder" />
                                    <a
                                        href="#"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Резюме
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="" className="infoForm">
                    <Input
                        placeholder="+7 999 999-99-99"
                        id="phone"
                        name="name"
                        label="Номер телефона"
                        type="text"
                        style={{ marginTop: "24px" }}
                    />
                    <Input
                        placeholder="webstudio.fractal@example.com"
                        id="name"
                        name="email"
                        label="Email"
                        type="email"
                        style={{ marginTop: "24px" }}
                    />

                    <div style={{ marginTop: "48px" }}>
                        <Button title="Начать" type="filled" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoPage;
