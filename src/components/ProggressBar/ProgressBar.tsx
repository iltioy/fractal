import styles from "./progressBarStyles.module.scss";
import tick from "../../assets/tick.png";
// ${styles.activePoint}
// ${styles.completedPoint}

const numberOfElements = 4;

interface ProgressBarProps {
    numOfItems: number;
    activeItem: number;
    setActiveItem: React.Dispatch<React.SetStateAction<number>>;
    style?: React.CSSProperties;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    activeItem,
    numOfItems,
    setActiveItem,
    style,
}) => {
    return (
        <div className={styles.progressBarWrapper} style={style}>
            <div className={styles.bar}>
                <div
                    className={styles.progress}
                    style={{
                        width: `calc(${((activeItem - 1) / (numOfItems - 1)) * 100}% + 8px)`,
                    }}
                />
                {new Array(numOfItems).fill(0).map((_item, index) => {
                    let currId = index + 1;
                    let leftPercentage = (index / (numOfItems - 1)) * 100;

                    return (
                        <div
                            key={index}
                            className={`${styles.point} ${
                                currId === activeItem
                                    ? styles.activePoint
                                    : currId < activeItem
                                    ? styles.completedPoint
                                    : ""
                            }`}
                            style={{
                                left: `calc(${leftPercentage}% - 5px)`,
                            }}
                        >
                            <div className={styles.activePointDot}></div>
                            {currId < activeItem && <img src={tick} alt="" />}
                        </div>
                    );
                })}
            </div>

            <div className={styles.numbers}>
                {new Array(numOfItems).fill(0).map((item, index) => {
                    let leftPercentage = (index / (numOfItems - 1)) * 100;

                    return (
                        <div
                            key={index}
                            className={styles.item}
                            style={{ left: `calc(${leftPercentage}% - 3px)` }}
                        >
                            {index + 1}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;
