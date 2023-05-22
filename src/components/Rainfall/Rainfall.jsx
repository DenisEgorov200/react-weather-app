import styles from './Rainfall.module.scss';

export const Rainfall = () => {
    return (
        <div className={styles.rainfall}>
            <div className={styles.rainfallRow}>
                <span>Rainfall</span>
                <span>This Year</span>
            </div>
            <div className={styles.rainfallRow}>
                <span>45mm</span>
                <span>+17%</span>
            </div>
        </div>
    );
};
